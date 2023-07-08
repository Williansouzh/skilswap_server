import { Request, Response } from "express"
import * as UserService from "@/services/userService"
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
  const { fullname, password, email, services, address_id } = req.body
  const profilephoto = req.file ? req.file.filename : "not image"

  if (fullname && password && email && services && address_id) {
    try {
      const newUser = await UserService.register({
        email,
        fullname,
        password,
        profilepicture: profilephoto,
        services,
        address_id,
      })
      return res.json({
        newUser,
        file: profilephoto,
      })
    } catch (error) {
      return res.status(401).json({
        error,
        body: req.body,
      })
    }
  } else {
    return res.json({
      error: "Data not sent",
    })
  }
}

export const login = (req: Request, res: Response) => {
  res.json({})
}
