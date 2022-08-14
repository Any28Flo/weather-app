const axios = require('axios').default;
require('dotenv').config();

class Searches{
    //story = ["Bogota" , "guadalajara"] longitud máxima d 6
    constructor() {
        this.endpoint = process.env.ENDPOINT
    }
    async searchCity(search_text = ''){

        try{
            const instance = axios.create({
                baseURL: `${this.endpoint}/mapbox.places/${search_text}.json`,
                params:{
                    "language": "es",
                    "access_token": `${process.env.API_KEY}`
                }
           });
            const {data}= await instance.get();
            const array_sugestions =  data?.features;
            console.log(array_sugestions)
            return array_sugestions;


        }catch (e) {
            console.log(e)
        }
    }
}
module.exports = Searches;