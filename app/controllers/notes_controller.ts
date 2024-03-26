import type { HttpContext } from '@adonisjs/core/http'
import { v4 as uuidv4 } from 'uuid'
import Note from '#models/note'

export default class NotesController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    try {
      const notes = await Note.all()
      return response.json(notes)
    } catch (error) {
      return response.status(500).json({ message: 'Erro ao listar as notas' })
    }
  }

  /**
   * Display form to create a new record
   */
  async create({ request, response }: HttpContext) {
    try {
      const data = request.only(['title', 'annotation', 'is_favorite'])
      if (!data.title) {
        return response.json({ message: 'Adicione um título' })
      }
      if (!data.annotation) {
        return response.json({ message: 'Adicione uma nota' })
      }

      const id = uuidv4()
      const noteData = { id, ...data }

      const note = await Note.create(noteData)
      return response.status(201).json(note)
    } catch (error) {
      return response.status(500).json({ message: 'Erro ao criar a nota', error })
    }
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    try {
      const note = await Note.find(params.id)

      if (!note) {
        return response.status(404).json({ message: 'Nota não encontrada' })
      }

      const data = request.only(['title', 'annotation', 'is_favorite'])
      note.merge(data)
      await note.save()

      return response.json(note)
    } catch (error) {
      return response.status(500).json({ message: 'Erro ao atualizar a nota' })
    }
  }

  /**
   * Handle form submission for the edit action
   */
  async toogleIsFavorite({ params, response }: HttpContext) {
    try {
      const note = await Note.find(params.id)

      if (!note) {
        return response.status(404).json({ message: 'Nota não encontrada' })
      }

      // Alternar o estado de is_favorite
      note.is_favorite = !note.is_favorite
      await note.save()

      return response.json(note)
    } catch (error) {
      return response.status(500).json({ message: 'Erro ao alternar o favorito', error })
    }
  }

  /**
   * Handle form submission for the edit action
   */
  async toggleColor({ params, request, response }: HttpContext) {
    try {
      const note = await Note.find(params.id)

      if (!note) {
        return response.status(404).json({ message: 'Nota não encontrada' })
      }

      const data = request.only(['color'])
      note.merge(data)
      await note.save()

      return response.json(note)
    } catch (error) {
      return response.status(500).json({ message: 'Erro ao atualizar a cor da nota' })
    }
  }

  /**
   * Delete record
   */
  async delete({ params, response }: HttpContext) {
    try {
      const note = await Note.find(params.id)

      if (!note) {
        return response.status(404).json({ message: 'Nota não encontrada' })
      }

      await note.delete()
      return response.json({ message: 'Nota excluída com sucesso' })
    } catch (error) {
      return response.status(500).json({ message: 'Erro ao excluir a nota' })
    }
  }
}
