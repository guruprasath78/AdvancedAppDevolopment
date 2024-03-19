import React, { Component } from 'react'
import './aduser.css'
function Adusers() {
    return ( <div className='users-all'>
        <div className='users-content'>
                <h2>Users List</h2><br/>
            <table className='user-table'>
                <tr className='user-tr-main'>
                    <th className='user-th'>User Id</th>
                    <th className='user-th'>Name</th>
                    <th className='user-th'>Email</th>
                    <th className='user-th'>Mobile Number</th>
                    <th className='user-th'>Products Purchased</th>
                </tr>
                <tr className='user-tr'>
                    <td className='user-th'>1</td>
                    <td className='user-th'>Shreya</td>
                    <td className='user-th'>shreya@gmail.com</td>
                    <td className='user-th'>9944121674</td>
                    <td className='user-th'>5</td>
                </tr>
                <tr className='user-tr'>
                    <td className='user-th'>2</td>
                    <td className='user-th'>Yashna</td>
                    <td className='user-th'>yashna@gmail.com</td>
                    <td className='user-th'>7786767767</td>
                    <td className='user-th'>3</td>
                </tr>
                <tr className='user-tr'>
                    <td className='user-th'>3</td>
                    <td className='user-th'>Zara</td>
                    <td className='user-th'>zara@gmail.com</td>
                    <td className='user-th'>7756767762</td>
                    <td className='user-th'>2</td>
                </tr>
                <tr className='user-tr'>
                    <td className='user-th'>4</td>
                    <td className='user-th'>Hazel</td>
                    <td className='user-th'>hazel@gmail.com</td>
                    <td className='user-th'>7745437652</td>
                    <td className='user-th'>7</td>
                </tr>
            </table>
        </div>
    </div> );
}

export default Adusers;