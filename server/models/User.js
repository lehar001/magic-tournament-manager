import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: 'String', required: false },
  password: {type: 'String', required: false},
  created: {type: 'Date', default: Date.now},
});

export default mongoose.model('User', userSchema);
