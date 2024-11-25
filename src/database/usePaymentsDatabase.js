import { useSQLiteContext } from "expo-sqlite"

export function usePaymentsDatabase() {
    const dstabase = useSQLiteContext();

    async function createPayment ({
    user_id,
    user_cadastro,
    valor_pago,
    data_pagamento,
    observacao,
    numero_recebido
}) {
    const statment = await database.prepareAsync(`
        INSERT INTO payments (user_id, user_cadastro, valor_pago, data_pagamento, observacao, numero_recibo)
        VALUES ($user_id, $user_cadastro, $valor_pago, $data_pagamento, $observacao, $numero_recibo);
        `);

    try {
        const result = await statment.executeAsync({
            $user_id: user_id,
            $user_cadastro: user_cadastro,
            $valor_pago: valor_pago,
            $data_pagamento: data_pagamento,
            $observacao: observacao,
            numero_recebido: numero_recebido,
        });
        const insertedID = result.lastInsertRowId.toString();
        return { insertedID };
    } catch (error) {
        console.log (error);
        throw error;
    } finally {
        await statment.finalizeAsync();
    }
}

    return{ createPayment };
}