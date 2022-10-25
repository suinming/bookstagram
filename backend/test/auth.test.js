// import libraries
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

// import seeder 
const seeder = require('../seeder')

// import server
const server = require('../server');

// import Model
// const User = require("../api/models/userModel");

// use chaiHttp for making the actual HTTP requests        
chai.use(chaiHttp);

// root route
const root = '/api/v1/auth' 

describe("test for auth api", function() {

    before(function () {
      seeder.deleteData()
      seeder.importData() 
    });

    after(function () {
      seeder.deleteData()
    });

   it("register the user, login the user, check for the authentication", function(done) {
     chai
       .request(server)
       .post(`${root}/register`)
       .send({
          name: "test Account",
          email: "test@mailinator.com",
          role: "user",
          password: "123456"
        })
       .end(function(err, res) {
         res.should.have.status(200);
         done()
       })
   })

 })

