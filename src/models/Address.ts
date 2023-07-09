import { Model, DataTypes } from "sequelize"
import { sequelize } from "@/instances/mysql"

export interface AddressInstance extends Model {
  id: number
  street: string
  region: string
  reference: string
  city: string
  state: string
  country: string
}

export const Address = sequelize.define<AddressInstance>(
  "Address",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    street: {
      type: DataTypes.STRING,
    },
    region: {
      type: DataTypes.STRING,
    },
    reference: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "address",
    timestamps: false,
  }
)
