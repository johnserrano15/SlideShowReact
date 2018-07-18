// import React, { Component } from 'react'
import React from 'react'

// class CarouselSlide extends Component {
//   render() {
//     return (
//       <li
//         className={
//           this.props.index == this.props.activeIndex
//             ? "slide active"
//             : "slide"
//         }
//       >
//        <img src={this.props.slide.urls.regular} alt={this.props.slide.urls.regular}/>
//       </li>
//     )
//   }
// }

const CarouselSlide = (props) => {
  const { slide, index, activeIndex, animation } = props
  return (
    <li
      className={
        index == activeIndex
          ? `slide active ${animation}`
          : `slide`
      }
    >
      <img src={slide.urls.regular} alt={slide.urls.regular} />
    </li>
  )
}

export default CarouselSlide
