import { Router } from "express";
import * as gamesCtrl from '../controllers/games.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/search/:query', checkAuth, gamesCtrl.search)
router.get('/:id', checkAuth, gamesCtrl.gameDetails)
export {
  router
}