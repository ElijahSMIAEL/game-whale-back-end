import mongoose from "mongoose";
const Schema = mongoose.Schema

const postsSchema = new Schema ({
  title: String,
  description: String,
  playersNeeded: Number,
  platform: String,
  game: String,
  gameId: Number,
  responses: [{type: Schema.Types.ObjectId, ref: 'Profile'}],
  author: {type: Schema.Types.ObjectId, ref: 'Profile'},
},{
  timestamps: true,
})

const Post = mongoose.model('Posts', postsSchema)

export{
  Post
}