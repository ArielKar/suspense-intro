import React, { useState, useEffect } from "react";

import { fetchBeatleDetails, fetchBeatleFacts } from "../../api";

import Loader from "../Loader";
import BackButton from "../BackButton";
import BeatlesList from "../BeatlesList";

const parseDate = dateStr => {
  if (!dateStr) return "-";
  return new Date(dateStr).toDateString();
};

const Before = props => {
  const [selectedBeatle, setSelectedBeatle] = useState(null);

  const handleBeatleSelect = beatleId => {
    setSelectedBeatle(beatleId);
  };

  const handleBackClick = () => {
    setSelectedBeatle(null);
  };

  if (selectedBeatle) {
    return (
      <BeatleDetails beatleId={selectedBeatle} onBackClick={handleBackClick} />
    );
  }
  return <BeatlesList onBeatleSelect={handleBeatleSelect} />;
};

const BeatleDetails = ({ beatleId, onBackClick }) => {
  const [beatleData, setBeatleData] = useState(null);

  useEffect(() => {
    fetchBeatleDetails(beatleId).then(data => setBeatleData(data));
  }, [beatleId]);

  if (!beatleData) {
    return <Loader />;
  }
  return (
    <>
      <BackButton onClick={onBackClick} />
      <div className="Beatle-details">
        <img src={beatleData.image} alt="a beatle" className="Beatle-image" />
        <div className="Beatle-info">
          <h3>{beatleData.fullName}</h3>
          <p>Born: {parseDate(beatleData.born)}</p>
          <p>Died: {parseDate(beatleData.died)}</p>
        </div>
        <img
          src={beatleData.signature}
          alt="signature"
          className="Beatle-signature"
        />
      </div>
      <BeatleFacts beatleId={beatleId} />
    </>
  );
};

const BeatleFacts = ({ beatleId }) => {
  const [factsData, setFactsData] = useState(null);

  useEffect(() => {
    fetchBeatleFacts(beatleId).then(data => setFactsData(data));
  });

  const renderBeatleFacts = () => {
    return factsData.map((fact, idx) => (
      <div key={`${beatleId}fact${idx}`} className="Fact-list-item">
        <p>{fact}</p>
      </div>
    ));
  };

  if (!factsData) {
    return <Loader />;
  }

  return <>{renderBeatleFacts()}</>;
};

export default Before;
