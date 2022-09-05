const City = require("./city");

class Cities {
    _cities = {};

    get listArr () {
        let array = [];
        Object.keys(this._cities).forEach(key =>{
            array.push(this._cities[key])
        })
        return array;
    }

    constructor() {
        this._cities = {}
    }

    loadFromDatabase(arrayCities = []){
        arrayCities.forEach(city =>{
            this._cities[city.id] = city
        })
    }
    saveCity( city ){
        let newRegister = new City(city.id,city.place_name);
        this._cities[city.id] = newRegister;
    }
    list(){
        this.listArr.forEach((city, index) =>{
            console.log ( `${index+1}.- ${city.place_name} `)
        })
    }
}
module.exports = {Cities}