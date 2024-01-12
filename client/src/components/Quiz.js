import React from 'react';
import Questions from './Questions';

function Quiz() {

    const handleNextBtn = () => {
        console.log('next btn');
    }

    const handlePrevBtn = () => {
        console.log('prev btn');
    }
    return(
<>
<h3>Quiz Application</h3>
<div className='container'>
    <Questions/>
<div className='btn-container'>
    <button className='prevBtn' onClick={handlePrevBtn}>Prev</button>
    <button className='NextBtn' onClick={handleNextBtn}>Next</button>
</div>
</div>
</>
    );
}

export default Quiz;