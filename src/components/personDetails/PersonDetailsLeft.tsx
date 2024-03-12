import { useParams } from "react-router-dom";
import { NoImage } from "../../utils/svgs";
import {
  usePerson,
  usePersonCredits,
  usePersonExternalIds,
} from "../../utils/customHooks";
import SocialMediaIcons from "../statsAndFacts/SocialMediaIcons";
import {
  calculateAge,
  formattedReleaseDate,
} from "../../utils/helperFunctions";
import LoadingSpinner from "../loader/LoadingSpinner";

const PersonDetailsLeft = () => {
  const { id } = useParams();

  const { data: PersonDetails, isLoading: PersonDetailsLoading } = usePerson(
    Number(id),
  );
  const { data: PersonCredits, isLoading: PersonCreditsLoading } =
    usePersonCredits(Number(id));
  const { data: PersonExternalIds, isLoading: PersonExternalIdsLoading } =
    usePersonExternalIds(Number(id));

  if (
    PersonDetailsLoading ||
    PersonCreditsLoading ||
    PersonExternalIdsLoading
  ) {
    return <LoadingSpinner />;
  }

  return (
    <div className="mx-auto flex h-full flex-col items-start gap-7">
      <img
        src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${PersonDetails?.profile_path}`}
        alt={PersonDetails?.name}
        width={300}
        height={450}
        className="rounded-lg"
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          const target = e.target as HTMLImageElement;
          target.src = `${NoImage}`;
        }}
        loading="lazy"
      />
      <SocialMediaIcons {...PersonExternalIds} />
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="mb-3 text-xl font-semibold">Personal Info</h3>
          {PersonDetails?.known_for_department && (
            <p>
              <strong>Known For:</strong>
              <br /> {PersonDetails?.known_for_department}
            </p>
          )}
        </div>
        <div>
          <p>
            <strong>Known Credits:</strong>
            <br />
            {PersonCredits?.cast.length > 0
              ? PersonCredits?.cast?.length - 1
              : 0}
          </p>
        </div>
        <div>
          <p>
            <strong>Gender:</strong>
            <br />
            {PersonDetails?.gender === 1 ? "Female" : "Male"}
          </p>
        </div>
        {PersonDetails?.birthday && (
          <div>
            <p>
              <strong>Birthday:</strong>
              <br />
              {formattedReleaseDate(PersonDetails?.birthday)} (
              {calculateAge(PersonDetails?.birthday)} years old)
            </p>
          </div>
        )}
        {PersonDetails?.place_of_birth && (
          <div>
            <p>
              <strong>Place of Birth:</strong> <br />
              {PersonDetails?.place_of_birth}
            </p>
          </div>
        )}
        {PersonDetails?.also_known_as.length > 0 && (
          <div>
            <p>
              <strong>Also Known As:</strong>
              <br />
              {PersonDetails?.also_known_as?.map(
                (item: string, index: number) => (
                  <span key={index}>
                    {item}
                    <br />
                  </span>
                ),
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonDetailsLeft;
