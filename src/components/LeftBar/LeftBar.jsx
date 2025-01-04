import React from "react";
import "./LeftBar.css";
import HomeImg from "../../images/home.svg";
import Search from "../../images/search.svg";
import LibraryImg from "../../images/library.svg";
import CreatePlaylist from "../../images/create.svg";
import Liked from "../../images/liked.svg";

function LeftBar() {
  return (
    <div>
      <div className="home">
        <img src={HomeImg} alt="home" />
        <p className="text-white">Home</p>
      </div>
      <div className="search">
        <img src={Search} alt="search" />
        <p>Search</p>
      </div>
      <div className="search">
        <img src={LibraryImg} alt="your library" />
        <p>Your Library</p>
      </div>
      <div className="create-playlist">
        <img src={CreatePlaylist} alt="" />
        <p>Create Playlist</p>
      </div>
      <div className="liked-songs">
        <img src={Liked} alt="" />
        <p>Liked Songs</p>
      </div>
      <hr className="line" />
      <div className="albums">
        <p>Chill Mix</p>
        <p className="mt-[18px]">Insta Hits</p>
        <p className="mt-[18px]">Your Top Songs 2021</p>
        <p className="mt-[18px]">Mellow Songs</p>
        <p className="mt-[18px]">Anime Lofi & Chillhop Music</p>
        <p className="mt-[18px]">BG Afro “Select” Vibes</p>
        <p className="mt-[18px]">Afro “Select” Vibes</p>
        <p className="mt-[18px]">Happy Hits!</p>
        <p className="mt-[18px]">Deep Focus</p>
        <p className="mt-[18px]">Instrumental Study</p>
        <p className="mt-[18px]">OST Compilations</p>
        <p className="mt-[18px]">Nostalgia for old souled mill...</p>
        <p className="mt-[18px] pb-[90px]">Mixed Feelings</p>
      </div>
    </div>
  );
}

export default LeftBar;
