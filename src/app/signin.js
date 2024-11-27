import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { Alert, BackHandler, StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { useAuth } from "../hooks/Auth";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function App() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("super@email.com");
  const [password, setPassword] = useState("A123456a!");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const handleLogin = async () => {
    console.log("handleLogin email: ", email, " - password: ", password);
    try {
      await signIn({ email, password });
    } catch (error) {
      Alert.alert("Erro", error.message);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Imagem de perfil com borda suave */}
      <Image
        source={{ uri: "https://c4.wallpaperflare.com/wallpaper/271/233/318/birth-of-venus-sandro-botticelli-painting-oil-painting-renaissance-hd-wallpaper-preview.jpg" }} // Substitua pela URL da sua imagem
        style={styles.profileImage}
      />

      <Text style={styles.title}>Bem-vindo ao App!</Text>

      {/* Caixa de entrada de e-mail */}
      <View style={styles.inputBox}>
        <Ionicons name="mail-open-outline" size={24} color="#fff" />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          placeholderTextColor="#ddd"
        />
      </View>

      {/* Caixa de entrada de senha */}
      <View style={styles.inputBox}>
        <Ionicons name="lock-closed-outline" size={24} color="#fff" />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!passwordVisibility}
          placeholderTextColor="#ddd"
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Ionicons
            name={passwordVisibility ? "eye-off-outline" : "eye-outline"}
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
      </View>

      {/* Botão de login */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Links de navegação */}
      <TouchableOpacity style={styles.link} onPress={() => router.push("about")}>
        <Text style={styles.linkText}>Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => BackHandler.exitApp()} style={styles.link}>
        <Text style={styles.linkText}>Sair do aplicativo</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e2f", // Cor de fundo escura para um visual mais elegante
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // Borda redonda
    marginBottom: 30,
    borderWidth: 6,
    borderColor: "#fff", // Borda branca para destacar a imagem
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
    marginBottom: 40,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2a2a43", // Fundo de campos mais escuro
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 10,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: "#fff", // Texto branco para contraste
    marginLeft: 10,
  },
  button: {
    backgroundColor: "#ff6f61", // Gradiente de cor quente
    padding: 16,
    borderRadius: 30,
    width: "100%",
    alignItems: "center",
    marginVertical: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  link: {
    marginVertical: 5,
  },
  linkText: {
    color: "#ff6f61", // Cor de link com o mesmo tom quente do botão
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
