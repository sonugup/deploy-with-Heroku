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
  Form,
  Navbar,
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const api = "http://localhost:8090/posts";
const initialState = {
  image: "",
  name: "",
  email: "",
  contact: "",
  address: "",
};
function App() {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState(null);
  const [edit, setEdit] = useState(false);

  const { image, name, email, contact, address } = state;

  const getdata = async () => {
    const res = await axios.get(api);
    // const data=await res
    setData(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    getdata();
  }, []);

  const heandleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const heandleUpdate = (id) => {
    const sUser = data.find((item) => item.id == id);
    setState({ ...sUser });
    setUserId(id);
    setEdit(true);
  };
  const heandleDelete = async (id) => {
    if (window.confirm("Are you wanted to delete that user")) {
      axios.delete(`${api}/${id}`);
      toast.success("Delete your user Successfully");
      setTimeout(() => getdata(), 500);
    }
  };
  const heandleSubmit = (e) => {
    e.preventDefault();
    if (!email || !name || !image || !contact || !address) {
      toast.error("Please fill the form");
    } else {
      if (!edit) {
        axios.post(api, state);
        toast.success("Added SuccessFully");
        setState({
          image: "",
          name: "",
          email: "",
          contact: "",
          address: "",
        });
        setTimeout(() => getdata(), 500);
      } else {
        axios.put(`${api}/${userId}`, state);
        toast.success("Added SuccessFully");
        setState({
          image: "",
          name: "",
          email: "",
          contact: "",
          address: "",
        });
        setTimeout(() => getdata(), 500);
        setUserId(null);
        setEdit(false);
      }
    }
  };
  return (
    <>
      <ToastContainer />
      <Navbar bg="primary" variant="dark" className="justify-content-center">
        <Navbar.Brand>Deploy Heroku</Navbar.Brand>
      </Navbar>
      <Container style={{ marginTop: "70px" }}>
        <Row>
          <Col md={4}>
            <Form onSubmit={heandleSubmit}>
              <Form.Group>
                <Form.Label style={{ textAlign: "left" }}> Image</Form.Label>
                <Form.Control
                  type="img"
                  placeholder="image"
                  name="image"
                  value={image}
                  onChange={heandleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ textAlign: "left" }}> Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="name"
                  name="name"
                  value={name}
                  onChange={heandleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ textAlign: "left" }}> Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="email"
                  name="email"
                  value={email}
                  onChange={heandleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ textAlign: "left" }}> Contact</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Contact"
                  name="contact"
                  value={contact}
                  onChange={heandleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ textAlign: "left" }}> Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={address}
                  onChange={heandleChange}
                />
              </Form.Group>

              <div className="d-grid gap-2 mt-2">
                <Button type="submit" variant="primary" size="lg">
                  {edit ? "Update" : "Submit"}
                </Button>
              </div>
            </Form>
          </Col>
          <Col md={8}>
            <Table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Avatar</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              {data &&
                data.map((item, i) => {
                  return (
                    <tbody key={i}>
                      <tr>
                        <td> {i + 1} </td>
                        <td>
                          <img
                            src={item.image}
                            alt=""
                            width="50px"
                            height="50px"
                          />{" "}
                        </td>
                        <td> {item.name} </td>
                        <td> {item.email} </td>
                        <td> {item.contact} </td>
                        <td> {item.address} </td>
                        <td>
                          <ButtonGroup>
                            <Button
                              style={{ marginRight: "5px" }}
                              variant="secondary"
                              onClick={() => heandleUpdate(item.id)}
                            >
                              Update
                            </Button>
                            <Button
                              style={{ marginRight: "5px" }}
                              variant="danger"
                              onClick={() => heandleDelete(item.id)}
                            >
                              Delete
                            </Button>
                          </ButtonGroup>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
