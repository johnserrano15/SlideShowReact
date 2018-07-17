import React, { Component } from 'react'
import Slide from './Slide.jsx'
import CarouselSlide from './CarouselSlide.jsx'
import CarouselIndicator from './CarouselIndicator.jsx'

import './slide.scss'

import api from '../../api'

class Slides extends Component {

  constructor(props) {
    super(props)
    this.state = {
      slides: [],
      activeIndex: 0
    }
  }

  componentDidMount() {
    fetch(api.photos)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      // console.log(data)
      this.setState({
        slides: data
      })
    })
  }

  handleClickRight = (e) => {
    e.preventDefault();
    let index = this.state.activeIndex;
    let { slides } = this.state;
    let slidesLength = slides.length - 1;
    // console.log(`this is index -> ${index} this is slidesLength -> ${slidesLength}`)

    if (index === slidesLength) {
      index = -1;
      // console.log('index es equal to slidesLength ' + index)
    }

    ++index;
    // console.log('new index -> ' + index)

    this.setState({
      activeIndex: index
    });
  }
  
  handleClickLeft = (e) => {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.state;
    let slidesLength = slides.length;
    // console.log(`this is index -> ${index} this is slidesLength -> ${slidesLength}`)
    if (index < 1) {
      index = slidesLength;
      // console.log('index es menor que 1 ' + index)
    }

    --index;
    // console.log('new index -> ' + index)

    this.setState({
      activeIndex: index
    });
  }

  goToSlide = (index) => (e) => {
    this.setState({
      activeIndex: index
    });
  }

  render() {
    return (
      <Slide>
        <ul className="carouselSlides">
          {this.state.slides.map((slide, index) =>
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
            />
          )}
        </ul>
        <button className="arrow left" onClick={this.handleClickLeft}>&#10094;</button>
        <button className="arrow right" onClick={this.handleClickRight}>&#10095;</button>
        <ul className="indicators">
          {this.state.slides.map((slide, index) =>
            <CarouselIndicator
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              onClick={this.goToSlide(index)}
            />
          )}
        </ul>
      </Slide>
    )
  }
}

export default Slides
