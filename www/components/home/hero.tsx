import React from "react";
import GitHubButton from "react-github-btn";
import CreateRoom from "./create-room";

export default function Hero() {
  return (
    <div className="p-4 py-32 text-center hero">
      <h1 className="mb-8 text-5xl sm:text-6xl font-extrabold tracking-tight">
        P2P
        <span className="text-yellow-500 mx-0.5">.</span>
          Video-Chat
        <span className="text-yellow-500 mx-0.5">.</span>
          App
      </h1>
      <h2 className="mb-24 text-white-300 text-2xl sm:text-3xl font-extrabold tracking-tight">
        <div className="inline-block">No Sign Up or Log In. </div>&nbsp;
        <div className="inline-block">No Cookies or Tracking. </div>&nbsp;
        <div className="inline-block">No Installation.</div>
      </h2>
      <CreateRoom />
      <div>
        <GitHubButton
          href="https://github.com/RickyDonne"
          data-size="large"
          data-show-count="true"
          aria-label="Ricky Donne on GitHub"
        >
          Rick
        </GitHubButton>
      </div>
    </div>
  );
}
