export default function MissionDetails({ mission }) {
  return (
    <div className="w-full">
      <h1>{mission.name}</h1>
      <p className="py-10">{mission.description}</p>
    </div>
  );
}
