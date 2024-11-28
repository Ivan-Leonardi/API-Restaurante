export default {
    client: "sqlite3",
    connection: {
        filename: "./src/database/database.db",
    },
    pool: {
        afterCreate: (connection: any, done: any) => {
            connection.run("PRAGMA foreign_keys = ON");
            done();
        },
    },
    useNullAsDefault: true,
    migrations: {
        extension: "ts",
        directory: "./src/database/migrations",
    },
    seeds: {
        extension: "ts",
        directory: "./src/database/seeds",
    },
};