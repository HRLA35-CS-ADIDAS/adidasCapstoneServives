import React from 'react';
import ReactDOM from 'react-dom';

class Reviews extends React.Component {


  render() {
    return (
      <div class="sort">
        <span class="title__sort">SORT ON</span>
        <div class="sort__container">
          <div class="btn__newest">newest</div>
          <div class="btn__newest">helpful</div>
          <div class="btn__newest">relevant</div>
        </div>
      </div>
    )
  }
}

export default Reviews;