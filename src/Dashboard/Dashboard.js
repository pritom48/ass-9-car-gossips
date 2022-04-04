import React from 'react';
import { Area, Bar, BarChart, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <LineChart width={400} height={400} data={data}>
                        <Line dataKey={'sell'}></Line>
                        <Line dataKey={'revenue'}></Line>
                        <Line dataKey={'investment'}></Line>
                        <XAxis dataKey={'month'}></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                    </LineChart>
                </div>
                <div className='col-lg-6'>
                    <BarChart width={400} height={400} data={data}>
                        <Bar dataKey={'sell'}></Bar>
                        <Bar dataKey={'revenue'} fill="#82ca9d"></Bar>
                        <Bar dataKey={'investment'} fill="#8884d8"></Bar>
                        <XAxis dataKey={'month'}></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;