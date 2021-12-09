import { useRouter } from "next/router";
export default function LaunchPage() {
  const router = useRouter();
  const { launchId } = router.query;
}
