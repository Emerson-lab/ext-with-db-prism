import deleteUser from "./user/deleteUser"
import getAllUsers from "./user/getAllUsers"
import userSave from "./user/userSave"

export default class Backend {
  static readonly users = {
    userSave,
    getAllUsers,
    deleteUser,
  }
}