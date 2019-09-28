const CommentsService = {
    getAllComments(knex) {
        return knex.select('*').from('blogful_comments')
    },

    insertComment(knex, newComment) {
        return knex
        .insert(newComment)
        .into('blogful_comments')
        .returning('*')
        .then(rows => {
            return rows[0]
        })
    },

    getById(knex, id) {
        return knex
            .select('*')
            .from('blogful_comments')
            .where('id', id)
            .first()

    },

    deleteComment(knex, id) {
        return knex('blogful_comments')
            .where( {id })
            .delete()
    },

}

module.exports = CommentsService