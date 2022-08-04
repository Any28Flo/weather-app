require("colors");
const inquirer = require("inquirer");

const showMenu = async() =>{
    console.log("=========================");
    console.log("CHOOSE AN OPTION".green);
    console.log("=========================");

    const choices =[
            {
                name : "option",
                type : "list",
                choices : [
                    {
                        value : 1,
                        name : `${"1.".green} Search a city`
                    },
                    {
                        value :2,
                        name: `${"2.".green} History`
                    },
                    {
                        value: 0,
                        name: `${"0.".green} Exit`
                    }
                ]
            }
        ];



    const {option} = await inquirer.prompt(choices);

    return option
}
const askData = async str =>{
    const question = [
        {
            name : "city",
            type : "input",
            message : str
        }
    ]
     const {city} = await inquirer.prompt(question);

    return city

}
const pause = async() =>{
    const question = [
        {
            name: "enter",
            type :" input",
            message : `To continue press ${"enter".green} `
        }
    ]
    const {enter} = await  inquirer.prompt(question)
    return enter
}
module.exports ={
    showMenu,
    askData,
    pause
}