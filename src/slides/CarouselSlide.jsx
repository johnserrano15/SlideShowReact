import React, { Component } from 'react'

class CarouselSlide extends Component {
  render() {
    return (
      <li
        className={
          this.props.index == this.props.activeIndex
            ? "carousel__slide carousel__slide--active"
            : "carousel__slide"
        }
      >
       <img src={this.props.slide.urls.regular} alt={this.props.slide.urls.regular}/>
      </li>
    )
  }
}

export default CarouselSlide
