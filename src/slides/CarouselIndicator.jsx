// import React, { Component } from 'react'
import React from 'react'

// class CarouselIndicator extends Component {
//   render() {
//     return (
//       <li>
//         <a
//           className={
//             this.props.index == this.props.activeIndex
//               ? "indicator active"
//               : "indicator"
//           }
//           onClick={this.props.onClick}
//         />
//       </li>
//     );
//   }
// }

const CarouselIndicator = (props) => {
  return (
    <li>
      <a
        className={
          props.index == props.activeIndex
            ? 'indicator active'
            : 'indicator'
        }
        onClick={props.onClick}
      />
    </li>
  )
} 

export default CarouselIndicator
