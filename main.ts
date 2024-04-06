#! /usr/bin/env node
import inquirer from "inquirer"

let todos: string[] = [];

async function createTodo(todos:string[]){
    do{
        let ans = await inquirer.prompt({
        type: "list",
        message: "select an operation",
        name: "select",
        choices: ["add", "update", "delete", "view"]
    });
    if(ans.select == "add"){
        let addTodo = await inquirer.prompt({
            type: "input",
            message: "Add item..",
            name: "todo",
        });
        todos.push(addTodo.todo)
        console.log(todos)
    }
    if(ans.select == "update"){
        let updateTodo = await inquirer.prompt({
            type: "list",
            message: "select item to update your todo list",
            name:"todo",
            choices:todos.map(item => item)

        });
        let addTodo = await inquirer.prompt({
            type: "input",
            message: "add item..",
            name: "todo",
        });
        let newTodos = todos.filter(val => val !== updateTodo.todo)
        todos = [...newTodos,addTodo.todo]
        console.log(todos);
    }

    if(ans.select == "view"){
    console.log(todos)
    }
    if(ans.select== "delete"){
        let deleteTodo = await inquirer.prompt({
            type: "list",
            message: "select item to update your todo list",
            name:"todo",
            choices:todos.map(item => item)
        })
        let newTodos = todos.filter(val => val !== deleteTodo.todo)
        todos =[...newTodos]
        console.log(todos)

    }

    }while(true)
    
}
createTodo(todos)

 