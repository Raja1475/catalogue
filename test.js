// test/server.test.js

const assert = require('chai').assert;
const request = require('supertest');
const app = require('../server');

describe('Server', function () {
    describe('GET /health', function () {
        it('should return status 200 and app: OK-2 if MongoDB is connected', function (done) {
            request(app)
                .get('/health')
                .expect(200)
                .end(function (err, res) {
                    if (err) return done(err);
                    assert.equal(res.body.app, 'OK-2');
                    done();
                });
        });
    });

    describe('GET /products', function () {
        it('should return status 500 if MongoDB is not connected', function (done) {
            request(app)
                .get('/products')
                .expect(500, done);
        });
    });

    // Add more test cases for other endpoints as needed
});
