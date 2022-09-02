import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Insert_Show_Search_movie_details from './Component/Insert_Show_Search_movie_details';
import Dynamically_insertion_value_in_object_in_usestate from './Component/dynamically_insertion_value_in_object_in_usestate';
import Using_Usestate_in_all_ways from './Component/Using_Usestate_in_all_ways';


function App() {
  return (
   
    <div>
        <center><h1>Movie_APP</h1></center>
      <Insert_Show_Search_movie_details/>
    </div>
    // <div>
    //   <Using_Usestate_in_all_ways/>
    // </div>
  );
}

export default App;
