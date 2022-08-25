import React from 'react';
import {Button} from '@mui/material';

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
            <select style={{padding:'8px' , marginBottom:'40px' , width:'61%'}}>
                <option>Comedy</option>
                <option>Horror</option>
                <option>Romantic</option>
                <option>Action</option>
            </select>
            
            <br></br>

            <Button variant="outlined" style={{marginTop:'33px' , width:'80%'}}>Add</Button>
</div>

        </div>
    )
}
export default Insert_movie_details;