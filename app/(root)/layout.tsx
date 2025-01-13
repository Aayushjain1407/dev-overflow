import { ReactNode } from "react";

import Navbar from "@/components/navigation/navbar";
import LeftSideBar from "@/components/navigation/LeftSidebar";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import { Link } from "lucide-react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        <LeftSideBar />
        <section className="flex min-h-screen flex-1 flex-col px-6 mx-10 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default RootLayout;
