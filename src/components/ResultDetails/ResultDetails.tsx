import React from 'react';
import "./ResultDetails.scss";

interface ResultDetailsProps {
  result: {
    image: string;
    url: string;
    title: string;
    description: string;
  };
}

const ResultDetails: React.FC<ResultDetailsProps> = ({ result }) => {
  console.log("Result Details:", result);
  return (
    <div className="result-details-content">
      <img src={result.image} alt={result.title} />
      <a href={result.url} target="_blank" rel="noopener noreferrer">
        {result.url}
      </a>
      <h3>{result.title}</h3>
      <p>{result.description}</p>
    </div>
  );
};

export default ResultDetails;
