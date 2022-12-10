import React from 'react'
import './Sidebar.css'
import {FaHome} from "react-icons/fa";
import {FaUserAlt } from "react-icons/fa";
import {FaUserCheck } from "react-icons/fa";
import {FaUsersCog } from "react-icons/fa";
import {FaCcAmazonPay} from "react-icons/fa";
import {FaShoppingBag} from "react-icons/fa";
import {FaLifeRing} from "react-icons/fa";
import {FaCogs } from "react-icons/fa";
import { GrDocumentPerformance } from "react-icons/gr";
import {FaCreativeCommonsBy} from "react-icons/fa";
export default function Siderbar(){
    return(
        <div id="Side"> 
            <h3><FaHome/>   Dashboard</h3>
            <h3><FaUserAlt/> Employee</h3>
            <h3><FaUserCheck/> Attendance</h3>
            <h3><FaUsersCog/> Site/Field Track </h3>
            <h3><FaCcAmazonPay/> Payroll</h3>
            <h3><FaShoppingBag/> Statuatory Comliances</h3>
            <h3><FaLifeRing/> Leaves</h3>
            <h3><FaCogs/> Asset Management</h3>
            <h3><GrDocumentPerformance id='gr'/> Goals & Performanc</h3>
            <h3><FaCreativeCommonsBy/> Recruitment</h3>
            <h4>Openings</h4>
            <h4>Candidate</h4>
            <h4>Interview Process</h4>
        </div>
    )
}