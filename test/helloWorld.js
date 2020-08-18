const _deploy_contracts = require("../migrations/2_deploy_contracts");

const HelloWorld = artifacts.require('HelloWorld');

contract('HelloWorld', () => {
    it('Should return hello world', async () => {
        const helloWorld = await HelloWorld.deployed();
        const result = await helloWorld.hello();
        assert(result === 'Hello World!');
    });
});