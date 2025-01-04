import React from "react";
import "./RightBar.css";
import AddPeople from "../../images/add-friend.svg";
import Close from "../../images/close.svg";
import Followers from "../../images/active-people.svg";

function RightBar() {
  return (
    <div className="pt-[29px] pl-[20px]">
      <div className="menus">
        <div className="top-text">
          <p>Friend Activity</p>
        </div>

        <div className="images">
          <img className="cursor-pointer" src={AddPeople} alt="add people" />
          <img className="cursor-pointer" src={Close} alt="close" />
        </div>
      </div>
      <div className="friend-text">
        <p>
          Let friends and followers on Spotify see what you’re listening to.
        </p>
      </div>
      <div className="actives">
        <img className="mt-[23px]" src={Followers} alt="follower" />
        <img className="mt-[20px]" src={Followers} alt="follower" />
        <img className="mt-[20px]" src={Followers} alt="follower" />
      </div>
      <div className="settings">
        <p>
          Go to Settings {" > "} Social and enable “Share my listening activity
          on Spotify.’ You can turn this off at any time.
        </p>
      </div>
      <button className="setings-btn">
        <button>SETTINGS</button>
      </button>
    </div>
  );
}

export default RightBar;
