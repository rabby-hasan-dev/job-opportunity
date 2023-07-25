
import React, { PureComponent } from 'react';

import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';


const marksData = [
    {
        "name": "Assignment 1",
        "obtainMark": 48,
        "totalMark": 50
    },
    {
        "name": "Assignment 2",
        "obtainMark": 47,
        "totalMark":50
    },
    {
        "name": "Assignment 3",
        "obtainMark": 30,
        "totalMark": 30
    },
    {
        "name": "Assignment 4",
        "obtainMark": 42,
        "totalMark":50
    },
    {
        "name": "Assignment 5",
        "obtainMark": 48,
        "totalMark": 50
    },
    {
        "name": "Assignment 6",
        "obtainMark": 24,
        "totalMark": 30
    },
    {
        "name": "Assignment 7",
        "obtainMark":58,
        "totalMark": 60
    },
    {
        "name": "Assignment 8",
        "obtainMark": 30,
        "totalMark":30
    },
    {
        "name": "Assignment 9",
        "obtainMark": 0,
        "totalMark": 30
    },
    {
        "name": "Assignment 10",
        "obtainMark": 27,
        "totalMark": 30
    },
    {
        "name": "Assignment 11",
        "obtainMark": 27,
        "totalMark": 30
    },
    {
        "name": "Assignment 12",
        "obtainMark": 0,
        "totalMark":30
    }
]

const Dashboard = () => {

    return (
       <div className='w-full mx-auto'>
        <h2 className='text-4xl text-center my-8'>All Assignment Marks</h2>
         < ComposedChart
            width={1200}
            height={400}
            data={marksData}
            margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
            }
            }
        >

            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="obtainMark" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="obtainMark" stroke="#ff7300" />
        </ComposedChart >
       </div>

    );
};

export default Dashboard;