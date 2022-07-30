import React from 'react';
import '../src/navbar.css'
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <div className='wrapper'>
                Navbar
                <div className='btn'>

                    <Link to='/'><p className='text'>Home</p></Link>
                    <Link to='/crud'><p className='text'>Crud</p></Link>
                    <Link to='/props'><p className='text'>Prop</p></Link>
                    <Link to='/apifetch'><p className='text'>Api</p></Link>

                </div>
              
            </div>
        </div>
    );
}

export default Navbar;
