import React from 'react';

function  Display_movie_details({all})
{
    return(<div>
  <h1>Display_movie_details</h1>

  {all.map(value=>
    <p>{value.name}</p>)}
    </div>)
}
export default Display_movie_details;