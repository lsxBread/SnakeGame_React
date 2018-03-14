import React from 'react'
import cn from 'classnames'

import '../../assets/css/Welcome.css'

class Welcome extends React.Component {

  constructor() {
    super()
    this.state = {
      display: 'none',
      classname: 'r1'
    }
    this.animate = this.animate.bind(this)
  }

  componentWillMount() {
    this.animate()
  }

  componentWillUnmount() {
    clearTimeout(Welcome.timeout)
  }

  animate() {
    let m = 'r'
    let count = 0
    clearTimeout(Welcome.timeout)
    const showLogo = (next, delay) => {
      Welcome.timeout = setTimeout(
        () => {
          this.setState({
            display: 'block',
            classname: m + 1
          });
          if (next) {
            next()
          }
        },
        delay
      )
    }
    const hideLogo = (next, delay) => {
      Welcome.timeout = setTimeout(
        () => {
          this.setState({
            display: 'none'
          });
          if (next) {
            next()
          }
        },
        delay
      )
    }

    const run = (next) => { // 开始跑步啦！
      Welcome.timeout = setTimeout(() => {
        this.setState({ classname: m + 4 })
        Welcome.timeout = setTimeout(() => {
          this.setState({ classname: m + 3 })
          count++
          if (count === 10 || count === 20 || count === 30) {
            m = m === 'r' ? 'l' : 'r';
          }
          if (count < 40) {
            run(next);
            return;
          } else {
            count = 0
            next()
          }
        }, 100)
      }, 100)
    };

    const recycle = () => {
      showLogo(() => {
        hideLogo(() => {
          showLogo(() => {
            hideLogo(() => {
              showLogo(() => {
                run(recycle)
              }, 300)
            }, 300)
          }, 300)
        }, 300)
      }, 300)
    }
    recycle()
  }

  render() {
    return (
      <div className='welcome' style={{ display: this.state.display }}>
        <div className={cn({ 'logo': true, [`${this.state.classname}`]: true })} ></div>
        <p>Welcome to Snake</p>
      </div>
    )
  }
}

export default Welcome
