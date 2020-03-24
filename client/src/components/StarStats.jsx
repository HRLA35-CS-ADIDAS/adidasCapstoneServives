import React from 'react';
import ReactDOM from 'react-dom';

import StarRatingItem from './StarRatingItem.jsx'

class StarStats extends React.Component {


  ratingsRender() {
    const ratings = [5, 4, 3, 2, 1];
    const percent = [65, 10, 5, 10, 2];
    const starRatings = ratings.map((number, index) =>
      <StarRatingItem starNr={number} percentage={percent[index]} />)
    return starRatings;
  }


  render() {
    return (
      <div className="rating-breakdown__container">
        <div className="headline-text--normal spacing--headline spacing--small">Rating Breakdown</div>
        {this.ratingsRender()}
      </div>
    )
  }
}

export default StarStats;