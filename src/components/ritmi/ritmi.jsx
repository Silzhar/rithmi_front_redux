import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { 
  // Selectors.
  selectSamples,
  // Actions.
  pushSamples } from '../../features/rithmiSlice'

import './rithmi.scss'

const BACK_URL = 'https://rithmi.herokuapp.com/'

export function Rithmi() {
  const dispatch = useDispatch()
    const samples = useSelector(selectSamples)
   console.log(samples)
    useEffect(() => {
      axios.get('https://rithmi.herokuapp.com/api/samples', { withCredentials: true })
      .then(({ data }) => {
        dispatch(pushSamples(data))
        console.log(data) 
    })
        // fetch(BACK_URL + '/api/samples', {
        //   method: 'GET',
        //   credentials: 'include',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        // })
        //   .then((res) => res.json())
        //   .then((data) => {dispatch(pushSamples(data.data))
        //   })
      },)

      return(
          <div>
            {/* <h1>SAMPLES</h1>
            <button
          onClick={() => dispatch(pushSamples())}
          className="samples" 
        >
          {!samples ? samples : null}
        </button> */}
          {samples.map((id) => (
            <div key={id}>
              <ul>
              {samples.map(sample => <li>{sample}</li>)}
             </ul>
            </div>
          ))}
            {!samples ? samples : null }
          </div>
      )
}

;
  