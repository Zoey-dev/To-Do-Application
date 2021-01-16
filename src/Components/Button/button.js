import React from 'react';
import './button.css';
import { IoIosAdd, IoIosArrowBack} from 'react-icons/io';
import { BiEditAlt } from 'react-icons/bi';

function Button( {type, handleClick } ) {

    
    return (
            <button className="button"  
            onClick = {handleClick}
            type={type}>
                
            <IoIosAdd className="add-icon" />
            
            {/* <BiEditAlt className="edit-icon" /> */}
            {/* <IoIosArrowBack className="arrow-icon" /> */}
                
            </button>
    );
}

export default Button;

