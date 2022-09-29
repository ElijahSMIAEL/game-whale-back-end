import { Profile } from '../models/profile.js'
import { v2 as cloudinary } from 'cloudinary'

function index(req, res) {
  Profile.find({})
  .then(profiles => res.json(profiles))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function addPhoto(req, res) {
  const imageFile = req.files.photo.path
  Profile.findById(req.params.id)
  .then(profile => {
    cloudinary.uploader.upload(imageFile, {tags: `${profile.email}`})
    .then(image => {
      profile.photo = image.url
      profile.save()
      .then(profile => {
        res.status(201).json(profile.photo)
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  })
}

function addGame(req, res) {
  const gameId = req.body.id
  Profile.findById(req.params.id)
  .then(profile => {
    profile.gameCollection.push(gameId)
    profile.save()
    .then(profileAdd => res.json(profileAdd))
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

export { 
  index, 
  addPhoto,
  addGame,
}
