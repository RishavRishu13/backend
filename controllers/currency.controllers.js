const {data} = require("../db.json")

const getCurrencies = (req,res)=>{
    const {min_value} = req.query;
    if(min_value){
        const result = data.filter((item)=>Number(item.min_size) === Number(min_value))
        res.send(result)
    }
    else{  
        res.status(200).json(data)
    }
}
const getSymbols = (req,res)=>{
    const {symbol} = req.params
    console.log("URL params ", req.params)
    console.log("Query params ",req.query)
    console.log("Symbol is ",symbol)

    const currency = data.find(item => item.id.toUpperCase() === symbol.toUpperCase());

    if(!currency){
        res.status(404).send("Currency does not exist")
    }

    res.status(200).send(currency)
}

module.exports = {
    getSymbols,
    getCurrencies
}