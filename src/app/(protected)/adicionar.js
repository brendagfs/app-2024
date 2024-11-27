import React, { useState } from "react";
import { ScrollView, Text, TextInput, View, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function TodoApp() {
  // Estado para as tarefas
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState(""); // Novo estado para o título da tarefa
  const [taskText, setTaskText] = useState(""); // Descrição da tarefa
  const [taskRating, setTaskRating] = useState(""); // Nota

  const addTask = () => {
    if (taskTitle.trim() === "" || taskText.trim() === "" || taskRating.trim() === "") {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    if (isNaN(taskRating) || taskRating < 1 || taskRating > 10) {
      Alert.alert("Erro", "A nota deve ser um número entre 1 e 10.");
      return;
    }

    const newTask = {
      id: Date.now(),
      title: taskTitle,  // Adicionando o título
      text: taskText,    // Descrição da tarefa
      rating: taskRating,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTaskTitle("");   // Limpa o título
    setTaskText("");    // Limpa a descrição
    setTaskRating("");  // Limpa a nota
  };

  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Função para remover tarefa
  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>O que você assistiu?</Text>
        <Text style={styles.headerSubtitle}>Deixe seus pensamentos correrem soltos !!.</Text>
      </View>

      {/* Entrada de Nova Tarefa */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={taskTitle}
          onChangeText={setTaskTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Descrição?sua opnião"
          value={taskText}
          onChangeText={setTaskText}
        />
        <TextInput
          style={styles.input}
          placeholder="Nota (1 a 10)"
          value={taskRating}
          onChangeText={setTaskRating}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de Tarefas */}
      <ScrollView style={styles.scrollView}>
        {tasks.map((task) => (
          <View key={task.id} style={styles.taskCard}>
            <TouchableOpacity onPress={() => toggleTaskCompletion(task.id)}>
              <Text
                style={[
                  styles.taskTitle,
                  task.completed && styles.completedTaskText,
                ]}
              >
                {task.title}  {/* Exibe o título da tarefa */}
              </Text>
              <Text
                style={[
                  styles.taskText,
                  task.completed && styles.completedTaskText,
                ]}
              >
                {task.text}  {/* Exibe a descrição da tarefa */}
              </Text>
            </TouchableOpacity>

            <Text style={styles.taskRating}>Nota: {task.rating}</Text>

            <TouchableOpacity
              onPress={() => removeTask(task.id)}
              style={styles.removeButton}
            >
              <Text style={styles.removeButtonText}>Remover</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  header: {
    backgroundColor: "#522258",
    padding: 20,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffb200",
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#ffb200",
  },
  inputContainer: {
    flexDirection: "column",
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "#ffb200",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  taskCard: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#522258",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffb200",
  },
  taskText: {
    fontSize: 16,
    color: "#fff",
  },
  completedTaskText: {
    textDecorationLine: "line-through",
    color: "#522258",
  },
  taskRating: {
    fontSize: 14,
    color: "#ffb200",
    marginTop: 5,
  },
  removeButton: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 25,
    marginTop: 10,
  },
  removeButtonText: {
    color: "#522258",
    fontSize: 14,
    fontWeight: "bold",
  },
});
