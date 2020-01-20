import React, { useState, Suspense } from "react";

import { fetchBeatleData } from "../../api";

import Loader from "../Loader";
import BackButton from "../BackButton";
import BeatlesList from "../BeatlesList";

const parseDate = dateStr => {
  if (!dateStr) return "-";
  return new Date(dateStr).toDateString();
};

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
      <>
        <Suspense fallback={<Loader />}>
          <BeatleDetails
            beatleData={selectedBeatle}
            onBackClick={handleBackClick}
          />
          <BeatleFacts beatleData={selectedBeatle} />
        </Suspense>
      </>
    );
  }
  return <BeatlesList onBeatleSelect={handleBeatleSelect} />;
};

const BeatleDetails = ({ beatleData, onBackClick }) => {
  const details = beatleData.details.read();

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
    </>
  );
};

const BeatleFacts = ({ beatleData }) => {
  const factsData = beatleData.facts.read();

  const renderBeatleFacts = () => {
    return factsData.map((fact, idx) => (
      <div key={`${factsData}fact${idx}`} className="Fact-list-item">
        <p>{fact}</p>
      </div>
    ));
  };
  return <>{renderBeatleFacts()}</>;
};

export default After;
