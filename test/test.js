/**
 * Created by mdemo on 14/11/13.
 */
var app = require('./app');
var request = require('supertest').agent(app.listen());

describe('index', function(){
  it('should say "Hello Index"', function(done){
    request
      .get('/')
      .expect(200)
      .expect('Hello Index', done);
  });
});
describe('user/create', function(){
  it('should say "Hello Create"', function(done){
    request
      .get('/user/create')
      .expect(200)
      .expect('Hello Create', done);
  });
});
describe('computer/mac', function(){
  it('should say "Hello MAC"', function(done){
    request
      .get('/computer/mac')
      .expect(200)
      .expect('Hello MAC', done);
  });
});
describe('computer/pc', function(){
  it('should say "Hello PC"', function(done){
    request
      .get('/computer/pc')
      .expect(200)
      .expect('Hello PC', done);
  });
});

describe('computer', function(){
  it('should say "Not Found"', function(done){
    request
      .get('/computer')
      .expect(404)
      .expect('Not Found', done);
  });
});
