const request = require('supertest');
const app = require('../../../app');

test("test prevent get weather empty field", async () => {
    await request(app).get('/api/v1/weathers').expect(422)
})

test("test prevent get weathers incorrect ID", async () => {
    await request(app).get('/api/v1/weathers?id=1').expect(404)
})

test("test get weathers success", async () => {
    await request(app).get('/api/v1/weathers?id=1105779').expect(200)
})

