const request = require('supertest');
const expect = require('chai').expect;
const app = require('../index'); 

describe('Star Tracker Final Requirements Verification', () => {

  describe('Content-Type Negotiation', () => {
    it('should return JSON when Accept header is application/json', async () => {
      const res = await request(app)
        .get('/planets')
        .set('Accept', 'application/json');
      
      expect(res.status).to.equal(200);
      expect(res.headers['content-type']).to.include('application/json');
      expect(res.body).to.be.an('array');
    });

    it('should return HTML when Accept header is text/html', async () => {
      const res = await request(app)
        .get('/planets')
        .set('Accept', 'text/html');
      
      expect(res.status).to.equal(200);
      expect(res.headers['content-type']).to.include('text/html');
      expect(res.text).to.include('<!DOCTYPE html>');
    });
  });

  describe('CRUD & Status Codes', () => {
    it('should return 201 Created after a successful JSON POST', async () => {
      const res = await request(app)
        .post('/galaxies')
        .set('Accept', 'application/json')
        .send({ name: 'Test Galaxy', size: 1234 });
      
      expect(res.status).to.equal(201);
      expect(res.body.name).to.equal('Test Galaxy');
    });

    it('should redirect (302) to index after HTML form submission', async () => {
      const res = await request(app)
        .post('/galaxies')
        .set('Accept', 'text/html')
        .type('form')
        .send({ name: 'Web Galaxy', size: 555 });
      
      expect(res.status).to.equal(302);
      expect(res.headers.location).to.equal('/galaxies');
    });
  });
});