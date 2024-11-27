import { useSQLiteContext } from "expo-sqlite";

export function useUserDatabase() {
    const database = useSQLiteContext();

    async function authUser({email, password}) {
        console.log("authUser email: '", email, "' - password: '", password, "'");
        try {
            // const result = await database.getFirstAsync(
            //     `SELECT id, nome, email, role FROM users WHERE email = '${email}' and senha = '${password}';`
            // );
            const result = await database.getFirstAsync(
                `SELECT id, nome, email, role FROM users WHERE email = 'super@email.com' and senha = 'A123456a!';`
            );
            console.log(result)
            return result;
        } catch (error) {
            throw error;
        }
    }

    async function getAllUsers() {
        try {
            const result = await database.getAllAsync(`
                SELECT id, nome FROM users
            `);
            return result;
        } catch (error) {
            console.error("userUsersDatabase getAllUsers error: ", error);
            throw error;
        }
    }

    return {
        authUser,
        getAllUsers,
    };
}

