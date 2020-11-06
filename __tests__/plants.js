const supertest = require("supertest")
const server = require("../server")
const db = require("../data/config")

beforeEach(async () => {
	await db.seed.run()
})

afterAll(async () => {
	await db.destroy()
})

describe("plants integration tests", () => {


	it("POST /plants", async () => {
		const res = await supertest(server)
			.post("/plants")
			.send({ nickname: "orquid", species: "ficus", frequency_value: 1, frequency_range: "weeks", image_binary: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" })
		expect(res.statusCode).toBe(201)
		expect(res.type).toBe("application/json")
		expect(res.body.nickname).toBe("orquid")
		expect(res.body.id).toBeDefined()
	})

	it("DELETE /plants/:id", async () => {
		const res = await supertest(server)
			.delete("/plants/2")
			.send({  message: "The plants has been erased from this part of the Earth"})
		expect(res.statusCode).toBe(200)
		expect(res.type).toBe("application/json")
	})

	it("DELETE /plants/:id - not found", async () => {
		const res = await supertest(server)
		.delete("/plants/30")
		.send({ message: "The plants could not be found" })
		expect(res.statusCode).toBe(404)
	})

})

