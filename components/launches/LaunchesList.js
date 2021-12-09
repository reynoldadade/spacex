import Launch from "./launch";

export default function LaunchesList({ launches }) {
  return (
    <div className="launches-list grid grid-cols-3 gap-6">
      {launches.map((launch) => (
        <Launch key={launch.id} launch={launch} />
      ))}
    </div>
  );
}
