import Mission from "./mission";

export default function MissionList(props) {
  const { missions, onClick } = props;
  return (
    <div className="mission-list">
      {missions.map((mission) => (
        <Mission
          key={mission.id}
          mission={mission}
          onClick={() => onClick(mission.id)}
        />
      ))}
    </div>
  );
}
