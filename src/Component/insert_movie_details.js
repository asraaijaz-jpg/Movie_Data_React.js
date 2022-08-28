import React , {useState} from 'react';
import {Button} from '@mui/material';
import Display_movie_details from './Display_movie';

function Insert_movie_details()
{
   const [checker,setchecker]=useState(false);
   const [allstates,setallstates]=useState([   
    {
       name:'',
       budget:'',
       genre:''
   }
])

const [allstates1,setallstates1]=useState([   
    {
       name:'asra',
       budget:'555',
       genre:'jhzjajj'
   },
   {
    name:'asraehedqhed',
    budget:'55544',
    genre:'jhzjajjoooooo323'
},
{
    name:'asra3232',
    budget:'5553333',
    genre:'jhzjajj99999999'
}
])


const array=['asra' , 'furqan' , 'bushra'];
const articles=[
    {
    'title':'Article1',
    'upvote':5,
    'date':'2019-6-22'
    },
    {
    'title':'Article2',
    'upvote':7,
    'date':'2022-3-2'
    }
     ]


   const change_all_input_using_one_func = (e) =>
   {
       const {name,value}=e.target;

       setallstates({
           ...allstates,
           [name]:[value]
       })

    
    //    setallstates(prevState => ({
    //     ...prevState,
    //     [name]: value,
    // }));
   }

   function submission()
   {
//    setchecker(true);
//   alert('Name : '+ allstates.name  + ' , ' +  'Budget : ' + allstates.budget + ' , ' +  'Budget : ' + allstates.genre);     
// setchecker(false);  
const newList = allstates1.concat({ allstates });
alert(newList[1].name);
setallstates1(newList);

// alert(allstates1.name);

}

    return(
        <div >
            <h1>Insert_movie_details</h1>

<div style={{marginTop:'60px'}}>

            <label style={{color:'green' , padding:'10px' }}><b>Movie-Name</b></label>
            <input type='text' placeholder='Movie_name' style={{padding:'8px' , marginBottom:'40px'}}
            name='name' onChange={change_all_input_using_one_func}
            value={allstates.name}/><br></br>

            <label style={{color:'green' , padding:'4px'}}><b>Movie-Budget</b></label>
            <input type='text' placeholder='Movie_budget' style={{padding:'8px' , marginBottom:'40px'}}
            name='budget' onChange={change_all_input_using_one_func}
            value={allstates.budget}/><br></br>

            <label style={{color:'green' , padding:'10px'}}><b>Movie-Genre</b></label>
            <select style={{padding:'8px' , marginBottom:'40px' , width:'61%'}}
            name='genre' onChange={change_all_input_using_one_func}
            value={allstates.genre}>
                <option>Comedy</option>
                <option>Horror</option>
                <option>Romantic</option>
                <option>Action</option>
            </select>
            
            <br></br>

            <Button variant="outlined" style={{marginTop:'33px' , width:'80%'}}
            onClick={submission}>Add</Button>

        {/* {checker==true? <Display_movie_details {...allstates} /> : '' }   */}
        {/* {allstates1.map((car) => <Display_movie_details name={car.name} budget={car.budget} genre={car.genre} />)} */}
        <Display_movie_details all={allstates1}/>
    
       
</div>

        </div>
    )
}
export default Insert_movie_details;