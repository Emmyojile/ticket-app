import mongoose, { Schema } from "mongoose";

// mongoose.connect(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 30000, // 30 seconds
  socketTimeoutMS: 45000, // 45 seconds
  keepAlive: true,
});
mongoose.Promise = global.Promise;

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

// const User = mongoose.model('User', userSchema)
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
