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
                        value : "1",
                        name : `${"1.".green} Search a city`
                    },
                    {
                        value :"2",
                        name: `${"2.".green} History`
                    },
                    {
                        value: "3",
                        name: `${"3.".green} Exit`
                    }
                ]
            }
        ];



    const {option} = await inquirer.prompt(choices);

    return option
}
module.exports ={
    showMenu
}