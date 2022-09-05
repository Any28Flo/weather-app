const fs = require("fs");

const path = "./db/cities.json";

const saveFile = data =>{
    fs.writeFileSync(path , JSON.stringify(data))
}

const readFromDatabase = () =>{

    if(!fs.existsSync(path)){
        return null
    }
    const data = fs.readFileSync(path, {encoding: 'utf-8'});
    return  JSON.parse(data)

}
module.exports = {
    saveFile,
    readFromDatabase
}