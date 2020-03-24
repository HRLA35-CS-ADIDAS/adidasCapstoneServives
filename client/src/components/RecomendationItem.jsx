import React from 'react';
import ReactDOM from 'react-dom';

class RecomendationItem extends React.Component {


  constructor(props) {
    super(props);
    this.state = {

    };
  };

  renderRecstats() {
    const recomendationCats = {
      size: ["too small", "perfect", "too large"],
      width: ["too narrow", "perfect", "too wide"],
      comfort: ["uncomfortable", "comfortable"],
      quality: ["poor", "perfect"]
    };

    const recValues = {
      size: 56,
      width:76,
      comfort: 42,
      quality: 35
    };

    const recomendations = Object.keys(recomendationCats).map((item) => {
      return (
      <div className="customers-rec__container">
      <span className="title">{item}</span>
      <div className="recomendation__container">
        <div className="bar">
          <div className="triangle" style={{left: recValues[item]+'%'}}></div>
        </div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="textcontainer">
      {recomendationCats[item].map((item) => <span>{item}</span>)}
      </div>
    </div>)
    })

    return recomendations
  }

  render() {
    return (
      <div>
        {this.renderRecstats()}
      </div>
    );
  }
}

export default RecomendationItem;