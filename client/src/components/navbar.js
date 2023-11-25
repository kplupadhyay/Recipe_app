import React from 'react';
import { Link } from 'react-router-dom';

export default function navbar() {
  return (
    <div className='navbar'>
      <Link to = "/">Home</Link>
      <Link to = "/create">Create</Link>
      <Link to = "/saved">Saved</Link>
      <Link to = "/auth">Login/Signup</Link>

    </div>
  )
}
