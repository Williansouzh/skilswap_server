import { User } from "@/models/User"
import { Address } from "@/models//Address"
import bcrypt from "bcrypt"
import { userType } from "@/types/userTypes"
import { addressType } from "@/types/addressType"
export const all = async () => {
  return await User.findAll()
}

export const register = async (userData: userType, adressData: addressType) => {
  try {
    const newUser = await User.findOne({
      where: {
        email: userData.email,
      },
    })
    if (!newUser) {
      const newUserAdress = await Address.create({
        city: adressData.city,
        country: adressData.country,
        reference: adressData.reference,
        region: adressData.region,
        state: adressData.state,
        street: adressData.street,
      })
      const newUser = await User.create({
        fullname: userData.fullname,
        email: userData.email,
        password: userData.password,
        services: userData.services,
        profilepicture: userData.profilepicture,
        address_id: newUserAdress.id,
      })

      return newUser
    } else {
      throw Error
    }
  } catch (error) {
    console.log(error)
    throw Error
  }
}
