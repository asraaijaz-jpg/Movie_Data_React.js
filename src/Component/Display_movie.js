import React from 'react';

function Display_movie_details(props)
{
    return(<div className='container'>
  {/* <h1>Display_movie_details</h1> */}

    <p>
    <b>{props.name}</b> <br></br>
    {props.budget} <br></br>
    {props.genre} 
    </p>

    </div>)
}
export default Display_movie_details;