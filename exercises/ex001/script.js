function helloWorld(name) {
    let message;
    if (name == "" || name == null) {
        message = "Hello, World!";
    } else {
        message = "Hello, " + name + "!";
    }
    return message;
}

const message = helloWorld("linguine");
console.log(message);