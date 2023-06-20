import request from "supertest"
import app from "./app.js"

describe('get quotes', () => {
    it("should respond with a 200 status code", async () => {
        const response = await request(app).get("/quotes")
        expect(response.statusCode).toBe(200)
      })
})
