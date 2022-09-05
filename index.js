require("colors");

const {showMenu, askData, pause, menuCities} = require( "./helpers/inquire");
const Searches = require("./models/searches");
const Weather = require("./models/weather");

const {parseToFarengheit} = require("./helpers/helpers");
const {readFromDatabase, saveFile} = require("./helpers/dbMethods");
const {Cities} = require("./models/cities");

const main = async () =>{
    console.clear();
    let opt = "";
    const searches = new Searches();
    const weather = new Weather();
    const cities = new Cities();
    let placesDb = readFromDatabase();

    if(placesDb){
        cities.loadFromDatabase(placesDb)
    }

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
                const {min,max,day} = await weather.getWeather(selectCity.lat, selectCity.long)

                console.log(`${"City name:".green} ${selectCity.place_name}`);
                console.log(`${"Latitude:".green} ${selectCity.lat}` );
                console.log(`${"Longitude:".green} ${selectCity.long}`)
                console.log(`${"Temperature:".green} ${ parseToFarengheit(day) } `)
                console.log(`${"T. max:".green} ${min}`)
                console.log(`${"T. min:".green} ${max}`)
                cities.saveCity({
                    id: selectCity.id,
                    place_name: selectCity.place_name
                })
                break;
            case 2:
                //history
                cities.list();


                break
            case 3:
                //exit
                console.log("EXIT");
                break;
        }
        saveFile(cities.listArr)
    await pause();
    }while (opt !== 0)

}
main();