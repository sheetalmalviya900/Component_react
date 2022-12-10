import React from 'react'
import './Header.css'
import { CgProfile } from "react-icons/cg";
import {FaRegTimesCircle} from "react-icons/fa"
export default  function Header(){
    return(
        <div id="header">
            <h1><CgProfile/> INTERVIEW PROCESS <FaRegTimesCircle id="cross"/></h1>
        </div>
    )

}