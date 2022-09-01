import React , {useState} from 'react';

function Using_Usestate_in_all_ways()
{
  
    //////////////////Take input from this oneobj useState and then add it to objectarray ////////////////////
    const [oneobj,setoneobj]=useState({
        name:'',
        budget:'',
        genre:''
    });

    const [objarr,setobjarr]=useState([
        {
        name:'',
        budget:'',
        genre:''
    }
]);

function take_input(e)
{
const {name , value}=e.target;
setoneobj({...oneobj, [name]: value});
}

function add()
{
// alert(oneobj.name + oneobj.budget + oneobj.genre);
}

return(<div>
    <h1>hello Usestate</h1>

    <input type='text' placeholder='Name' name='name' value={oneobj.name} onChange={take_input}/><br></br>
    <input type='text' placeholder='Budget' name='budget' value={oneobj.budget} onChange={take_input}/><br></br>
    <input type='text' placeholder='Genre' name='genre' value={oneobj.genre} onChange={take_input}/><br></br>
    <button>Add</button>

</div>)
}
export default Using_Usestate_in_all_ways;