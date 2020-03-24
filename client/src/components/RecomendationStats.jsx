import React from 'react';
import ReactDOM from 'react-dom';
import RecomendationItem from "./RecomendationItem.jsx";

class RecomendationStats extends React.Component {




  render() {
    const average = 65;

    return (
      <div>
        <div>
          <span className="headline-text--hero">{average}%</span>
          <span className="headline-text--small">of customers recommend this product</span>
        </div>
        <RecomendationItem />
      </div>
    );
  }
}

export default RecomendationStats;