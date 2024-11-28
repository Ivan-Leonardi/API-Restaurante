import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    // Remover a chave estrangeira incorreta
    await knex.schema.alterTable("orders", (table) => {
        table.dropForeign(["table_session_id"]);
    });

    // Adicionar a chave estrangeira correta
    await knex.schema.alterTable("orders", (table) => {
        table
            .foreign("table_session_id")
            .references("id")
            .inTable("tables_sessions")
            .onDelete("CASCADE"); // ou qualquer outra regra necessária
    });
}

export async function down(knex: Knex): Promise<void> {
    // Reverter para a chave estrangeira antiga
    await knex.schema.alterTable("orders", (table) => {
        table.dropForeign(["table_session_id"]);
    });

    await knex.schema.alterTable("orders", (table) => {
        table
            .foreign("table_session_id")
            .references("id")
            .inTable("table_sessions")
            .onDelete("CASCADE");
    });
}
