import { type FC } from "react";

import { createFileRoute, Outlet } from "@tanstack/react-router";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const Private: FC = () => {
  return (
    <div className="flex h-screen bg-indigo-50">
      <Sidebar />
      <div className="flex-grow flex flex-col">
        <Header />
        <main className="flex-grow p-4">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export const Route = createFileRoute("/_private")({
  component: Private,
});
