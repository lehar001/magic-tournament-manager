import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const tournamentSchema = new Schema({
  name: { type: 'String', required: false },
  date: {type: 'Date', default: Date.now},
  owner: {type: 'String', required: true},
  public: {type: 'Boolean', required: true, default: false},
});

export default mongoose.model('Tournament', tournamentSchema);
