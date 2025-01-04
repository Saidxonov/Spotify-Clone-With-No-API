import React from "react";
import RightBar from "../components/RightBar/RightBar";
import LeftBar from "../components/LeftBar/LeftBar";

function MainLayout({ children }) {
  return (
    <div className="">
      <div className="left-bar fixed w-[310px] h-[100vh] top-0 bg-[#020202]">
        <LeftBar />
      </div>
      <main
        className="main"
        style={{ width: "calc(100vw - 620px)", margin: "0 auto" }}
      >
        {children}
      </main>
      <div className="right-bar fixed w-[346px] h-[100vh] right-0 top-0 bg-[#020202]">
        <RightBar />
      </div>
    </div>
  );
}

export default MainLayout;
