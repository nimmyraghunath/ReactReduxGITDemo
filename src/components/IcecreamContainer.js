import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { buyIcecream } from '../redux/icecream/icecreamActions';

function IcecreamContainer() {
  const state = useSelector((state) => state.icecream.noOfIcecreams);
  const dispatch = useDispatch();
  return (
    <div><h2>Number of icecreams- {state}</h2>
      <button onClick={() => dispatch(buyIcecream())}>Buy Icecream</button>
    </div>
  )
}

export default IcecreamContainer