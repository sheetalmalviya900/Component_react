import React from 'react'
import './Body.css'
export default function Body() {
    return (
        <div id="Body">
            <div id="div1">
                <p id="p1">Name <span>*</span><br/>Bussiness Development Executive</p>
                <hr id="hr1"/>
            </div>
            <div id="div2">
            <h2>Interview Process Round</h2>
            <table>
                <tr>
                    <td>
                        <p>Level<span>*</span><br /><p>1</p><hr id="hr2" /></p>
                    </td>
                    <td>
                        <p>Name<span>*</span><br /><p>Telephonic Round</p><hr id="hr3" /></p>
                    </td>
                    <td>
                        <p>Select Interviewer<span>*</span><br /><p>SHEETAL MALVIYA</p><hr id="hr4" /></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Level<span>*</span><br /><p>2</p><hr id="hr2"/></p>
                    </td>
                    <td>
                        <p>Name<span>*</span><br /><p>Telephonic Round</p><hr id="hr3"/></p>
                    </td>
                    <td>
                        <p>Select Interviewer<span>*</span><br /><p>AARTI KUMARI</p><hr id="hr4"/></p>
                    </td>
                </tr>
            </table>
            </div>
            <button id="add">ADD NEW</button>
            <button id="update">UPDATE</button>
            <button id="cancel">CANCEL</button>
        </div>
    )

}