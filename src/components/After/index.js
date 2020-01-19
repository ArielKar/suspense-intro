import React, { useState, Suspense } from "react";
import { beatles } from "../../data";
import { fetchBeatleData } from "../../api";
import beatlesLogo from "../../assets/images/the_beatles_logo.svg";
import Loader from "../Loader";
import BackButton from "../BackButton";

const After = props => {
  const [selectedBeatle, setSelectedBeatle] = useState(null);

  const handleBeatleSelect = beatleId => {
    setSelectedBeatle(fetchBeatleData(beatleId));
  };

  const handleBackClick = () => {
    setSelectedBeatle(null);
  };

  if (selectedBeatle) {
    return (
      <Suspense fallback={<Loader />}>
        <BeatleDetails
          beatleData={selectedBeatle}
          onBackClick={handleBackClick}
        />
      </Suspense>
    );
  }
  return (
    <>
      <div>
        <img src={beatlesLogo} alt="the beatles logo" />
      </div>
      {beatles.map(b => (
        <div
          key={b.id}
          className="List-item"
          onClick={() => handleBeatleSelect(b.id)}
        >
          <h3>{b.name}</h3>
          <p>{b.roles}</p>
        </div>
      ))}
    </>
  );
};

const BeatleDetails = ({ beatleData, onBackClick }) => {
  const details = beatleData.details.read();
  const parseDate = dateStr => {
    if (!dateStr) return "-";
    return new Date(dateStr).toDateString();
  };

  return (
    <>
      <BackButton onClick={onBackClick} />
      <div className="Beatle-details">
        <img src={details.image} alt="a beatle" className="Beatle-image" />
        <div className="Beatle-info">
          <h3>{details.fullName}</h3>
          <p>Born: {parseDate(details.born)}</p>
          <p>Died: {parseDate(details.died)}</p>
        </div>
        <img
          src={details.signature}
          alt="signature"
          className="Beatle-signature"
        />
      </div>
      <BeatleFacts beatleData={beatleData} />
    </>
  );
};

const BeatleFacts = ({ beatleData }) => {
  const factsData = beatleData.facts.read();

  const renderBeatleFacts = () => {
    return factsData.map((fact, idx) => {
      return (
        <div key={`${factsData}fact${idx}`} className="Fact-list-item">
          <p>{fact}</p>
        </div>
      );
    });
  };
  return <>{renderBeatleFacts()}</>;
};

export default After;
