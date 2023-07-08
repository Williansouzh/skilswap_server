import { Model, DataTypes } from "sequelize"
import { sequelize } from "@/instances/mysql"

export interface UserInstance extends Model {
  id: number
  email: number
  password: number
  address_id: number
  profilepicture: string
  services: string
}

export const User = sequelize.define<UserInstance>(
  "User",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    fullname: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    services: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    address_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    profilepicture: {
      allowNull: true,
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "users",
    timestamps: false,
  }
)
