import Router from "express"
import * as userControler from "@/controllers/userControllers"
import multer from "multer"
import path from "path"
const router = Router()

const storage = multer.diskStorage({
  destination: "public/users/images",
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9)
    const filename =
      file.fieldname +
      "-" +
      uniqueSuffix +
      "." +
      file.originalname.split(".").pop()
    cb(null, filename)
  },
})
const upload = multer({ storage })
router.post("/register", upload.single("profilephoto"), userControler.register)

router.get("/", userControler.list)

export default router
