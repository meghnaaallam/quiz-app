import React, { useEffect, useState } from 'react'
import data from './data';


function Questions() {
const [select, setSelect] = useState(false);
const questions = data[0];

useEffect(()=> {
    console.log(questions)
})
    const handleOnSelect = () => {
        setSelect(true);
    }

  return (
         <div className='questions'>
    <h4 className='question'>{questions.question}</h4>
    <ul key={questions.id}>
    {
    questions.options.map((obj, index) => (
<li key={index}>
    <input type='radio' value={select}
    id={obj.id}
    className='questions'
    name='options' onChange={handleOnSelect}/>
    </li>
        
    ))
}
</ul>
    </div>
  )
}

export default Questions