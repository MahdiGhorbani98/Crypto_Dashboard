import { LineChart, PieChart } from 'react-chartkick'
import 'chartkick/chart.js'
import React from 'react'

export default function PieChartMarketCap(props) {


    
    let pieChartDataTopTen =
    props.listing.response 
    ? props.listing.response.map(coin => {return [coin.name , coin.market_cap]})
    : []
    
    return (
        <div className="wow animate__animated animate__fadeInRight" style={{textAlign : 'center' , margin : '40px 0px'}}>
            <div style={{ margin : '20px 0px'}}>
                <h3 className="h1Show h3Pie">Top 10 cryptocurrency by market cap</h3>
            </div>
            <PieChart data={pieChartDataTopTen} colors={['#1e6091','#ed143d','#696465','#003049','#480ca8','#2B9348','#0081A7','#F77F00','#A9D6E5','#b00']} />
        </div>
    )
}
