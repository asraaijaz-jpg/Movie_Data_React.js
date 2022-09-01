import React, { useState } from 'react';
import { Button, Hidden } from '@mui/material';
import Display_movie_details from './Display_movie';
import { TextField, InputLabel, Select, FormControl, MenuItem, NativeSelect } from '@mui/material';
import { display } from '@mui/system';
import { allResolved } from 'q';

function Insert_movie_details() {

    const sample = ['a', 'b', 'c', 'd', 'e'];

    const [checker, setchecker] = useState(false);
    const [count, setcount] = useState(0);
    const [forone,setforone]=useState({
        name:'',
        budget:'',
        genre:''
    })
    const [allstates, setallstates] = useState([
        {
            name: '',
            budget: '',
            genre: '',
        }
    ])

    const change_all_input_using_one_func = (e) => {
        const { name, value } = e.target;
        const list = [...allstates];
        list[count][name] = value;
        setallstates(list);
        setchecker(false);
        forone[name]=value;
        setforone(forone);
        // setforone({...forone, [name]: value});

    }

    function add() {
        setallstates([...allstates, { name: "", budget: "", genre: "" }]);
        setcount(count + 1);
        document.getElementById('name').value = "";
        document.getElementById('budget').value = "";
        document.getElementById('genre').value = "";

        forone.name='';
        forone.budget='';
        forone.genre='';
    }

    function Show() {
        setchecker(true);
        forone.name='';
        forone.budget='';
        forone.genre='';
    }
    return (
        <div >
           <center> <h1>Insert_movie</h1></center>

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
                    <InputLabel>Movie_Genre</InputLabel>
                    <Select  id="genre" value={allstates.genre} name='genre'
                        label="Movie_Genre" onChange={change_all_input_using_one_func}>
                        <MenuItem value='Comedy'>Comedy</MenuItem>
                        <MenuItem value='Action'>Action</MenuItem>
                        <MenuItem value='Romantic'>Romantic</MenuItem>
                        <MenuItem value='Horror'>Horror</MenuItem>
                    </Select>
                </FormControl>

                <br></br><br></br>
                <div style={{display:'flex' , justifyContent:'space-around'}}>
                <Button variant="contained" onClick={add} style={{ width: '30%' }} id='b1'>Add</Button>
                <Button variant="contained" onClick={Show} style={{ width: '30%' }}>Show</Button>
                </div>

                {allstates.map((data) =>
                    <>
                        {checker == true ?
                            <Display_movie_details name={data.name} budget={data.budget} genre={data.genre}
                                id='sep' /> : ''}
                    </>)}

<br></br><br></br>
        <p>
        <b><h3>{forone.name}</h3></b>
        {forone.budget}<br></br>
        {forone.genre}
        </p>

            </div>
        </div>
    )
}
export default Insert_movie_details;