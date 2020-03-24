import React from 'react';
import ReactDOM from 'react-dom';

import Star from '../img/svg/star.svg'
import Staroutline from '../img/svg/star-outlined.svg';

class StatsHero extends React.Component {

  render() {
    return (
      <div className="ratings__header-container">
      <div className="headline-text--hero">
      4.2
  </div>
    <div className="ratings__breakdown">
      <div className="star=size">
        <Star width={13} />
        <Star width={13} />
        <Star width={13} />
        <Staroutline width={13} />
        <Staroutline width={13} />
      </div>
      <div className="headline-text--small">
        71 Reviews
      </div>
    </div>
      </div>
    )
  }
}

export default StatsHero;