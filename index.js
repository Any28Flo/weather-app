require("colors");


const {showMenu, askData, pause} = require( "./helpers/inquire");
const Searches = require("./models/searches");
const Weather = require("./models/weather");

const {menuCities} = require("./helpers/inquire");
const {parseToFarengheit} = require("./helpers/helpers");

const main = async () =>{
    console.clear();
    let opt = "";
    const searches = new Searches();
    const weather = new Weather();

    do{
        opt = await showMenu();

        switch (opt){
            case 1:
                //search a city
                //pido al user la ciudad a buscar
                let city = await askData("Type the city to search");

                //hago la peticion y despliego la opciones
               const places= await searches.searchCity( city );

                //Selecciono una opcion
                let chooseCity = await menuCities(places);
                // muestro los datos
                const selectCity = places.find( place => place.id === chooseCity);
                const weatherCity = await weather.getWeather(selectCity.lat, selectCity.long)
                //nombre
                //latitud
                //longitud
                // temperatura
                // minima
                //maxima
                console.log(`${"City name:".green} ${selectCity.place_name}`);
                console.log(`${"Latitude:".green} ${selectCity.lat}` );
                console.log(`${"Longitude:".green} ${selectCity.long}`)
                console.log(`${"Temperature:".green} ${ parseToFarengheit(weatherCity.day) } `)
                console.log(`${"T. max:".green} ${weatherCity.min}`)
                console.log(`${"T. min:".green} ${weatherCity.max}`)
                break;
            case 2:
                //history
                break
            case 3:
                //exit
                console.log("EXIT");
                break;
        }
    await pause();
    }while (opt !== 0)

}
main();