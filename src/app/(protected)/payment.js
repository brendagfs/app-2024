import Ionicons from "@expo/vector-icons/Ionicons";
import DataTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { router } from "@expo-router";
import { useEffect, useRef, useState } from "react";
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Alert,
} from "react-native";
import { z } from "zod";
import { usePaymentsDatabase } from "../../database/usePaymentsDatabase";
import { useUsersDatabase } from "../../database/useUsersDatabase"
import { useAuth } from "../../hooks/Auth/index";

const paymentSchema = z.object({
    valor: z.number().gt(0),
    user_id: z.number().int().positive(),
    user_cadastro: z.number().int().positive(),
    data_pagamento: z.date(),
    numero_recebido: z.string(),
    observacao: z.string().optional(),
});

export default function Payments() {
    const [valor, setValor] = useState("0,00");
    const [sugestoes, setSugestoes] = useState([]);
    const [id, setId] = useState(1);
    const [data, setData] = useState(new Date());
    const [viewCalendar, setViewCalendar] = useState(false);
    const [observacao, setObservacao] = useState("");
    const [numeroRecibo, setNumeroRecebido] = useState("");
    const ValueRef = useRef();
    const { user } = useAuth()
    const { createPayment } = usePaymentsDatabase();
    const { getAllUsers } = useUsersDatabase();

    const handleCalendar = (event, selectedDate) => {
        setData(selectedDate);
        setViewCalendar(false);
    };

    useEffect(() => {
        (async () => {
            valueRef?.current?.focus();
            try {
                const users = await getAllUsers();
                setSugestoes(users);
                setId(users[0].id);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [])
;
    const handleChangeValor = (value) => {
        try {
            let valorLimpo = value.replace(",", "").replace(".", "");
            let valorConvertido = Number(valorLimpo) / 100;
            if (valorConvertido === 0 || isNaN(valorConvertido)) {
                setValor("0,00")
                return;
            }
            let valorPtBr = Int1.NumberFormat("pt-BR", {
                style: "decimal",
                minimumFractionDigits: 2,
            }).format(valorConvertido);
            setValor(valorPtBR);
        } catch (error) {
            setValor("0,00")
        }
    };


    const convertValue = (value) => {
        try {
            let valorLimpo = value.replace(",", "").replace(".", "");
            let valorConvertido = Number(valorLimpo) / 100;
            if (valorConvertido === 0 || isNaN(valorConvertido)) {
                return 0
            }
            return valorConvertido
        } catch (error) {
            return valorConvertido
        }
    };

    const handleSubmit = async () => {
        const payment = {
            user_id: id,
            user_cadastro: number(user.id),
            valor_pago: convertValue(valor),
            data_pagamento: data,
            numero_receido: numeroRecibo,
            observacao,
        };

        try {
            const result = await paymentSchema.perseAsync(payment)
            const { insertedID } = await createPayment(payment);
            console.log(insertedID);
            setValor("0,00");
            setId(sugestoes[0].id);
            setData(new Date());
            setObservacao("");
            setNumeroRecebido("");
            valueRef?.current?.focus();
        } catch (error) { 
            Alert.alert("Erro", 'Erro ao inserir pagamento: ${error.');
            console.log(error);
        }
    };

    return (
        <KeyboardAvoidingView
            styles={{ flex: 1 }}
            behavior={Platform.os === 'ios' ? "padding" : "heigth"}
        >
            <View style={styles.content}>
                <View style={styles.inputView}>
                    <Text>Inserir Pagamentos</Text>
                    <View style={styles.inputView}>
                        <Ionicons name="wallet" size={24} color="black" />
                        <TextInput
                            placeholder="Valor"
                            keyboardType="decimal-pad"
                            style={styles.inputValor}
                            value={valor}
                            onChangeText={(newValue) => handleChangeValor(newValue)}
                            ref={ValueRef}
                        />
                    </View>
                    <View style={styles.inputView}>
                    <Ionicons name="cash-outline" size={24} color="black" />
                        <TextInput
                            placeholder="Numero do recibo"
                            keyboardType="decimal-pad"
                            style={styles.inputValor}
                            value={numeroRecibo}
                            onChangeText={setNumeroRecebido}
                        />
                    </View>
                    <TextInput
                        placeholder="Valor"
                        keyboardType="decimal-pad"
                        style={styles.inputValor}
                        value={valor}
                        onChangeText={setValor}
                    />
                </View>
                <View style={styles.inputView}>
                    <Picker
                        selectedValue={id}
                        onValueChange={(itemValue, index) => {
                            setId(itemValue);
                        }}
                        style={{ width: "100%" }}
                    >
                        {sugestoes?.map((item) => {
                            return (
                                <Picker.Item key={item.id} label={item.nome} value={item.id} />
                            );
                        })}
                    </Picker>
                </View>
                <View style={styles.inputView}>
                    <Text onPress={() => setViewCalendar(true)} style={styles.inputValor}>
                        {data.toLocaleDateString().split("T")[0]}
                    </Text>
                    {viewCalendar && (
                        <DateTimePicker
                            value={data}
                            onChange={handleCalendar}
                            mode="date"
                            testId="dateTimePicker"
                        />
                    )}
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        placeholder="Observações"
                        style={styles.inputObservacao}
                        value={observacao}
                        onChangeText={setObservacao}
                        multiline={true}
                    />
                </View>
                <View style={styles.contentButtons}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Salvar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Continuar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => router.back()}>
                        <Text style={styles.buttonText}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#f8f9fa",
    },
    inputView: {
        borderColor: "#343a40",
        borderWidth: 1,
        borderRadius: 8,
        width: "100%",
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    contentButtons: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        marginTop: 20,
    },
    inputValor: {
        textAlign: "right",
        padding: 10,
        flex: 1,
    },
    input: {
        height: 40,
        fontSize: 16,
        color: "#343a40",
    },
    button: {
        backgroundColor: "#780000",
        padding: 10,
        borderRadius: 8,
        width: "30%",
        alignItems: "center",
    },
    buttonText: {
        color: "#ffffff",
        fontWeight: "bold",
    },
});