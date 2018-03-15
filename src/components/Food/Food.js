import React from 'react'
import { connect } from 'react-redux'

import '../../assets/css/Food.css'


class Food extends React.Component {

  // constructor() {
  //   super()
  //   this.state = {
  //     display: 'none',
  //   }
  //   this.animate = this.animate.bind(this)
  // }

  // componentWillMount() {
  //   this.animate()
  // }

  // componentWillUnmount() {
  //   clearTimeout(Food.timeout)
  // }

  // animate() {
  //   clearTimeout(Food.timeout)
  //   const showFood = (next, delay) => {
  //     Food.timeout = setTimeout(
  //       () => {
  //         this.setState({
  //           display: 'block',
  //         });
  //         if (next) {
  //           next()
  //         }
  //       },
  //       delay
  //     )
  //   }
  //   const hideFood = (next, delay) => {
  //     Food.timeout = setTimeout(
  //       () => {
  //         this.setState({
  //           display: 'none'
  //         });
  //         if (next) {
  //           next()
  //         }
  //       },
  //       delay
  //     )
  //   }
  //   const recycle = () => {
  //     showFood(() => {
  //       hideFood(() => {
  //         recycle()
  //       }, 300)
  //     }, 300)
  //   }
  //   recycle()
  // }

  render() {
    return (
      <div 
        className="food" 
        style={{ 
          // display: this.state.display,
          left: this.props.left + 'px',
          top: this.props.top + 'px',
        }}
      ></div>
    )
  }
}

const mapStateToProps = state => {
  return {
    left: state.get('food').get('left'),
    top: state.get('food').get('top'),
  }
}

export default connect(mapStateToProps, null)(Food)
