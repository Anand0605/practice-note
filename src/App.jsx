import React from 'react'
import './App.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const App = () => {
  const [textinput, setTextInput] = useState('')
  const [description, setDescription] = useState("")

  const [allnote, setAllNote]= useState([])
  // console.log(textinput)
  // console.log(description)
  const allNote = ()=>{
    const newNote = {
      id: uuidv4(),
      text: textinput,
      description: description,
      isCompleted: false
    }
    setAllNote([newNote, ...allnote])
    setTextInput('')
    setDescription('')
  }
  // console.log(allnote)

  return (
   <>
   <div className="form">
   <form>
      <input required 
      type="text"
      placeholder='add input...'
      value={textinput}
       onChange={(e)=>setTextInput(e.target.value)}
      />
      <textarea required
      placeholder='add description'
      value={description}
      onChange={(e)=>{setDescription(e.target.value)}}
      />
      <button className='btn' onClick={allNote}>save</button>
    </form>
   </div>
    <h1>All Note</h1>
    <div className="all-note">
    {
      allnote.map((note)=>{
        return <div key={note.id} className="all-card"> 
        <h2>{note.text}</h2>
        <p>{note.description}</p>
       </div>
      })
    }
    <div className="note-deatail">
    <input type="checkbox" />
    <label>Complete</label>
    </div>
    </div>
   </>
  )
}

export default App