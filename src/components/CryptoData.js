import React,{useEffect,useState} from 'react'
import getListings from './../api'
import ShowListing from './ShowListing'
import PieChartMarketCap from './PieChartMarketCap';

export default function CryptoData() {

    let [listing , setListing] = useState([])
    // const person = [
    //     {n : 1 , m :2},
    //     {n : 3 , m :4},
    //     {n : 5 , m :6}
    // ];
    useEffect (()=>{

        setInterval(()=>{
            getListings().then(response =>setListing({response}) )
        },2000)
        return()=>{

        }
    },[])


    return (
        <div>
            {/* {listing && listing.response && console.log( listing.response)} */}
            <ShowListing listing ={listing}/>
            <PieChartMarketCap listing ={listing}/>

        </div>
    )
}
