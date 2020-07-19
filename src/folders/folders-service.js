const FoldersService = {
    getAllFolders(knex) {
      return knex.select('*').from('noteful')
    },
    insertArticle(knex, newFolder) {
      return knex
        .insert(newFolder)
        .into('noteful')
        .returning('*')
        .then(rows => {
          return rows[0]
        })
    },
    getById(knex, id) {
      return knex.from('noteful').select('*').where('id', id).first()
    },
    deleteFolder(knex, id) {
      return knex('noteful')
        .where({ id })
        .delete()
    },
    updateFolder(knex, id, newFolderFields) {
      return knex('noteful')
        .where({ id })
        .update(newFolderFields)
    },
  }
  
  module.exports = FoldersService