
const {showMenu, askData, pause} = require( "./helpers/inquire");
const Searches = require("./models/searches");
const {menuCities} = require("./helpers/inquire");

const main = async () =>{
    console.clear();
    let opt = "";
    const searches = new Searches();


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

                //nombre
                //latitud
                //longitud
                // temperatura
                // minima
                //maxima
                console.log(`City name: ${selectCity.place_name}`);
                console.log(`Latitude: ${selectCity.lat}` );
                console.log(`Longitude: ${selectCity.long}`)
                console.log(`Temperature`)
                console.log(`T. max`)
                console.log(`T. min`)
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