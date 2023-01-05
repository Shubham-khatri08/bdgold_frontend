import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.error === "RefreshAccessTokenError") signIn();
  }, [session]);

  console.log(session, "test");
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      {/* <button onClick={() => signIn()}>Sign in</button> */}
      <Image
        src="https://s3.amazonaws.com/icon.online/iconImg-Moose-Peterson-1672881641735.webp"
        width="172px"
        height="200px"
      />
      <Image
        src="https://s3.amazonaws.com/icon.online/iconImg-Michelle-Valberg+CM-1672753134242.webp"
        width="172px"
        height="200px"
      />
      <Image
        src="https://s3.amazonaws.com/icon.online/iconImg-Matt-Dusig-1672711266471.webp"
        width="172px"
        height="200px"
      />
      <Image
        src="https://s3.amazonaws.com/icon.online/iconImg-Paul-Zizka-1670611370354.jpeg"
        width="272px"
        height="400px"
      />
      <Image
        src="https://s3.amazonaws.com/icon.online/iconImg-Paul-Zizka-1670611370354.jpeg"
        width="272px"
        height="400px"
      />
      <Image
        src="https://s3.amazonaws.com/icon.online/iconImg-Paul-Zizka-1670611306277.jpeg"
        width="272px"
        height="400px"
      />
    </>
  );
}
