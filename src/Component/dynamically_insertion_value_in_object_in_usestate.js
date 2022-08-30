import React, { useState } from "react";
 
function Dummy() {
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);
  const [count,setcount]=useState(0);
 
  
  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[count][name] = value;
    setInputList(list);

  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", lastName: "" }]);
    setcount(count+1);
    document.getElementById('Fname').value="";
    document.getElementById('Lname').value="";
  };
  
  return (
    <div className="App">
      <h3><a href="https://cluemediator.com">Clue Mediator</a></h3>
          <div className="box">
            <input
              id='Fname'
              name="firstName"
   placeholder="Enter First Name"
              value={inputList.firstName}
              onChange={e => handleInputChange(e)
              }
            />
            <input
              className="ml10"
              id='Lname'
              name="lastName"
   placeholder="Enter Last Name"
              value={inputList.lastName}
              onChange={e => handleInputChange(e)}
            />
            <div className="btn-box">
             <button  onClick={handleAddClick} >Add</button>
            </div>
          </div>
       
      {
        inputList.map(va=><p>{va.firstName}{va.lastName}</p>)
      }
    </div>
  );
}
 
export default Dummy;
















// ///////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from "react";
 
// function Dummy() {
//   const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);
 
  
//   // handle input change
//   const handleInputChange = (e, index) => {
//     const { name, value } = e.target;
//     const list = [...inputList];
//     list[index][name] = value;
//     setInputList(list);
//   };
 
//   // handle click event of the Remove button
//   const handleRemoveClick = index => {
//     const list = [...inputList];
//     list.splice(index, 1);
//     setInputList(list);
//   };
 
//   // handle click event of the Add button
//   const handleAddClick = () => {
//     setInputList([...inputList, { firstName: "", lastName: "" }]);
//   };
  
//   return (
//     <div className="App">
//       <h3><a href="https://cluemediator.com">Clue Mediator</a></h3>
//       {inputList.map((x, i) => {
//         return (
//           <div className="box">
//             <input
//               name="firstName"
//    placeholder="Enter First Name"
//               value={x.firstName}
//               onChange={e => handleInputChange(e, i)}
//             />
//             <input
//               className="ml10"
//               name="lastName"
//    placeholder="Enter Last Name"
//               value={x.lastName}
//               onChange={e => handleInputChange(e, i)}
//             />
//             <div className="btn-box">
//               {inputList.length !== 1 && <button
//                 className="mr10"
//                 onClick={() => handleRemoveClick(i)}>Remove</button>}
//               {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
//             </div>
//           </div>
//         );
//       })}
//       <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
//     </div>
//   );
// }
 
// export default Dummy;