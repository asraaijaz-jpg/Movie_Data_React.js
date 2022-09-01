import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Insert_movie_details from './Component/insert_movie_details';
import Search_movie_details from './Component/Search_movie';
import Display_movie_details from './Component/Display_movie';
import Dynamically_insertion_value_in_object_in_usestate from './Component/dynamically_insertion_value_in_object_in_usestate';
import Using_Usestate_in_all_ways from './Component/Using_Usestate_in_all_ways';


function App() {
  return (
 

    // <div className='container' style={{marginTop:'60px'}}>
    // <div className='row'>
    // <div className='col-4' style={{border:'2px solid blue'}}><Insert_movie_details/></div>
    // <div className='col-4'  style={{border:'2px solid green'}}><Display_movie_details/></div>
    // <div className='col-4'  style={{border:'2px solid red'}}><Search_movie_details/></div>
    // </div>
    // </div>

    <div>
      <Using_Usestate_in_all_ways/>
    </div>
  );
}

export default App;
