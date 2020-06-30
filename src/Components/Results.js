import React from 'react'
import Result from './Result'

function Results( { results, openPopup }) {
   
    return (
        <section className="results">
            {results.map(result => (
                <Result result={result} key={result.PlayerID} openPopup={openPopup}/>
            ))}
        </section>

    )
}

export default Results
