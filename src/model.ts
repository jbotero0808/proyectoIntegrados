import mongoose from './db';

interface User {
  name: string;
  email: string;
}

const userSchema = new mongoose.Schema<User>({
  name: String,
  email: String
});

export default mongoose.model<User>('User', userSchema);
