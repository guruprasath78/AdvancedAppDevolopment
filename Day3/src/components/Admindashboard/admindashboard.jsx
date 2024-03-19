import React, { Component } from 'react'
import './admindashboard.css'
import { Chart } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import Orders from './adorders';

function AdminDashboard() {
    return ( <div className='dashboard-all'>
        <div className='dashboard-details'>
                <div className='dashboard-users'>
                    <div className='dashboardright-data'>
                        <p>Total sales</p>
                        <h3>₹36000</h3>
                    </div>
                    <div className='dashboardright-data'>
                        <p>Total Orders</p>
                        <h3>670</h3>
                    </div>
                    <div className='dashboardright-data'>
                        <p>Total Products</p>
                        <h3>400</h3>
                    </div>
                </div>
        </div>
        
        <div className='dashboard-chart'>
            <Bar 
                data={{
                    labels:["A","B","C"] ,
                    datasets:[
                        {
                            label:"Revenue",
                            data:[1,2,3,4,5],
                        },
                        {
                            label:"Loss",
                            data:[1,2,3,4,5],
                        },
                    ],
                }}
            />
        </div>
        <div >
            <Orders/>
        </div>
    </div> );
}

export default AdminDashboard;