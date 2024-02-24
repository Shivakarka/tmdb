const Keywords = ({ KeywordsData }: { KeywordsData: any }) => {
  return (
    <section title="keywords">
      <p>
        <strong>Keywords</strong>
      </p>
      <ul className=" flex cursor-pointer flex-wrap gap-2 whitespace-nowrap">
        {KeywordsData?.keywords?.map(
          (keyword: { id: number; name: string }) => (
            <li
              key={keyword.id}
              className="rounded-md bg-gray-200 px-2 py-1 text-sm"
            >
              {keyword.name}
            </li>
          ),
        )}
        {!KeywordsData?.keywords?.length && "No keywords have been added"}
      </ul>
    </section>
  );
};

export default Keywords;
