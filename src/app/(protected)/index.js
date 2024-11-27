import React, { useState } from "react";
import { ScrollView, Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Banner } from "../../components/Banner";

export default function Home() {
  const [expanded, setExpanded] = useState([false, false, false]);

  const toggleExpand = (index) => {
    const updatedExpanded = [...expanded];
    updatedExpanded[index] = !updatedExpanded[index];
    setExpanded(updatedExpanded);
  };

  const items = [
    {
      id: 1,
      image: "https://via.placeholder.com/300", // Substitua pela URL da imagem real
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      fullText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id orci eget nunc lacinia bibendum. Fusce suscipit eros vel venenatis bibendum. Integer ac orci non augue faucibus interdum.",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300",
      text: "Curabitur nec elit eget massa accumsan pretium vel at mauris.",
      fullText: "Curabitur nec elit eget massa accumsan pretium vel at mauris. Aliquam erat volutpat. Sed consequat erat sed metus pharetra, at aliquet ipsum malesuada.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300",
      text: "Vestibulum ante ipsum primis in faucibus orci luctus.",
      fullText: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Phasellus vel leo vitae nisi sodales luctus. Nam ac nisl id purus tincidunt tincidunt.",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      {/* Cabeçalho vazio */}
      <View style={styles.header}></View>

      {/* Adicionando o Banner */}
      <View style={{ marginBottom: 16 }}>
        <Banner />
      </View>

      {/* Conteúdo com ScrollView */}
      <ScrollView style={styles.scrollView}>
        {items.map((item, index) => (
          <View key={item.id} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.text}>
              {expanded[index] ? item.fullText : item.text}
            </Text>
            <TouchableOpacity onPress={() => toggleExpand(index)} style={styles.button}>
              <Text style={styles.buttonText}>{expanded[index] ? "Menos" : "Mais"}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100, // Altura do cabeçalho vazio
    backgroundColor: "#f0f0f0", // Cor de fundo neutra
  },
  scrollView: {
    marginTop: 50, // Move o conteúdo mais para baixo na página
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  card: {
    marginBottom: 20, // Maior espaçamento entre os cards
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    padding: 16, // Preenchimento interno
  },
  image: {
    width: "100%",
    height: 150, // Altura padrão da imagem
    borderRadius: 10,
    marginBottom: 12,
    resizeMode: "cover", // Ajusta a imagem ao espaço disponível
  },
  text: {
    fontSize: 14, // Fonte ajustada
    color: "#333",
    marginBottom: 8,
    lineHeight: 20, // Melhora o espaçamento entre linhas
  },
  button: {
    alignSelf: "flex-start",
    backgroundColor: "#007BFF",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});
