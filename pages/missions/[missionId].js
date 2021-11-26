import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MissionDetails from "../../components/missions/missionDetails";

//get route params

const GET_MISSION = gql`
  query GET_MISSION($id: ID!) {
    mission(id: $id) {
      description
      id
      manufacturers
      name
      twitter
      website
      wikipedia
      payloads {
        payload_mass_kg
        id
        reused
        orbit
      }
    }
  }
`;
export default function MissionPage(props) {
  const router = useRouter();
  const { missionId } = router.query;
  const { loading, error, data } = useQuery(GET_MISSION, {
    variables: {
      id: missionId,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const { mission } = data;

  return (
    <div>
      <MissionDetails mission={mission} />
    </div>
  );
}
