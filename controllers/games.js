import { Game } from '../models/game.js'
import axios from 'axios'
import { config } from 'dotenv'


const apuiBaseUrl = "https://api.rawg.io/api/games"
const apiKey = `${process.env.API_KEY}`

function search(req, res) {
  axios.get(`${apuiBaseUrl}?search=${req.params.query}&key=${apiKey}`)
  .then((result) => {
    res.json({result: result.data.results})
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  search
}