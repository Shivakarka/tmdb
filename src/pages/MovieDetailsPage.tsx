const MovieDetailsPage = () => {
  const genres =[
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    }
  ];

  const genreNames = genres.map(genre => genre.name).join(', ');

  return (
    <div>
      <div
        className={"relative w-full md:h-[510px] grid grid-cols-1 grid-rows-[20%,80%] md:grid-rows-1 md:grid-cols-[30%,70%] content-center overflow-hidden bg-[rgb(32,11,11)]"}>
        <div
          className={"absolute inset-0 md:bg-[url('https://image.tmdb.org/t/p/w500/pwGmXVKUgKN13psUjlhC9zBcq1o.jpg')] bg-no-repeat bg-cover bg-[top_left] opacity-50"}></div>
        <div
          className={"relative w-full h-[180px] flex gap-2 md:block md:w-full md:h-full md:mt-[5em] lg:mt-8 bg-[url('https://image.tmdb.org/t/p/w500/pwGmXVKUgKN13psUjlhC9zBcq1o.jpg')] md:bg-none"}>
          <img src={"https://media.themoviedb.org/t/p/w300_and_h450_bestv2/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg"}
               alt={"poster"} className={"w-[100px] ml-2 mt-1 md:mt-0 h-fit md:pl-0 md:ml-auto md:w-fit md:h-fit "}
               style={{ borderRadius: "8px" }} />
        </div>
        <div className={"relative w-full px-6 py-10 mt-5 flex flex-col text-white items-center md:items-start "}>
          <h1 className={"text-2xl md:text-4xl font-bold"}>Madam Web <span
            className={"font-normal text-gray-200"}>(2024)</span></h1>
          <div className={"flex flex-wrap justify-center"}>
            <p className={"text-md font-normal me-8"}>02/16/2024 (IN)</p>
            <ul className={"inline-flex md:list-disc me-8 order-3 md:order-2 text-center"}>
              <li>{genreNames}</li>
            </ul>
            <ul className={"inline-flex list-disc me-8 order-2 md:order-3"}>
              <li>1hr 56m</li>
            </ul>
          </div>
          <p className={"italic text-lg py-2 text-gray-200 self-start"}>Her web connects them all.</p>
          <p className={"text-xl font-bold self-start"}>Overview</p>
          <p className={"text-lg pt-1 self-start"}>Forced to confront revelations about her past, paramedic Cassandra
            Webb forges a relationship with three young women destined for powerful futures...if they can all survive a
            deadly present.</p>
          <div className={"w-full grid grid-cols-[1fr,1fr] md:grid-cols-[1fr,1fr,1fr] mt-4 gap-y-5"}>
            <div>
              <p className={"text-lg font-bold"}>S.J. Clarkson</p>
              <p>Director, Screenplay</p>
            </div>
            <div>
              <p className={"text-lg font-bold"}>S.J. Clarkson</p>
              <p>Director, Screenplay</p>
            </div>
            <div>
              <p className={"text-lg font-bold"}>S.J. Clarkson</p>
              <p>Director, Screenplay</p>
            </div>
            <div>
              <p className={"text-lg font-bold"}>S.J. Clarkson</p>
              <p>Director, Screenplay</p>
            </div>
            <div>
              <p className={"text-lg font-bold"}>S.J. Clarkson</p>
              <p>Director, Screenplay</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsPage;