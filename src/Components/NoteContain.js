import React, { useState } from "react";
import add from "./img/add.png";
import "./note.css";
const NoteContain = (props) => {
  const [expand, setExpand]=useState(false);
  const [note, setNote] = useState({
    title: "",
    textarea: "",
  });

  const InputEvent =(e) => {
    // const value=e.target.value;
    // const name=e.target.name;

    const {name, value}=e.target;
    setNote((prevData) => {
      return {
        ... prevData,
        [name]:value,
      };
    });
    console.log(note)
  }

  const addEvent = () => {
    
   props.passNote(note);
   setNote({
    title: "",
    textarea: "",
  })
  }

  const expandIt=() => {
    setExpand(true)
  }
  return (
    <>
      <div className="note">
        <form className="formdiv">
          {
            expand?(<input
            type="text"
            name="title"
            value={note.title}
            onChange={InputEvent}
            
            placeholder="Title"
            autoComplete="off"
          />):null
          }
          <textarea
            rows=""
            column=""
            name="textarea"
            value={note.textarea}
            onChange={InputEvent}
            onClick={expandIt}
            placeholder="Write a note..."
          />
          {expand?
          (<button onClick={addEvent}>
            <img src={add} alt="" width="50px" />
          </button>):null}
        </form>
      </div>
    </>
  );
};

export default NoteContain;
