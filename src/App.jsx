// import React from 'react';
// import './App.css';
// import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';

// const App = () => {
//   const [textInput, setTextInput] = useState('');
//   const [description, setDescription] = useState('');
//   const [allNote, setAllNote] = useState([]);

//   const handleCheck = (id) => {
//     const updatedNotes = allNote.map((noteItem) => {
//       if (noteItem.id === id) {
//         return { ...noteItem, isCompleted: !noteItem.isCompleted };
//       }
//       return noteItem;
//     });

//     setAllNote(updatedNotes);

//     // Check if the note is being marked as completed
//     const noteToUpdate = updatedNotes.find((note) => note.id === id);
//     if (noteToUpdate.isCompleted) {
//       // Add a new card when a checkbox is checked
//       const newNote = {
//         id: uuidv4(),
//         text: 'New card',
//         description: 'This card was added after checking another card',
//         isCompleted: false,
//       };
//       setAllNote((prevNotes) => [newNote, ...prevNotes]);
//     }
//   };

//   const addNote = (e) => {
//     e.preventDefault();
//     const newNote = {
//       id: uuidv4(),
//       text: textInput,
//       description: description,
//       isCompleted: false,
//     };
//     setAllNote((prevNotes) => [newNote, ...prevNotes]);
//     setTextInput('');
//     setDescription('');
//   };

//   return (
//     <>
//       <div className="form">
//         <form onSubmit={addNote}>
//           <input
//             required
//             type="text"
//             placeholder="Add input..."
//             value={textInput}
//             onChange={(e) => setTextInput(e.target.value)}
//           />
//           <textarea
//             required
//             placeholder="Add description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//           <button className="btn" type="submit">
//             Save
//           </button>
//         </form>
//       </div>
//       <h1>All Notes</h1>
//       <div className="all-note">
//         {allNote.map((note) => (
//           <div key={note.id} className="all-card">
//             <h2 className="title">{note.text}</h2>
//             <p className="description">{note.description}</p>
//             <input
//               type="checkbox"
//               checked={note.isCompleted}
//               onChange={() => handleCheck(note.id)}
//             />
//             {note.isCompleted && <span className="completed"> completed</span>}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default App;

// src/App.js

// Store
// import React from 'react';
// import './App.css';
// import ProductList from './ProductList';

// const App = () => {
//   return (
//     <div className="App">
//       <h1>Store</h1>
//       <ProductList />
//     </div>
//   );
// };

// export default App;
import { useState } from 'react'

import React from 'react'

const App = () => {

  const [showImages, setShowImages] = useState(true)
  const [bgChange, setBgChange] = useState("red")
  const [input, setInput] = useState("")
  const [fontIncrease, setFontIncrease] = useState(10)
  const [color, setColor] = useState("red")
  const [list, setList] = useState("")
  const [data, setData] = useState([])

  const addList =()=>{
   if(list.length===0){
alert("please fill input box")
   }
    setData([...data,list])
   
  }
  



  return (
    <div style={{ minHeight: "100vh", background: 'greenyellow' }}>
      <div style={{ width: "50%", background: "white", padding: " 5px 48px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h1 style={{ padding: 0, margin: 0 }}>coding School</h1>
          <p style={{ padding: 0, margin: 0 }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, ratione?</p>
        </div>
        <div>
          <h1>Show and hide app</h1>
          {showImages && <img src="./images/world-cup-2024.webp" style={{ width: "100%" }} alt="" />}
          <button style={{ backgroundColor: "red", color: "white", padding: "10px 25px", borderRadius: "5px", border: "none", marginTop: "10px" }} onClick={() => setShowImages(!showImages)}>{showImages ? "Hide" : "show"}</button>
        </div>
        <div style={{ width: "100px", height: "100px", background: bgChange, marginTop: "10px" }}></div>
        <button style={{ marginTop: "10px" }} onClick={() => setBgChange(bgChange === "red" ? "blue" : "red")}>ColorChange</button>
        <br />
        <input type="text" placeholder='type..' onChange={(e) => setInput(e.target.value)} />
        <h2>{input}</h2>

        <div>
          <h2>font increaser</h2>
          <p style={{ fontSize: fontIncrease }}>coding School</p>
          <input type="range" min='30' max='200' step={1} onChange={(e) => setFontIncrease(Number(e.target.value))} />
        </div>

        <br /><br />
        <div>
          <h2>color change</h2>
          <input type="text" value={color} placeholder='color type' onChange={(e) => setColor(e.target.value)} />
          <div style={{ height: 100, width: 100, background: color }}></div>
        </div>

        {/* Dynamic list */}

        <div>
        <h1>Dynamic list (Using useState & Array)</h1>
        <input  onChange={(e)=>setList(e.target.value)} placeholder='enter product name'/>
        <button onClick={addList}>btn</button>
      </div>
      <ul>{data.map((item, index)=>(
        <li key={index}>{item}</li>
        
      ))}</ul>
      </div>
      
    </div>
  )
}

export default App
