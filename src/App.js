import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Insert_movie_details from './Component/insert_movie_details';
import Search_movie_details from './Component/Search_movie';
import Display_movie_details from './Component/Display_movie';
import Dynamically_insertion_value_in_object_in_usestate from './Component/dynamically_insertion_value_in_object_in_usestate';

function App() {
  return (
    // <div className="App" style={{display:'flex' , flexDirection:'row' , justifyContent:'space-around'}}>
    //  <Insert_movie_details/>
    //  <Display_movie_details/>
    //  <Search_movie_details/>
    //  {/* <Dynamically_insertion_value_in_object_in_usestate/> */}
    // </div>

    <div className='container'>
    <div className='row'>
    <div className='col-4' style={{border:'2px solid blue'}}><Insert_movie_details/></div>
    <div className='col-4'  style={{border:'2px solid green'}}><Display_movie_details/></div>
    <div className='col-4'  style={{border:'2px solid red'}}><Search_movie_details/></div>
    </div>
    </div>
  );
}

export default App;
