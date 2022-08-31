import React from 'react';

function Display_movie_details(props)
{
  const checker=false;
    return(<div className='container'>

    {checker == true ? <h1>{props.hd}</h1> : ''}

    <p>
    <b>{props.name}</b> <br></br>
    {props.budget} <br></br>
    {props.genre} 
    </p>

    </div>)
}
export default Display_movie_details;