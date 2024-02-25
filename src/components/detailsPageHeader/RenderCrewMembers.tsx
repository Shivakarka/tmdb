const RenderCrewMembers = ({
  crew,
}: {
  crew: { name: string; job: string }[];
}) => {
  return crew.map((member: { name: string; job: string }) => (
    <div key={member.name}>
      <p className="text-lg font-bold">{member.name}</p>
      <p>{member.job}</p>
    </div>
  ));
};

export default RenderCrewMembers;
