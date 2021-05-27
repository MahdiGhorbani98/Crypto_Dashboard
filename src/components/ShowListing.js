import React from 'react'

export default function ShowListing(props) {
    let listCoins = props.listing.response;
    return (
        <div className ="showListing">
            <h3 className="h1Show">Top 10 Cryptocurrency</h3>
            {listCoins ? 
                listCoins.map((coin , index)=> 
                <div className="itemCoin" key={index}>
                    <span className="rank">{index+1}</span>
                    <div>
                    <p className="nameCoin"> {coin.name} </p>
                    <p className="priceCoin"> {coin.current_price}<span> $</span></p>
                    <p className={`${(coin.price_change_percentage_24h).toFixed(2) > 0 ? 'changeCoin green' : 'changeCoin red' }`} > {(coin.price_change_percentage_24h).toFixed(2)}<span> %</span></p>
                    <p className="symbolCoin"> {coin.symbol}</p>
                    </div>
                    <div className='empty' style={{width: "100px"}}></div>
                </div>
                )
                :
                'Somethings is wrong'
            }
        </div>
    )
}
