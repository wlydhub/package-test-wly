const test = {
  test: () => {
    console.log('this is a msg from package-test-wly')
  },
  hello: (name) => {
    console.log('hello ' + name + ', thank you user my packge')
  }
}

module.exports = test;