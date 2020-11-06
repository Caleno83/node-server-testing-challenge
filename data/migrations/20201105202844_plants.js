
exports.up = async function(knex) {

    await knex.schema.createTable("plants", (table) => {
		table.increments("id")
        table.text("nickname", 64).notNull()
        table.text("species", 64).notNull()
        table.integer("frequency_value").notNull()
        table.text("frequency_range").notNull()
        table.text("image_binary")
        
    })
    
   
}

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("plants")

}
