
exports.seed = async function(knex) {
	await knex("plants").truncate()
}

