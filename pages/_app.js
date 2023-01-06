import "../styles/globals.css";
import { SessionProvider, useSession, signIn } from "next-auth/react";
import React from "react";
import { useRouter } from "next/router";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth
          role={Component.auth.role}
          loading={Component.auth.loading}
          unauthorized={Component.auth.unauthorized}
        >
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
      <Analytics />
    </SessionProvider>
  );
}

function Auth({ children, role, loading, unauthorized }) {
  const router = useRouter();
  const { data: session, status } = useSession();
  const isUser = !!session?.user;
  React.useEffect(() => {
    if (status === "loading") return;
    if (!isUser || session.user.role !== role) router.push(unauthorized);
  }, [isUser, status]);

  if (isUser && session.user.role === role) {
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>{loading}</div>;
}

export default MyApp;
