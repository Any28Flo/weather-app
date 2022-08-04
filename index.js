const {showMenu} = require( "./helpers/inquire");

const main = async () =>{
    console.clear();
    let opt = "";

    opt= await showMenu();

    do{
        switch (opt){
            case '1':
                //search a city
                break;
            case '2':
                //history
            case '3':
                //exit
                console.log("EXIT");
                break;
        }
    }while (opt !== '3')

}
main();