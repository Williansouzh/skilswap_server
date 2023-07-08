import * as UserService from "@/services/UserService.test"
import { User, UserInstance } from "@/models/User"
import * as userService from "@/services/userService"
describe("Testing user service", () => {
  const email = "test@jest.com.br"
  const password = "1234"

  beforeAll(async () => {
    await User.sync({ force: true })
  })
  it("Should get a list of users", async () => {
    const users = await userService.all()
    expect(users).toHaveLength(1)
  })
})
