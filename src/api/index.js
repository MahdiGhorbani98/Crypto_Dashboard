const basrUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'



export default function getListings (){
    return fetch(basrUrl)
    .then(resp => resp.json())// get value => convert to json value
    //.then(data => console.log(data))// give me json value => log json value
    .catch(err => 'error is : '+ err)
}