import React from 'react';

function Display_movie_details(props)
{
    return(<div>
  <h1>Display_movie_details</h1>
            
      {props.data.map((x,i) => {
        return (
         <p>{x[i].name}{x[i].age}{x[i].country}</p>
        );
      })}

    
    </div>)
}
export default Display_movie_details;