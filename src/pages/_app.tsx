import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import Sidebar from "../components/sidebar-layout";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className="font-mon font-light">
        <Sidebar>
          <div className="bg-bg">
            <Component {...pageProps} />
          </div>
        </Sidebar>
      </div>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
