import React from 'react';
import ReactDOM from 'react-dom';
import Star from './img/svg/star.svg'
import Staroutline from './img/svg/star-outlined.svg';

import StarRatingItem from "./components/StarRatingItem.jsx";
import RecomendationStats from "./components/RecomendationStats.jsx";
import StarStats from "./components/StarStats.jsx";
import StatsHero from "./components/StatsHero.jsx";
import Reviews from "./components/Reviews.jsx"


class App extends React.Component {

  render() {
    return (
      <section className="ratings-reviews">
        <h1 className="headline-text--large">RATINGS AND REVIEWS</h1>
        <div className="ratings-reviews__container">
          <div className="ratings">
            <div className="ratings__header">
              <StatsHero />
              <div className="rating-breakdown__container">
                <StarStats />
              </div>
              <div className="left__stats">
              <RecomendationStats />
              </div>
            </div>
          </div>
          <Reviews />
        </div>
      </section>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));