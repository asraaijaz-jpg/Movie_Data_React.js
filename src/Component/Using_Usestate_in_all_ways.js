import React, { useState } from 'react';

function Using_Usestate_in_all_ways() {

    //############# Usestate with simple Object , take input value from user and then store in Usestate object #############


    //     const [oneobj,setoneobj]=useState({
    //         name:'',
    //         budget:'',
    //         genre:''
    //     });

    // function take_input(e)
    // {
    // const {name , value}=e.target;
    // setoneobj({...oneobj, [name]: value});

    // }

    // return(<div>
    //     <h1>hello Usestate</h1>

    //     <input type='text' placeholder='Name' name='name' value={oneobj.name} onChange={take_input}/><br></br>
    //     <input type='text' placeholder='Budget' name='budget' value={oneobj.budget} onChange={take_input}/><br></br>
    //     <input type='text' placeholder='Genre' name='genre' value={oneobj.genre} onChange={take_input}/><br></br>
    //     <button>Add</button>

    //     <p>{oneobj.name}</p>
    //     <p>{oneobj.budget}</p>
    //     <p>{oneobj.genre}</p>





    //############# Usestate with simple array , take input value from user and then store in Usestate array #############


    // const [array,setarray]=useState([]);

    // function addvalue()
    // {
    // setarray([...array,{id:array.length , value:Math.floor(Math.random()*10)+1}])
    // }

    // return(
    // <div>
    //     <h1>hello Usestate</h1>

    //     <button onClick={addvalue}>Add value in useState Array</button>
    //     {
    //         array.map((data)=>
    //         <p>{data.value}</p>
    //         )
    //     }
    // </div>
    // )


    //############# Usestate with simple Object , take input value from user and then store in Usestate object #############


    const [count,setcount]=useState(0);
    const [objarray, setobjarray] = useState([
        {
            name: '',
            budget: '',
            genre: ''
        }
    ]);

    function take_input(e) {
        const { name, value } = e.target;
        const list = [...objarray];
        list[count][name] = value;
        setobjarray([...objarray , {list}])
    }

    function add()
    {
    setcount(count+1);
    document.getElementById('name').value = "";
    document.getElementById('budget').value = "";
    document.getElementById('genre').value = "";
    }
    return (<div>
        <h1>hello Usestate</h1>

        <input type='text' placeholder='Name' name='name' value={objarray.name} onChange={take_input}
        id='name' /><br></br>
        <input type='text' placeholder='Budget' name='budget' value={objarray.budget} 
        id='budget' onChange={take_input} /><br></br>
        <input type='text' placeholder='Genre' name='genre' value={objarray.genre} onChange={take_input} 
        id='genre'/><br></br>
        <button onClick={add}>Add</button>

        {
            objarray.map((value) =>
                <div>
                    <p>{value.name}</p>
                    <p>{value.budget}</p>
                    <p>{value.genre}</p>
                </div>
            )
        }

    </div>
    )
}
export default Using_Usestate_in_all_ways;