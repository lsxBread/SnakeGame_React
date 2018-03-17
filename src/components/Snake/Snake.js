import React from 'react'
import '../../assets/css/Snake.css'
import { gameState } from '../../unit/const'
import { moveSnake, createFood, addScore, gameover, updateMax } from '../../actions/index'
import { connect } from 'react-redux'
import { is, Map } from 'immutable'

class Snake extends React.Component {

  constructor() {
    super()
    this.moveSnake = this.moveSnake.bind(this)
  }

  componentDidMount() {
    if (this.props.game === gameState.start) {
      this.moveSnake()
    }
  }

  componentWillUnmount() {
    clearTimeout(Snake.timeout)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.game === gameState.pause) {
      clearTimeout(Snake.timeout)
    }

    if (nextProps.game === gameState.start && this.props.game !== gameState.start) {
      this.moveSnake()
    }
  }

  moveSnake() {
    let snakeHead, newSnakeHead, newSnakeCells
    let stop = false
    const run = () => {
      Snake.timeout = setTimeout(() => {
        console.log('move snake')
        snakeHead = this.props.snakeCells.get(0)
        newSnakeHead = updateHead(snakeHead)
        if (this.props.snakeCells.includes(newSnakeHead)) {
          this.props.gameover()
          stop = true
          if(this.props.score > this.props.max) {
            this.props.updateMax(this.props.score)
          }
        }
        if (is(newSnakeHead, this.props.food)) {
          newSnakeCells = this.props.snakeCells.unshift(newSnakeHead)
          this.props.addScore()
          this.props.createFood()
        } else {
          newSnakeCells = this.props.snakeCells
            .pop()
            .unshift(newSnakeHead)
        }
        this.props.moveSnake(newSnakeCells)
        if (!stop) {
          run()
        }
      }, 300 / this.props.speed)
    }

    const updateHead = (head) => {
      let left = head.get('left')
      let top = head.get('top')
      switch (this.props.direction) {
        case 'left':
          return Map({ left: left === 13 ? 13 + 9 * 22 : left - 22, top })
        case 'right':
          return Map({ left: left === 13 + 9 * 22 ? 13 : left + 22, top })
        case 'up':
          return Map({ left, top: top === 13 ? 13 + 19 * 22 : top - 22 })
        case 'down':
          return Map({ left, top: top === 13 + 19 * 22 ? 13 : top + 22 })
        default:
          return null
      }
    }
    run()
  }

  render() {
    return (
      <div>
        {this.props.snakeCells.map((cell) => {
          return <div
            className='snake'
            style={{
              left: cell.get('left') + 'px',
              top: cell.get('top') + 'px'
            }}
            key={cell.get('left')+'_'+cell.get('top')}>
          </div>
        })}
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    game: state.get('game'),
    snakeCells: state.get('snake'),
    direction: state.get('direction'),
    speed: state.get('speed'),
    food: state.get('food'),
    score: state.get('score'),
    max: state.get('max')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    moveSnake: (newPos) => {
      dispatch(moveSnake(newPos))
    },
    createFood: () => {
      dispatch(createFood())
    },
    addScore: () => {
      dispatch(addScore())
    },
    updateMax: (score) => {
      dispatch(updateMax(score))
    },
    gameover: () => {
      dispatch(gameover())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Snake)