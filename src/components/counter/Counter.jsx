import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, setCounter } from '../../redux/counter-slice'

export function Counter () {
  const counter = useSelector(state => {
    return state.counter.value
  })
  const dispatch = useDispatch()
  const [number, setNumber] = useState(0)

  const handleClickIncrement = () => {
    dispatch(increment())
  }

  const handleClickDecrement = () => {
    dispatch(decrement())
  }

  const handleClickApply = () => {
    dispatch(setCounter(number))
  }

  return (
    <>
      <div className="d-flex">
        <h2>Counter: {counter}</h2>
        <button className="btn btn-primary ms-5" onClick={handleClickIncrement}>Increment +</button>
        <button className="btn btn-warning ms-2" onClick={handleClickDecrement}>Decrement -</button>
      </div>

      <hr />

      <input className="form-control" type="number" value={number} onChange={e => setNumber(e.target.value)} />
      <button className="btn btn-primary mt-3" onClick={handleClickApply}>Apply</button>
    </>
  )
}
