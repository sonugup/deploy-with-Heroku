// import './App.css';
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Table,
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  From,
  Navbar,
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const api = "http://localhost:8080/posts";
function App() {
  const [user, setUser] = useState("");

  
  const getdata= async () => {
    const res= await axios(api)
    const data= await res.json();
    console.log(data)
  }
  useEffect(() => {
  getdata()
  }, [])
  return (
    <>
      <ToastContainer />
      <Navbar bg="yellow" variant="dark" className="justify-content-center">
        <Navbar.Brand>Deploy Heroku</Navbar.Brand>
      </Navbar>
      <Container style={{ marginTop: "70px" }}>
        <Row>
          <Col md={5}>
            <h2>From</h2>
          </Col>
          <Col md={10}>
            <h2>Table</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
