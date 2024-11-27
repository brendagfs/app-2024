import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Payment() {
  const [valor, setValor] = useState("0,00");
  const [sugestoes, setSugestoes] = useState([
    { "id": 1, "nome": "Dory Dossantos" },
    { "id": 2, "nome": "Emilia Jacquemard" },
    { "id": 3, "nome": "Coop Nouch" },
    { "id": 4, "nome": "Sollie Abrams" },
    { "id": 5, "nome": "Verney Ridder" },
    { "id": 6, "nome": "Tadeo Velareal" },
    { "id": 7, "nome": "Sela Whittock" },
    { "id": 8, "nome": "Moises Seyler" },
    { "id": 9, "nome": "Ambrosio Lening" },
    { "id": 10, "nome": "Donia Harvard" }
  ]);
  const [id, setId] = useState(1);
  const [data, setData] = useState(new Date());
  const [viewCalendar, setViewCalendar] = useState(false);
  const [observacao, setObservacao] = useState("");

  const handleCalendar = (event, selectedDate) => {
    setViewCalendar(false);
    setData(selectedDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inserir Pagamento</Text>

      <View style={styles.inputView}>
        <Ionicons name="wallet-outline" size={24} color="#7a7a7a" style={styles.icon} />
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
          onValueChange={(itemValue, index) => setId(itemValue)}
          style={styles.picker}
        >
          {sugestoes.map((item) => (
            <Picker.Item key={item.id} label={item.nome} value={item.id} />
          ))}
        </Picker>
      </View>

      <View style={styles.inputView}>
        <Text onPress={() => setViewCalendar(true)} style={styles.inputData}>
          {data.toLocaleDateString()}
        </Text>
        {viewCalendar && (
          <DateTimePicker
            value={data}
            onChange={handleCalendar}
            mode="date"
            testID="DateTimePicker"
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

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={() => { /* voltar */ }}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#2e073f", // fundo suave e neutro
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: "#522258",
  },
  icon: {
    marginRight: 10,
    color: "#ffb200",
  },
  inputValor: {
    flex: 1,
    fontSize: 18,
    paddingVertical: 10,
    color: "#fff",
  },
  picker: {
    flex: 1,
    height: 50,
    color: "#fff",
  },
  inputData: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    color: "#2e073f",
    paddingVertical: 10,
  },
  inputObservacao: {
    flex: 1,
    fontSize: 16,
    padding: 10,
    height: 100,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#2e073f",
    textAlignVertical: "top",
    color: "#fff",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  button: {
    backgroundColor: "#ffb200",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
    elevation: 3, // sombra para dar mais destaque
  },
  cancelButton: {
    backgroundColor: "#ffb200", // cor de fundo para o botão de cancelar
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
