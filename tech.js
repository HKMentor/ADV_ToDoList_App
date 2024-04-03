#!/usr/bin/env node
//todolistapp
//array
//operation
//function
import inquirer from "inquirer";
let todos = ["Hooria"];
async function createtodo(todos) {
    do {
        let welcome = console.log("Wellcome to the todolist App!");
        let operation = await inquirer.prompt({
            type: "list",
            name: "operator",
            message: "what you want to do?",
            choices: ["Add", "View", "Update", "Delete"]
        });
        if (operation.operator === "Add") {
            let add = await inquirer.prompt({
                type: "input",
                name: "additems",
                message: "Please add items"
            });
            todos.push(add.additems);
            console.log(todos);
        }
        if (operation.operator === "View") {
            console.log(todos);
        }
        if (operation.operator === "Update") {
            let update = await inquirer.prompt({
                type: "list",
                name: "updateitems",
                message: "Select item to update",
                choices: todos
            });
            let update2 = await inquirer.prompt({
                type: "list",
                name: "updateitems2",
                message: " Update item"
            });
            let newtodos = todos.filter(val => val != update.updateitems);
            todos = [...newtodos, update2.updateitems2];
        }
        if (operation.operatot === "Delete") {
            let remove = await inquirer.prompt({
                type: "list",
                name: "removeitems",
                message: "select item to delete",
                choices: todos
            });
        }
    } while (true);
}
createtodo(todos);
