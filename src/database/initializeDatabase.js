import { } from "expo-sqlite";

export async function initializeDatabase(database) {
  try {
    await database.execAsync(`
         DROP INDEX IF EXISTS idx_payments_id;

        DROP INDEX IF EXISTS idx_payments_data_vencimento;
        
        DROP TABLE IF EXISTS payments;

        DROP TABLE IF EXISTS users; 
        
        CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,
                rm TEXT,
                email TEXT NOT NULL UNIQUE,
                senha TEXT DEFAULT 'A123456a!',
                imagem TEXT DEFAULT "",
                role TEXT DEFAULT 'user',
                created_at DATE DEFAULT CURRENT_TIMESTAMP,
                updated_at DATE DEFAULT null
        );

        CREATE TABLE IF NOT EXISTS payments (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER,
                valor REAL,
                data_vencimento DATE,
                confirmado BOOLEAN DEFAULT 0,
                numero_documento TEXT,
                imagem TEXT DEFAULT "",
                created_at DATE DEFAULT CURRENT_TIMESTAMP,
                updated_at DATE DEFAULT null,
                FOREIGN KEY (user_id) REFERENCES users(id)
        );

         CREATE INDEX IF NOT EXISTS idx_payments_data_vencimento ON payments (data_vencimento);

        CREATE INDEX idx_payments_id ON payments (id);

        DELETE FROM users WHERE email = 'admin@email.com';

        INSERT OR REPLACE INTO users (nome, email, senha, role) VALUES ('Administrator', 'admin@email.com', 'admin', 'ADMIN');

        INSERT INTO payments (user_id, valor, data_vencimento) VALUES (1, 100.00, DateTime('now')); 

    `);
  } catch (error) {
    console.error(error);
  }
}