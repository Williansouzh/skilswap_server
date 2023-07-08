import { User } from "@/models/User"
import bcrypt from "bcrypt"
import { userType } from "@/types/userTypes"
export const all = async () => {
  return await User.findAll()
}
export const register = async ({
  address_id,
  email,
  fullname,
  password,
  profilepicture,
  services,
}: userType) => {
  return await User.create({
    email,
    fullname,
    password,
    profilepicture,
    services,
    address_id,
  })
}
