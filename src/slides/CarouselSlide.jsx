import React, { Component } from 'react'

class CarouselSlide extends Component {
  render() {
    return (
      <li
        className={
          this.props.index == this.props.activeIndex
            ? "slide active"
            : "slide"
        }
      >
       <img src={this.props.slide.urls.regular} alt={this.props.slide.urls.regular}/>
      </li>
    )
  }
}

export default CarouselSlide
