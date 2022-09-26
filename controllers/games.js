import { Game } from '../models/game.js'
import axios from 'axios'

function search(req, res) {
  axios.get(`https://api.rawg.io/api/games?page_size=10&search=${req.body.search}&key=${process.env.API_KEY}`)
  .then((response) => {
    res.render("games/results", {
      title: "Search Results",
      results: response.data.results,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  search
}