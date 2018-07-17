import React, { Component } from 'react'

class CarouselIndicator extends Component {
  render() {
    return (
      <li>
        <a
          className={
            this.props.index == this.props.activeIndex
              ? "indicator active"
              : "indicator"
          }
          onClick={this.props.onClick}
        />
      </li>
    );
  }
}

export default CarouselIndicator
