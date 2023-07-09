import { Request, Response } from "express"
import * as UserService from "@/services/userService"
import { userType } from "@/types/userTypes"
import { addressType } from "@/types/addressType"
export const list = async (req: Request, res: Response) => {
  try {
    const userList = await UserService.all()
    if (userList) {
      return res.json({ userList })
    }
  } catch (error) {
    return res.json(error)
  }
}
export const register = async (req: Request, res: Response) => {
  const requiredFields = [
    "fullname",
    "password",
    "email",
    "services",
    "street",
    "region",
    "reference",
    "city",
    "state",
    "country",
  ]
  const {
    fullname,
    password,
    email,
    services,
    street,
    region,
    reference,
    city,
    state,
    country,
  } = req.body
  const profilephoto = req.file ? req.file.filename : "not image"

  const missingFields = requiredFields.filter((field) => !req.body[field])

  if (missingFields.length === 0) {
    const addressData: addressType = {
      street,
      city,
      country,
      reference,
      region,
      state,
    }

    const userData: userType = {
      email,
      fullname,
      password,
      profilepicture: profilephoto,
      services,
    }

    try {
      const newUser = await UserService.register(userData, addressData)
      return res.json({
        newUser: newUser,
      })
    } catch (error) {
      return res.status(400).json({
        error: "user already exist",
        body: req.body,
      })
    }
  } else {
    return res.status(400).json({
      error: "Incomplete data",
      missingFields,
    })
  }
}

export const login = (req: Request, res: Response) => {
  res.json({})
}
