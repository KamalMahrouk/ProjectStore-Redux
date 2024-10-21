import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Navbar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <>
  <nav class="Absolute px-2 top-0 md:flex-row shadow-lg w-full">
    <div class="m-1 ml-3 mx-auto flex flex-wrap sm:w-auto items-center justify-between">
    <a href="#" class="flex text-decoration-none">
      <span class="self-center text-[#E50914] ml-4 text-3xl font-bold whitespace-nowrap">Store</span>
    </a>
    <div class="hidden md:flex justify-between items-center w-full sm:w-auto md:w-auto md:order-1" id="mobile-menu-3">
      <ul class="flex-row md:flex-row flex md:space-x-8 mt-4 mr-10 md:mt-0 md:text-sm md:font-medium">
        <li>
          <a href="#" class="text-decoration-none text-gray-400  md:bg-transparent block pl-3 pr-4 py-2 md:text-gray-400 md:hover:text-gray-50 md:p-0 rounded" aria-current="page"><Link style={{textDecoration:"none", color:"gray"}} to="/">Home</Link></a>
        </li>
        <li>
          <a href="#" class="text-gray-400 text-decoration-none hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-50 md:p-0"><Link style={{textDecoration:"none", color:"gray"}} to="/About">about</Link></a>
        </li>
        <li>
          <a href="#" class="text-gray-400 mr-96 sm:mr-52 hover:bg-gray-50 text-decoration-none border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-50 md:p-0"><Link style={{textDecoration:"none",  color:"gray"}} to="/Contact">contact</Link></a>
        </li>
        <li>
        <Button className='justify-center ml-96 sm:ml-52' variant="primary" href='#signup' onClick={handleShow}>
        Log in
      </Button></li>
      <li>
      <Link to="/Login"><Button className=' justify-center ml-1' variant="">
        Sign up
      </Button></Link>
        </li>
      </ul>
    </div>
    </div>
  </nav>
  <Modal show={show} href='#signup' onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login Panel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput2"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter your code"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  
  <script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>
      </>
  )
}

export default Navbar
