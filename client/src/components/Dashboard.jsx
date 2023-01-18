import React from "react";
import Header from "./Header";
import { NavLink, Route, Routes } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { isActiveStyles, isNotActiveStyles } from "../utils/styles";
import DashboardHome from "./DashboardHome";
import DashboardArtist from "./DashboardArtist";
import DashboardAlbums from "./DashboardAlbums";
import DashboardSong from "./DashboardSong";
import DashboardUser from "./DashboardUser";
import DashBoardNewSong from "./DashBoardNewSong";
import Alert from "./Alert";
import { useStateValue } from "../context/StateProvider";

function Dashboard() {
  const [{ alertType }, dispatch] = useStateValue();
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-primary ">
      <Header />
      <div className="w-[60%] my-2 p-4 flex items-center justify-evenly">
        <NavLink
          to={"/dashboard/home"}
          className={({ isActive }) =>
            isActive ? isActiveStyles : isNotActiveStyles
          }
        >
          <IoHome className="text-2xl text-textColor" />
        </NavLink>
        <NavLink
          to={"/dashboard/user"}
          className={({ isActive }) =>
            isActive ? isActiveStyles : isNotActiveStyles
          }
        >
          Users
        </NavLink>
        <NavLink
          to={"/dashboard/songs"}
          className={({ isActive }) =>
            isActive ? isActiveStyles : isNotActiveStyles
          }
        >
          Songs
        </NavLink>
        <NavLink
          to={"/dashboard/artist"}
          className={({ isActive }) =>
            isActive ? isActiveStyles : isNotActiveStyles
          }
        >
          Artists
        </NavLink>
        <NavLink
          to={"/dashboard/albums"}
          className={({ isActive }) =>
            isActive ? isActiveStyles : isNotActiveStyles
          }
        >
          Albums
        </NavLink>
      </div>
      <div className="my-4 w-full p-4">
        <Routes>
          <Route path="/home" element={<DashboardHome />} />
          <Route path="/user" element={<DashboardUser />} />
          <Route path="/songs" element={<DashboardSong />} />
          <Route path="/albums" element={<DashboardAlbums />} />
          <Route path="/artist" element={<DashboardArtist />} />
          <Route path="/newSong" element={<DashBoardNewSong />} />
        </Routes>
      </div>
      {alert && <Alert type={alertType} />}
    </div>
  );
}

export default Dashboard;
