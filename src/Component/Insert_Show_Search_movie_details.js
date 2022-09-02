import React, { useState } from 'react';
import { Button, Hidden } from '@mui/material';
import { TextField, InputLabel, Select, FormControl, MenuItem, NativeSelect  } from '@mui/material';
import { display } from '@mui/system';
import { allResolved } from 'q';

function Insert_movie_details() {

    const sample = ['a', 'b', 'c', 'd', 'e'];

    const [checker, setchecker] = useState(false);
    const [movidata, setmoviedata] = useState({
        name: '',
        budget: '',
        genre: ''
    })
    const [count, setcount] = useState(0);
    const [forone, setforone] = useState({
        name: '',
        budget: '',
        genre: ''
    })
    const [allstates, setallstates] = useState([
        {
            name: '',
            budget: '',
            genre: '',
            status: ''
        }
    ])

    const change_all_input_using_one_func = (e) => {
        const { name, value } = e.target;

        ///////////////////// save previous , make new index , and add new value ///////////////////////

        const list = [...allstates];
        list[count][name] = value;


        // Only for showing the current value that is added in list and pass to add function
        forone[name] = value;
        setforone(forone);

        //  for searching
        setchecker(false);

        // clear search
        document.getElementById('search').value = "";
    }

    function add() {

        setallstates([...allstates, { forone }])

        setcount(count + 1);
        document.getElementById('name').value = "";
        document.getElementById('budget').value = "";
        // document.getElementById("genre").value = "Select_Options";

      

    }

    function search() {
        const moviename = document.getElementById('search').value;
        const myObj = allstates.find(obj => obj.name === moviename);

        // alert(myObj);
        if(myObj == undefined)
        {
            alert('Movie not Found');
        }
        else if(myObj.name != '')
        {
        movidata.name = myObj.name;
        movidata.budget = myObj.budget;
        movidata.genre = myObj.genre;
        setchecker(true);
        }
    }

function clearinput()
{
    setchecker(false);
}
    return (
        <div >

            <div className='container'>
                <div className='row'>

                    <div className='col-4' style={{ marginTop: '30px' }}>
                        <h2>Insert Details</h2>
                        <br></br>

                        <TextField label="Movie_Name" color="secondary" focused
                            name='name' onChange={change_all_input_using_one_func} id='name'
                            value={allstates.name} />
                        <br></br><br></br>

                        <TextField label="Movie_budget" color="secondary" focused
                            name='budget' onChange={change_all_input_using_one_func} id='budget'
                            value={allstates.budget} />
                        <br></br><br></br>


                         {/* <FormControl fullWidth>
                             <InputLabel>Movie_Genre</InputLabel> */}
                            <select id="genre" value={allstates.genre} name='genre'
                                label="Movie_Genre" onChange={change_all_input_using_one_func}
                                className="form-select" style={{padding:'13px'}}>
                                <option selected disabled>Select_Option</option>
                                <option value='Comedy'>Comedy</option>
                                <option value='Action'>Action</option>
                                <option value='Romantic'>Romantic</option>
                                <option value='Horror'>Horror</option>
                            </select>
                        {/* </FormControl> */}


                        <br></br><br></br>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Button variant="contained" onClick={add} style={{ width: '30%' }} id='b1'>Add</Button>
                        </div>

                    </div>

                    {/* //////////////////////////////////////////////////////////////////////////////////// */}

                    <div className='col-3 offset-1' style={{ marginTop: '30px' }}>
                        <h2>Display Details</h2>
                        <br></br>
                        {
                            allstates.map((value) =>
                                <div>
                                    <p><b>{value.name}</b><br></br>
                                        {value.budget}<br></br>
                                        {value.genre}</p>
                                </div>)
                        }
                    </div>


                    {/* /////////////////////////////////////////////////////////// */}


                    <div className='col-3 offset-1' style={{ marginTop: '30px' }}>
                        <h2>Search Details</h2>
                        <br></br>

                        <div class="input-group">
                            <input type="search" class="form-control rounded" placeholder="Search"
                                aria-label="Search" aria-describedby="search-addon" id='search' 
                                onChange={clearinput}/>
                            <button type="button" class="btn btn-outline-primary"
                                onClick={search}>search</button>
                        </div>
                    
                        {checker == true ?
                           
                            <p><br></br><b>{movidata.name}</b><br></br>
                                {movidata.budget}<br></br>
                                {movidata.genre}</p>
                            : ''
                        }

                    </div>
                </div>

            </div>
        </div>
    )
}
export default Insert_movie_details;