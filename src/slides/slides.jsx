import React, { Component } from 'react'
import SlideLayout from './SlideLayout.jsx'
import CarouselSlide from './CarouselSlide.jsx'
import CarouselIndicator from './CarouselIndicator.jsx'

import './slides.scss'

import api from '../../api'

class Slides extends Component {

  constructor(props) {
    super(props)
    this.state = {
      slides: [],
      activeIndex: 0,
      type: {
        fade: 'fade',
        none: 'none',
        move: 'move'
      },
      auto: false
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

    this.state.auto ? (
      this.auto = setInterval(() => {
        // console.log('ok bien')
        this.carouselAuto()
      }, 3000)
    ): null    
  }

  componentWillUnmount() {
    this.state.auto ? clearTimeout(this.auto) : null
  }

  carouselAuto = () => {
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
    e.preventDefault();
    this.setState({
      activeIndex: index
    });
  }

  render() {
    return (
      <SlideLayout>
        <ul className='carouselSlides'>
          {this.state.slides.map((slide, index) =>
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
              animation={this.state.type.fade}
            />
          )}
        </ul>

        <button className='arrow left' onClick={this.handleClickLeft}>&#10094;</button>
        <button className='arrow right' onClick={this.handleClickRight}>&#10095;</button>
        
        <ul className='indicators'>
          {Object.keys(this.state.slides).map((index) =>
            <CarouselIndicator
              key={index}
              index={parseInt(index)}
              activeIndex={this.state.activeIndex}
              onClick={this.goToSlide(parseInt(index))}
            />
          )}
        </ul>
      </SlideLayout>
    )
  }
}

export default Slides
