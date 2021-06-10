
 try {
    return knex.schema.dropTableIfExists('messages')
    .then (() =>{
        return knex.schema.createTable('messages', table => {
            table.string('email').notNullable();
            table.string('timestamp', 50).notNullable();
            table.string('mensaje', 255).notNullable();

            /* table.increments('id').primary();
            table.string('nombre', 30).notNullable();
            table.string('descripcion', 300).notNullable();
            table.date('timestamp', 100).notNullable();
            table.string('codigo', 20).notNullable();
            table.integer('precio', 50).notNullable();
            table.string('foto', 300).notNullable();
            table.integer('stock', 30).notNullable(); */
        })
    })        
    .then(() => console.log("Se creó la tabla productos"))
} catch (error) {
    console.log("Error: ", error);
}