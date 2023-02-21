import logo from './logo.svg';
import './App.css';
import  React, { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import NoteContain from './Components/NoteContain';
import Note from './Components/Note';

function App() {
  const [item, setItem]=useState([])
  const addNote = (note) => {
    // alert("I am clicked")
    setItem((prevData) => {
      return [...prevData, note]
    })
    
  }

  const onDelete=(id) => {
setItem((olddata) => 
  olddata.filter((cur , indx) => {
    return indx != id;
  })
)
  }
  return (
    <>
      <Header/>
      <NoteContain passNote={addNote} />
      
      {item.map((val, index) => {
        return (
        <Note
          key={index}
          id={index}
          title={val.title}
          textarea={val.textarea}
          deleteItem={onDelete}
          />
          )
        
      })}
      <Footer/>
    </>
  );
}

export default App;
