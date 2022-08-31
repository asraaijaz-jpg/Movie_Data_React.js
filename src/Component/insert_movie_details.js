import React , {useState} from 'react';
import {Button} from '@mui/material';
import Display_movie_details from './Display_movie';

function Insert_movie_details()
{
   const [checker,setchecker]=useState(false); 
   const [count,setcount]=useState(0);
   const [allstates,setallstates]=useState([   
    {
       name:'asra',
       budget:'400000',
       genre:'action'
   }
])
   const change_all_input_using_one_func = (e) =>
   {
       const {name,value}=e.target;
       const list = [...allstates];
       list[count][name] = value;
       setallstates(list);
   }

   function add()
   {
    setallstates([...allstates, { name: "", budget: "" , genre: ""}]);
    setcount(count+1);
    document.getElementById('name').value="";
    document.getElementById('budget').value="";
    document.getElementById('genre').value="";
    setchecker(true);
   }

   const obj = [
       {name: 'Alice', age: 29, country: 'Austria'},
       {name: 'Alice', age: 29, country: 'Austria'},
       {name: 'Alice', age: 29, country: 'Austria'},
   ];

    return(
        <div >
            <h1>Insert_movie_details</h1>

<div style={{marginTop:'60px'}}>

            <label style={{color:'green' , padding:'10px' }}><b>Movie-Name</b></label>
            <input type='text'  style={{padding:'8px' , marginBottom:'40px'}}
            name='name' onChange={change_all_input_using_one_func} id='name'
            value={allstates.name}/><br></br>

            <label style={{color:'green' , padding:'4px'}}><b>Movie-Budget</b></label>
            <input type='text' style={{padding:'8px' , marginBottom:'40px'}}
            name='budget' onChange={change_all_input_using_one_func} id='budget'
            value={allstates.budget}/><br></br>

            <label style={{color:'green' , padding:'10px'}}><b>Movie-Genre</b></label>
            <select style={{padding:'8px' , marginBottom:'40px' , width:'61%'}}
            name='genre' onChange={change_all_input_using_one_func} id='genre'
            value={allstates.genre} >
                <option></option>
                <option>Horror</option>
                <option>Romantic</option>
                <option>Action</option>
                <option>Comedy</option>
            </select>
            
            <br></br>

            <Button variant="outlined" style={{marginTop:'33px' , width:'80%'}}
            onClick={add}>Add</Button>
            {checker == true ?  <Display_movie_details data={obj}/> : ''}
           
            
      {/* {allstates.map((x) => {
        return (
         <p>{x.name}{x.budget}{x.genre}</p>
        );
      })} */}

</div>

        </div>
    )
}
export default Insert_movie_details;