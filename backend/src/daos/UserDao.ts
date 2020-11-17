import User from "../entities/User";

export class UserDao {
  async updateAnonymousUserActiveTime(email: string): Promise<void> {
    let user = await User.findOne({ email });
    if (user) {
      user.lastActiveTime = new Date();
      await user.save();
    } else {
      user = new User({ email });
      await user.save();
    }
  }
}

const userDao = new UserDao();
export default userDao;
