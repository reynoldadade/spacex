import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { gql, useQuery } from "@apollo/client";
import MissionList from "../components/missions/missionList";

const GET_MISSIONS = gql`
  {
    missions {
      id
      description
      name
    }
  }
`;
export default function Home() {
  const { loading, error, data } = useQuery(GET_MISSIONS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className={styles.container}>
      <Head>
        <title>SpaceX missions</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-2xl font-bold">Missions</h1>
        <MissionList missions={data.missions} />
      </main>
    </div>
  );
}
