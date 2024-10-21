import React from 'react'
import { useDispatch } from 'react-redux';
import { doneOrder, removeOrder } from '../Redux/storeslice/storeslice';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Storeitem = ({stor}) => {
    const dispatch=useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <>
    <Modal className=' mx-* w-24 h-24 shadow-lg rounded absolute flex-auto justify-center' show={show} onHide={handleClose}>
        <Modal.Header className='bg-gray-200 align-content-center justify-start font-semibold' closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-gray-200 align-content-center justify-start font-semibold'>Confirm Purchase?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    <div className={`${stor.isDone? "done": "undone"}`}>
      <div class="w-96 border shadow-lg mt-10 rounded">
  <div
    class="h-56 bg-gray-200 flex flex-col shadown-lg justify-between bg-cover bg-center">
      <img alt='test' src={stor.image} className='h-56'/>
    <div class="flex justify-between ml-2 mt-1">
      <input type="checkbox"/>     
    </div>
    <div className='absolute'>
    <span onClick={() => dispatch(doneOrder({id: stor.id}))} class="uppercase text-xs bg-green-50 p-0.5 border-gray-500 border rounded text-green-700 font-medium select-none">{stor.isDone ? "Available" : "Out of Stock"}</span>
    </div>
  </div>
  <div class="p-4 flex bg-gray-300 flex-col items-center">
    <p class="text-gray-400 font-light text-xs text-center">
      premium quality
    </p>
    <h1 class="text-gray-800 text-sm h-24 mt-1">{stor.title}</h1>
    <p class="text-center mt-2 text-green-700">${stor.price}</p>
    <div class="inline-flex items-center mt-2">
      <button
        class="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20 12H4"
          />
        </svg>
      </button>
      <div
        class="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none"
      >
        2
      </div>
      <button
        class="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
      <button variant="primary" onClick={handleShow} class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
    >
      Add to order
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 ml-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    </button>
      <button className=" mt-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => dispatch(removeOrder({id: stor.id}))}>remove</button> 
    </div>
    </div>
    </div>
    </>
  )
}

export default Storeitem

    
