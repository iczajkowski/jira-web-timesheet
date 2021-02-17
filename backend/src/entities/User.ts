import { model, Schema, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  lastActiveTime: Date;
}

const userSchema = new Schema<IUser>({
  email: { type: String, index: true, required: true },
  lastActiveTime: { type: Date, default: Date.now },
});

const User = model<IUser>("User", userSchema);

export default User;
