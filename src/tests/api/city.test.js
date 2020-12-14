const request = require('supertest');
const app = require('../../../app');


test("test prevent get cities empty field", async () => {
    await request(app).get('/api/v1/cities').expect(422);
})

test("test get cities success", async () => {
    await request(app).get('/api/v1/cities?city=sydney').expect(200);
})
