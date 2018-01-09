let HelloWorld = require('./hello-world');

describe('Hello World', function() {
  let helloWorld = new HelloWorld();

  it('says hello world', function() {
    expect(helloWorld.hello()).toEqual('Hello, World!');
  });
});
