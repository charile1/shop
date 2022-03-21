import React from 'react';
import {Navbar, Container, Nav, NavDropdown, Jumbotron, Button  } from 'react-bootstrap';
import { useState } from 'react';
// components
import shoesArr from './data.js';
import './App.css';

function App() {
  let [shoes, setShoes] = useState(shoesArr);

  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <Jumbotron className='background'>
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
      <p>
        <Button bsStyle="primary">Learn more</Button>
      </p>
    </Jumbotron>;


    <div className="container">
        <div className="row">
          <Card shoes={shoes[0]}/>
          <Card shoes={shoes[1]}/>
          <Card shoes={shoes[2]}/>
          {/* 컴포넌트의 반복을 조건문으로 줄이기 */}
          { 
            shoes.map((a,i)=>{
             return <Card shoes={shoes[i]} i={i} key={i}/>
            })
          }

        </div>
    </div>   
    </>
    );
  }

const Card = (props) => {
  return (
    <div className="col-md-4">
      {/* <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="이미지" width="100%"/> 하드코딩 */}
      <img src= { "https://codingapple1.github.io/shop/shoes" + (props.i+1) + ".jpg"} alt="이미지" width="100%"/> 
      <h4> { props.shoes.title} </h4> 
      <p> { props.shoes.content} & { props.shoes.price} </p>
    </div>
  )
}


export default App;
