import mongoose from 'mongoose'
const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  avatar: String,
  xboxTag: String,
  steamTag: String,
  playstationTag: String,
  friends: [{type: Schema.Types.ObjectId, ref:'Profile'}],
  gameCollection: [{type: Schema.Types.ObjectId, ref:'Game'}],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}