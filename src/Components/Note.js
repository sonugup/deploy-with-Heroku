import React from "react";
// import delete from './img/delete.jpeg';
import "./notes.css";
const Note = (props) => {
  const date = new Date().getHours();
  const mint = new Date().getMinutes();
  const d1 = new Date().getDate();
  const year = new Date().getFullYear();
  const month = new Date().getMonth();


  const deleteNote =() => {
    props.deleteNote(props.id);
  }
  
  return (
    <>
      <div className="notediv">
        <div className="box">
          <h1>{props.title}</h1>
          <br />
          <p> {props.textarea} </p>
          <div className="btn1">
          <h4 >
              {date} : {mint} . {d1}-{month}-{year}
            </h4>
          <button className="btn" onClick={deleteNote}>
            
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.J4jQQ6yRTLdqptJ8YPx2TAHaHa&pid=Api&P=0"
              alt="img"
              width="50px"
            />
          </button>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Note;
