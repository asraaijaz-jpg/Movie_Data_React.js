import React, { useRef , useEffect} from 'react';
import { Input, Button } from '@mui/material';

function Focused_Mouse() {
    const ref = useRef(false);

    useEffect(() => {
        ref.current.focus();
      }, []);

    const handleClick = () => {
        // alert(ref.current.value);
        ref.current.focus();
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