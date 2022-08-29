import logo from './logo.svg';
import './App.css';
import Insert_movie_details from './Component/insert_movie_details';
import Search_movie_details from './Component/Search_movie';
import Display_movie_details from './Component/Display_movie';
import Dummy from './Component/dynamically_insertion_value_in_object_in_usestate';

function App() {
  return (
    <div className="App" style={{display:'flex' , justifyContent:'space-around'}}>
     {/* <Insert_movie_details/>
     <Display_movie_details/>
     <Search_movie_details/> */}
     <Dummy/>
    </div>
  );
}

export default App;
