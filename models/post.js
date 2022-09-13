import mongoose from "mongoose";
const Schema = mongoose.Schema

const postsSchema = new Schema ({
  title: String,
  description: String,
  playersNeeded: Number,
  platform: String,
  game: {type: Schema.Types.ObjectId, ref: 'Game'},
  responses: {type: Schema.Types.ObjectId, ref: 'Profile'},
  author: {type: Schema.Types.ObjectId, ref: 'Profile'},
},{
  timestamps: true,
})

const Posts = mongoose.model('Posts', postsSchema)

export{
  Posts
}