import React, { Component } from 'react'
import Slide from './Slide.jsx'
import CarouselSlide from './CarouselSlide.jsx'

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
      console.log(data)
      this.setState({
        slides: data
      })
    })
  }

  handleClickRight(e) {
    e.preventDefault();
    console.log('ok')
  }

  render() {
    return (
      <Slide>
        <ul className="carousel__slides">
          {this.state.slides.map((slide, index) =>
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
            />
          )}
        </ul>
      </Slide>
    )
  }
}

export default Slides
