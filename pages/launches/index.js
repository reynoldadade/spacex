import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";

const GET_LAUNCHES = gql`
  query GET_LAUNCHES($limit: Int, $offset: Int) {
    launches(limit: $limit, offset: $offset, sort: "launch_date_utc") {
      details
      id
      mission_id
      mission_name
      rocket {
        rocket_name
        rocket_type
      }
      launch_date_utc
    }
  }
`;

export default function Launches() {
  const { loading, error, data, refetch } = useQuery(GET_LAUNCHES, {
    variables: {
      limit: 10,
      offset: 0,
    },
  });

  return <div></div>;
}
