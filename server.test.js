// server.test.js
const request = require('supertest');
const express = require('express');

const app = express();
app.get('/message', (req, res) => {
    res.send('Hello World');
});

describe('GET /message', () => {
    it('responds with Hello World', (done) => {
        request(app)
            .get('/message')
            .expect(200)
            .expect('Hello World', done);
    });
});
