import React from 'react'
import {Line} from 'react-chartjs-2'
import './BMIChart.css'

function BMIChart() {
    const data={
        labels:['Weel 1','Weel 2','Week 3','Week 4','Week 5','Week 6'],
        datasets:[
            {
                label:'BMI',
                data:[3,5,8,4,5,9]
            }
        ]

    }
    return (
        <div className="chartContainer">
            <div className="Input">
                <div className="Textinput">Hight :</div>
                <input type="number" className="inputChart" min="0" max="300" />
                <div className="Textinput pr-15">(cm)</div>
                <div className="Textinput">Weight :</div>
                <input type="number" className="inputChart" min="0" max="500" />
                <div className="Textinput">(kg)</div>
                <button className="submitBMI">Submit</button>
            </div>
            <div className="chart">
                <Line data={data}/>
            </div>
        </div>
    )
}

export default BMIChart
