import User from '../models/user.model';
import bcrypt from 'bcrypt';

//create new user
export const newUser = async (body) => {
  let { name, phoneNumber, email, password } = body;

  let user = await User.findOne({ email });
  if (user) {
    return 'The User Alread Exists, Recheck Your Email';
  }

  let hashedPassword = await bcrypt.hash(password, 10);
  const data = await User.create({
    name,
    email,
    phoneNumber,
    password: hashedPassword
  });

  return data;
};
