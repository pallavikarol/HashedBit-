function variableScopeDemo() {
    if (true) {
        var a = "I am var";
        let b = "I am let";
        const c = "I am const";

        console.log("Inside block:");
        console.log(a); // I am var
        console.log(b); // I am let
        console.log(c); // I am const
    }

    console.log("Outside block:");
    console.log(a); // Works - var is function scoped
    // console.log(b); // Error - let is block scoped
    // console.log(c); // Error - const is block scoped
}

variableScopeDemo();