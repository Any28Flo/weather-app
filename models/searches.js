const axios = require('axios').default;

require('dotenv').config();

class Searches{

    constructor() {
        this.endpoint = process.env.ENDPOINT
    }

    get paramsMapbox(){
        return {
            'access_token': process.env.API_KEY,
            'limit' : 5,
            "language": "es"
        }
    }
    async searchCity(search_text = ''){

        try{
            const instance = axios.create({
                baseURL: `${this.endpoint}/mapbox.places/${search_text}.json`,
                params: this.paramsMapbox
           });

            const {data}= await instance.get();

            const array_sugestions =  data?.features;

            return array_sugestions.map(city =>({

                   id: city.id,
                    place_name:city.place_name_es,
                    lat : city.center[0],
                    long : city.center[1]

            }));

        }catch (e) {
            console.log(e)
        }
    }
}
module.exports = Searches;