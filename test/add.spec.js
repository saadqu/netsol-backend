const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const { expect } = chai;
chai.use(chaiHttp);
const PORT = require('../config').server;
describe("Students", () => {
    // specification code
    it("should add student", async (done) => {
        const student = {
            f_name: 'Saad',
            l_name: 'Qureshi',
            age: 28,
            course: 'MIT',
        }
        chai.request(app)
            .post('/una/students')
            .set('Accept', 'application/json')
            .send(student)
            .end(async (err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body.data).to.include({
                    f_name: 'Saad',
                    l_name: 'Qureshi',
                    age: 28,
                    course: 'MIT',
                });
                done();
            });
    });
})