import React from 'react';

function Display_movie_details(props)
{
 
    return(
    <div className='container' style={{width:'100%'}}>
   {/* <center><h1>Display_movie</h1></center> */}
    <p>
    <b>{props.name}</b> <br></br>
    {props.budget} <br></br>
    {props.genre} 
    </p>
      
    </div>)
}
export default Display_movie_details;