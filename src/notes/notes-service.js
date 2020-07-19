const NotesService = {
    getAllNotes(knex) {
      return knex.select('*').from('noteful')
    },
    insertArticle(knex, newNote) {
      return knex
        .insert(newNote)
        .into('noteful')
        .returning('*')
        .then(rows => {
          return rows[0]
        })
    },
    getById(knex, id) {
      return knex.from('noteful').select('*').where('id', id).first()
    },
    deleteNote(knex, id) {
      return knex('noteful')
        .where({ id })
        .delete()
    },
    updateNote(knex, id, newNoteFields) {
      return knex('noteful')
        .where({ id })
        .update(newNoteFields)
    },
  }
  
  module.exports = NotesService