import React from "react";
import Header from "./Header";
import DashboardSong from "./DashboardSong";

const Home = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-primary">
      <Header />
      <DashboardSong />
    </div>
  );
};

export default Home;
