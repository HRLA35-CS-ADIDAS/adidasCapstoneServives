import React from 'react';
import ReactDOM from 'react-dom';

class StarRatingItem extends React.Component {

  render() {

    return (
      <div className="star">
        <div className="star__container">
          <span className="btn">{this.props.starNr} STARS</span>
          <div className="star__bar" >
            <div className="star__bar--display" style={{width: this.props.percentage+"%"}} >

            </div>
          </div>

          <div className="left__star-nr">45</div>
        </div>
      </div>
    );
  }
}

export default StarRatingItem;