let input = prompt("what would you like to do?")
const todos = ["Finish This Section", "Submit to Github"]
while (input !== "quit" && input !== "q") {
    if (input === "list") {
        console.log("************")
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log("************")
    } else if (input === "new") {
        const newToDo = prompt("Ok, what would you like to add?");
        todos.push(newToDo);
        console.log(`${newToDo} added to the list, huzzah!!!`);
    } else if (input === "delete") {
        const index = parseInt(prompt("Ok, enter an number beside the item to delete:"));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, ${deleted[0]} has been removed.`);
        } else {
            console.log("Unknown Index")

        }
    }
    input = prompt("what would you like to do?")

}
console.log("OK then, see ya later!");
