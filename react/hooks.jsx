// useState lazy initialization

// the argument that is passed to useState (initial value) is disregarded after the first render, if it's a callback
// it only gets called once so let the callback calculate this initial state rather than calculating it every render

const Component = () => {
    const [state, setState] = useState(getInitialHundredItems())
}

const Component = () => {
    const [state, setState] = useState(getInitialHundredItems)
}

// using previous state

// guarantees the prevState is not modified during setState

const [state, setState] = useState({});
setState(prevState => {
    // Object.assign would also work
    return {...prevState, ...updatedValues};
});