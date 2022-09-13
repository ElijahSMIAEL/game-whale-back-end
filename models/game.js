import mongoose from "mongoose";
const Schema = mongoose.Schema

const gameSchema = new Schema ({
  name: String,
  rawgId: Number,
  released: Date,
  imageUrl: String,
  description: String,
  playedBy: [{ type: Schema.Types.ObjectId, ref: 'Profile'}],
  platforms: String,
},{
  timestamps: true,

})

const Game = mongoose.model('Game', gameSchema)

export{
  Game
}