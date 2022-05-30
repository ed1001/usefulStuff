// A closure is basically a function that uses a variable from an outer scope

function makeAdder(x) {
    return function (y) {
        return x + y
    }

}

const add5 = makeAdder(5)


