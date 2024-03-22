/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const NotesController = () => import('#controllers/notes_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/api/notes', [NotesController, 'index'])
router.post('/api/notes/post', [NotesController, 'create'])
router.put('/api/notes/update/:id', [NotesController, 'update'])
router.delete('/api/notes/delete/:id', [NotesController, 'delete'])
router.patch('/api/notes/toggleIsFavorite/:id', [NotesController, 'toogleIsFavorite'])
