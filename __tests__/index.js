const { default: expectCt } = require("helmet/dist/middlewares/expect-ct")

const supertest = require("supertest")
const server = require("../server")

test("GET /", async () => {
	const res = await supertest(server).get("/")
	expect(res.statusCode).toBe(200)
	expect(res.type).toBe("application/json")
	expect(res.body.message).toBe("Welcome To My Own Auth Project")
})