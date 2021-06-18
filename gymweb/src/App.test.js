/* eslint-disable jest/valid-expect-in-promise */
import Authservice from '../src/Backend/Service/AuthService'
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../src/Backend/server');
var should = chai.should();
chai.use(chaiHttp);
describe("unit test ", ()=>{

    it('login',  (done)=>{
      const input =   { username: "123456", password: "123456" }
      const output ={
        "isAuthenticated": true,
        "user": {
            "username": "123456",
            "role": "user"
        }
    };
      chai.request(server)
      .post('/user/login')
      .send(input)
      .end(function(err, res){
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('username');
        done();
      });
    })

})