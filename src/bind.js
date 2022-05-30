const ben = {
    name: 'ben',
    talk() {
        console.log(this.name)
    }
}

ben.talk.bind({name: 'sdfs'})()
// outputs sdjs
