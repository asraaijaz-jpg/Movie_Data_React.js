import React from 'react';

function Insert_movie_details()
{
    return(
        <div>
            <h1>Insert_movie_details</h1>

<div style={{marginTop:'60px'}}>
            <label style={{color:'green' , padding:'10px' }}><b>Movie-Name</b></label>
            <input type='text' placeholder='Movie_name' style={{padding:'8px' , marginBottom:'40px'}}/><br></br>

            <label style={{color:'green' , padding:'4px'}}><b>Movie-Budget</b></label>
            <input type='text' placeholder='Movie_budget' style={{padding:'8px' , marginBottom:'40px'}}/><br></br>

            <label style={{color:'green' , padding:'10px'}}><b>Movie-Genre</b></label>
            <input type='text' placeholder='Movie_genre' style={{padding:'8px' , marginBottom:'40px'}}/><br></br>

            <button>Add</button>
</div>

        </div>
    )
}
export default Insert_movie_details;