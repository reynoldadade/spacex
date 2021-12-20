import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { Fragment } from "react";
import LaunchDetails from "../../components/launches/launchDetails";

const GET_LAUNCH = gql`
  query GET_LAUNCH($id: ID!) {
    launch(id: $id) {
      mission_name
      mission_id
      links {
        article_link
        video_link
        wikipedia
      }
      details
      launch_date_utc
      launch_site {
        site_name
        site_id
      }
      rocket {
        rocket_name
        rocket_type
      }
    }
  }
`;

export default function LaunchPage() {
  const router = useRouter();
  const { launchId } = router.query;
  const { loading, error, data } = useQuery(GET_LAUNCH, {
    variables: { id: launchId },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const { launch } = data;
  return (
    <Fragment>
      <LaunchDetails launch={launch} />
    </Fragment>
  );
}
