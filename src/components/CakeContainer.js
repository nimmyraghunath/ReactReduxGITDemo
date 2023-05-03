import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'

function CakeContainer() {
  const state = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <div><h2>Number of cakes- {state}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default CakeContainer