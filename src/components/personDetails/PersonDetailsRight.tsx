import { Link, useParams } from "react-router-dom";
import { usePerson, usePersonCredits } from "../../utils/customHooks";
import { NoImage } from "../../utils/svgs";
import LoadingSpinner from "../loader/LoadingSpinner";

const PersonDetailsRight = () => {
  const { id } = useParams();

  const { data: PersonDetails, isLoading: PersonDetailsLoading } = usePerson(
    Number(id),
  );
  const { data: PersonCredits, isLoading: PersonCreditsLoading } =
    usePersonCredits(Number(id));

  if (PersonDetailsLoading || PersonCreditsLoading) {
    return <LoadingSpinner />;
  }

  const sortedActingData = [...(PersonCredits?.cast ?? [])].sort((a, b) => {
    const dateA = a.release_date ? new Date(a.release_date) : new Date(0);
    const dateB = b.release_date ? new Date(b.release_date) : new Date(0);
    return dateB.getTime() - dateA.getTime(); // Sorting in descending order
  });

  return (
    <div className="flex flex-col gap-7">
      <h1 className="text-4xl font-bold">{PersonDetails?.name}</h1>
      {PersonDetails?.biography && (
        <div>
          <h3 className="mb-3 text-xl font-semibold">Biogragphy</h3>
          {PersonDetails?.biography
            .split("\n")
            .map((para: string, index: number) => (
              <p className="mb-5" key={index}>
                {para}
              </p>
            ))}
        </div>
      )}
      <div>
        <h3 className="mb-3 text-xl font-semibold">Known For</h3>
        <div className="flex overflow-x-scroll">
          {PersonCredits?.cast?.map((movie: any, index: number) => (
            <Link
              to={
                movie?.media_type === "movie"
                  ? `/movie/${movie.id}`
                  : `/tv/${movie.id}`
              }
              key={index}
              className="flex min-w-[150px] 
                 flex-col items-center gap-1"
            >
              <img
                src={`https://media.themoviedb.org/t/p/w150_and_h225_bestv2/${movie.poster_path}`}
                alt={movie.title}
                className="h-[195px] w-[130px] cursor-pointer rounded-lg"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `${NoImage}`;
                }}
              />
              <p className="mb-3 cursor-pointer text-center hover:text-[#01B4E4]">
                {movie.title} {movie?.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-3 text-xl font-semibold">Acting</h3>
        <p>
          <strong> {!sortedActingData && "No data available"}</strong>
        </p>
        <div>
          {sortedActingData?.map((movie: any, index: number) => (
            <div key={index} className="mb-3 flex items-start gap-3">
              <p className="min-w-[100px]">
                <strong>{movie.release_date || "-"}</strong>
              </p>
              {movie.title || movie.name ? (
                <div>
                  <p>
                    <strong>{movie.title}</strong>
                    <strong>{movie.name}</strong>
                  </p>
                  {movie.character && <p>as {movie.character}</p>}
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonDetailsRight;
