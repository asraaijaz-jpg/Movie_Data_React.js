import React, { useRef , useEffect , useState} from 'react';
import { Input, Button } from '@mui/material';

function Focused_Mouse() {
    const [alter,setalter]=useState(true);
    const ref = useRef(null);
    const flipflop='';

    // useEffect(() => {
    //     ref.current.focus();
    //   }, []);

    const handleClick = () => {
        
        if(alter)
        {
        ref.current.focus();
        alert('Ref true get focused');
        setalter(false);
        }
        
        if(alter == false)
        {
            alert('Ref false not get focused');
            setalter(true);
        }
    };

    return (
        <div>
            <center>
                <input ref={ref} id="message" name="message" />

                <br></br><br></br>

                <Button variant='contained' color='primary' onClick={handleClick}>Focus input</Button>
            </center>
        </div>
    );
}
export default Focused_Mouse