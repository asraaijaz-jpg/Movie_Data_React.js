import React, { useState } from 'react';
import { Button, Hidden } from '@mui/material';
import Display_movie_details from './Display_movie';
import { TextField, InputLabel, Select, FormControl, MenuItem, NativeSelect } from '@mui/material';
import { display } from '@mui/system';
import { allResolved } from 'q';

function Insert_movie_details() {

    const sample=['a','b','c','d','e'];

    const [checker, setchecker] = useState(false);
    const [count, setcount] = useState(0);
    const [allstates, setallstates] = useState([
        {
            name: '',
            budget: '',
            genre: '',
        }
    ])

    function displayall()
    {
    //  for(var i=0; i<4; i++)
    //  {
    //     <p>hello</p>
    //  }
    }

    const change_all_input_using_one_func = (e) => {
        const { name, value } = e.target;
        const list = [...allstates];
        list[count][name] = value;
        setallstates(list);
        setchecker(false);
        // displayall();
    }

    function add() {
        setallstates([...allstates, { name: "", budget: "", genre: "" }]);
        setcount(count + 1);
        document.getElementById('name').value = "";
        document.getElementById('budget').value = "";
        document.getElementById('genre').value = "";
    }

    function Show() {
          debugger;
        setchecker(true);
    }
    return (
        <div >
            <h1>Insert_movie_details</h1>

            <div style={{ marginTop: '60px' }}>

                <TextField label="Movie_Name" color="secondary" focused
                    name='name' onChange={change_all_input_using_one_func} id='name'
                    value={allstates.name} />
                <br></br><br></br>

                <TextField label="Movie_budget" color="secondary" focused
                    name='budget' onChange={change_all_input_using_one_func} id='budget'
                    value={allstates.budget} />
                <br></br><br></br>


                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" >Movie_Genre</InputLabel>
                    <Select labelId="demo-simple-select-label" id="genre" value={allstates.genre} name='genre'
                        label="Movie_Genre" onChange={change_all_input_using_one_func}>
                        <MenuItem value
                        ='Comedy'>Comedy</MenuItem>
                        <MenuItem value='Action'>Action</MenuItem>
                        <MenuItem value='Romantic'>Romantic</MenuItem>
                        <MenuItem value='Horror'>Horror</MenuItem>
                    </Select>
                </FormControl>

                <br></br><br></br>
                <Button variant="contained" onClick={add} style={{ width: '30%' }} id='b1'>Add</Button>
                <Button variant="contained" onClick={Show} style={{ width: '30%' }}>Show</Button>

                {allstates.map((data) =>
                    <>
                        {checker == true ?
                        <Display_movie_details name={data.name} budget={data.budget} genre={data.genre}  
                        id='sep'/>  : ''}
                    </>)}

                    {/* <Display_movie_details set={sample}/> */}

                   
            </div>
        </div>
    )
}
export default Insert_movie_details;