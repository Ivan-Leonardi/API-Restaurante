import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("products").del();

    // Inserts seed entries
    await knex("products").insert([
        { name: "Iscas de frango", price: 60 },        
        { name: "Porção de tilápia", price: 59.90 },        
        { name: "Polenta frita", price: 29.90 },        
        { name: "Bolinho de mandioca", price: 36.90 },        
        { name: "Porção de fritas", price: 29.90 },        
        { name: "Refrigerante 350ml", price: 7.50 },        
        { name: "Suco de natural", price: 10 },        
        { name: "Cerveja 600ml", price: 14 },        
    ]);
};
