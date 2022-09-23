import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();
  return "Some super secret dashboard";
}

Dashboard.auth = {
  role: "user",
  loading: "Skeleton Loading....",
  unauthorized: "/", // redirect to this url
};
