import React from 'react'
import { Link } from 'react-router-dom';
import ResultTable from './ResultTable';


function Result() {

  const onRestart=() => {
    console.log('@on restsa')
  }
  return (
    <div>
      <h4>Result Board</h4>
      <div className='username'>
        <span>Username: </span>
        <span className='result'>megh</span>
      </div>
      <div className='points'>
        <span>Total Quiz points: </span>
        <span className='result'>50</span>
      </div>
      <div className='total-questions'>
        <span>Total Questions: </span>
        <span className='result'>6</span>
      </div>
      <div className='attempts'>
        <span className=''>Total attempts: </span>
        <span className='result'>6</span>
      </div>
      <div className='earned-points'>
        <span>Total points earned: </span>
        <span className='result'>78</span>
      </div>
      <div className='restart'>
     <Link className='restart-btn' to={'/'} onClick={onRestart}>Restart</Link>
        </div>
      <div className='table'>
        <ResultTable/>
      </div>
    </div>
  )
}

export default Result;