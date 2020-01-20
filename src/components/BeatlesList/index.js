import React from "react";

import { beatles } from "../../data";

import beatlesLogo from "../../assets/images/the_beatles_logo.svg";

const BeatlesList = ({ onBeatleSelect }) => {
  return (
    <>
      <div>
        <img src={beatlesLogo} alt="the beatles logo" />
      </div>
      {beatles.map(b => (
        <div
          key={b.id}
          className="List-item"
          onClick={() => onBeatleSelect(b.id)}
        >
          <h3>{b.name}</h3>
          <p>{b.roles}</p>
        </div>
      ))}
    </>
  );
};

export default BeatlesList;
