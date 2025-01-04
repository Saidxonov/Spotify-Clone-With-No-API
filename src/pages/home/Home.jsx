import { useState, useRef, useEffect } from "react";
import "./Home.css";
import AudioPlayer from "../../components/Audio/AudioPlayer";

function Home() {
  return (
    <div>
      <h1 className="text-center text-9xl">Home</h1>

      <AudioPlayer />
    </div>
  );
}

export default Home;
