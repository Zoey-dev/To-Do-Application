import React from 'react';
import './button.css';
import { IoIosAdd, IoMdArrowForward} from 'react-icons/io';
import { BiEditAlt } from 'react-icons/bi';
import { MdKeyboardArrowLeft } from 'react-icons/md';

function Button( {type, handleClick } ) {


    return (
            <button className={`button ${type === "back" ? "transparent" : ""}`}  
            onClick = {handleClick}
            type={type}>
                {
                type === "add" ? 
                <IoIosAdd className="add-icon" /> :
                type === "edit" ? 
                <BiEditAlt className="edit-icon" /> :
                type === "direction" ? 
                <IoMdArrowForward className="arrow-icon" /> :
                <MdKeyboardArrowLeft  className="back-arrow"/>
            }
                
            
            
                
            </button>
    );
}

export default Button;

