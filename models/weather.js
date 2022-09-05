const axios = require('axios').default;

class Weather {
    constructor() {
        this.endpoint = process.env.OPEN_WEATHER_ENDPOINT
    }
    get paramsWeather(){

    }
   async getWeather(lat,long){
        try{
            const instance = axios.create({
                baseURL : `${this.endpoint}/data/3.0/onecall?lat=${lat}&lon=${long}&exclude=hourly,current,minutely,alerts&appid=${process.env.OPEN_WEATHER_KEY}`
            })
            const {data} = await instance.get();
            let {min,max,day} = data.daily[0].temp;
            return {
                min,
                max,
                day
            }

        }catch (e) {
            console.log(e)
        }
    }
}
module.exports = Weather;