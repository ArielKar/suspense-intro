import React, { useState, useEffect } from "react";
import { beatles } from "../../data";
import { fetchBeatleDetails, fetchBeatleFacts } from "../../api";
import beatlesLogo from "../../assets/images/the_beatles_logo.svg";

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

const BeatleDetails = ({ beatleId, onBackClick }) => {
  const [beatleData, setBeatleData] = useState(null);

  useEffect(() => {
    fetchBeatleDetails(beatleId).then(data => setBeatleData(data));
  }, [beatleId]);

  const parseDate = dateStr => {
    if (!dateStr) return "-";
    return new Date(dateStr).toDateString();
  };

  if (!beatleData) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <button onClick={onBackClick}>Back</button>
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
    return factsData.map((fact, idx) => {
      return (
        <div key={`${beatleId}fact${idx}`} className="Fact-list-item">
          <p>{fact}</p>
        </div>
      );
    });
  };
  if (!factsData) {
    return <p>Loading...</p>;
  }
  return <>{renderBeatleFacts()}</>;
};

export default Before;