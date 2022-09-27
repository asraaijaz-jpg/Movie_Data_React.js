import React, { useState } from 'react';

function Done_OR_NotDone_in_listing() {
    const [count, setcount] = useState(0);
    const [display, setdisplay] = useState(false);

    const [temp, settemp] = useState(
        {
            item: '',
            done: '',
            checkbox: ''
        }
    )

    const [list, setlist] = useState([
        {
            item: '',
            done: '',
            checkbox: ''
        }
    ])

    function listdata(e) {
        const { name, value } = e.target;
        const store = [...list];

        if (name == 'checkbox') {
            store[count][name] = 'True';
            temp[name]='True';
        }

        else {
            store[count][name] = value;
            temp[name] = value;
        }
        settemp(temp);

    }

    function addinlist() {

        // temp.map((novalue)=>
        // <div>
        //     {novalue.checkbox === null ? ' False' : ''}
        // </div>)

        setlist([...list, { temp }])
        setcount(count + 1);
        document.getElementById('item').value = "";
        document.getElementById('done').value = "";

        if (document.getElementById('checkbox').checked) {
            document.getElementById('checkbox').checked = false;
            setdisplay(false);
        }
        else {
            document.getElementById('checkbox').checked = false;
            setdisplay(true);
        }
       
    }

    return (
        <div>
            <center>
                <h1>Done_OR_NotDone_in_listing</h1><br></br><br></br>

                <input type='text' onChange={listdata} name='item' value={list.item} id='item' /><br></br><br></br>
                <input type='text' onChange={listdata} name='done' value={list.done} id='done' /><br></br><br></br>
                <input type='checkbox' onChange={listdata} style={{ width: '30px', height: '30px' }}
                    name='checkbox' value={list.checkbox} id='checkbox' /><br></br><br></br>
                <button onClick={addinlist}>Add</button>


                {
                    list.map((value) =>
                        <div>
                            <p>
                                <br></br>
                                {value.item}<br></br>
                                {value.done}<br></br>
                                {value.checkbox} 
                            </p>
                        </div>)
                }
            </center>
        </div>
    )
}
export default Done_OR_NotDone_in_listing