
// async & await
/*
fetch('https://api.coingecko.com/api/v3/exchange_rates', { 
    node:'cors',
    method:'POST',
    body:{
        name:'kennedy',
        age: 29,
    },

    headers: {

    }

} ).then((data) => {
    console.log(data)
})
*/
/*
async function getCoinData() {
    const data = await fetch ('https://api.coingecko.com/api/v3/exchange_rates');
    const json = await data.json();
    console.log(await data.json());
}
getCoinData();

*/

async function getCoinData() {
    try {
        const data = await fetch('https://api.coingecko.com/api/v3/exchange_rates');
        const json = await data.json();
        console.log(await data.json());
    } catch (ERROR) {
        console.log(ERROR);
    }
}
getCoinData()