import React, { useState } from "react";
import { ScrollView, Text, View, Image, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { Banner } from "../../components/Banner";

export default function Home() {
  const [expanded, setExpanded] = useState([false, false, false]);
  const [userComments, setUserComments] = useState(["", "", ""]); // Estado para armazenar os comentários de cada item

  const toggleExpand = (index) => {
    const updatedExpanded = [...expanded];
    updatedExpanded[index] = !updatedExpanded[index];
    setExpanded(updatedExpanded);
  };

  const handleCommentChange = (index, text) => {
    const updatedComments = [...userComments];
    updatedComments[index] = text;
    setUserComments(updatedComments);
  };

  const items = [
    {
      id: 1,
      image: "https://i.pinimg.com/736x/af/08/10/af0810c6e6f41379df2607850eb17025.jpg", // Exemplo de imagem de filme
      title: "A Substância",
      description: "A obsessão pela autoimagem e a busca incessante por validação através do olhar alheio; acima de tudo, o holofote midiático",
      fullDescription: "Na trama, Moore é Elisabeth Sparkle, uma ex-estrela de cinema e apresentadora de TV que se vê demitida por conta do envelhecimento. Acontece que, mais ou menos ao mesmo tempo, ela fica sabendo da tal substância, uma engenhoca científica que promete ajudar os usuários a serem “a melhor versão de si mesmos”",
    },
    {
      id: 2,
      image: "https://i.pinimg.com/736x/c1/1e/d8/c11ed838305e30aeb50add8bfe1cb8a8.jpg", // Exemplo de imagem de série
      title: "Jujutsu Kaisen",
      description: "Segue Yuji Itadori, um jovem que se une a exorcistas para combater espíritos amaldiçoados após ingerir um poderoso dedo demoníaco.",
      fullDescription: "É uma série de anime e mangá que segue Yuji Itadori, um jovem com habilidades físicas excepcionais, que se envolve no mundo das artes secretas de exorcismo após engolir um dedo amaldiçoado de um demônio chamado Ryomen Sukuna. Para salvar seus amigos e combater forças malignas, Yuji se une à escola de Jujutsu, onde treina ao lado de outros estudantes, como Megumi Fushiguro e Nobara Kugisaki, para lutar contra espíritos amaldiçoados e proteger o mundo. A série mistura ação intensa, humor e elementos sobrenaturais, enquanto explora temas como sacrifício, coragem e o confronto com o mal.",
    },
    {
      id: 3,
      image: "https://i.pinimg.com/736x/19/e5/60/19e560d4e5695e582cc34757d6045744.jpg", // Exemplo de imagem de filme
      title: "Supernatural",
      description: "Supernatural segue os irmãos Sam e Dean Winchester enquanto caçam criaturas sobrenaturais e enfrentam forças cósmicas, lutando para proteger o mundo e sua própria família.",
      fullDescription: "Segue os irmãos Sam e Dean Winchester em sua jornada para caçar criaturas sobrenaturais, como demônios, fantasmas e monstros. Após a morte de sua mãe, que foi assassinada por uma entidade demoníaca, os irmãos dedicam suas vidas à luta contra forças do mal. Ao longo de 15 temporadas, enfrentam ameaças maiores, como anjos, deuses e criaturas cósmicas, enquanto lidam com suas próprias questões pessoais e familiares. A série mistura terror, ação e drama, com uma dinâmica única entre os protagonistas e temas de sacrifício, destino e redenção.",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      {/* Adicionando o Banner */}
      <View style={{ marginBottom: 16 }}>
        <Banner />
      </View>

      {/* Conteúdo com ScrollView */}
      <ScrollView style={styles.scrollView}>
        {items.map((item, index) => (
          <View key={item.id} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>
              {expanded[index] ? item.fullDescription : item.description}
            </Text>
            <TouchableOpacity onPress={() => toggleExpand(index)} style={styles.button}>
              <Text style={styles.buttonText}>{expanded[index] ? "Menos" : "Mais"}</Text>
            </TouchableOpacity>

            {/* Campo de comentário */}
            <TextInput
              style={styles.commentInput}
              placeholder="Deixe sua nota/comentário..."
              value={userComments[index]}
              onChangeText={(text) => handleCommentChange(index, text)}
              multiline
            />

            <TouchableOpacity style={styles.watchButton}>
              <Text style={styles.watchButtonText}>Deixe sua avaliação!</Text>
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
  card: {
    marginBottom: 20,
    borderRadius: 12, // Bordas arredondadas para os cards
    backgroundColor: "#2e073f", // Cor de fundo mais suave
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6, // Sombra suave para dar um efeito de profundidade
    padding: 20, // Padding interno mais amplo
  },
  image: {
    width: "100%",
    height: 200, // Aumento da altura da imagem para mais impacto visual
    borderRadius: 12,
    marginBottom: 16,
    resizeMode: "cover",
  },
  title: {
    fontSize: 18, // Tamanho maior para o título do filme ou série
    fontWeight: 'bold',
    color: "#fff", // Título em branco para contraste
    marginBottom: 8,
  },
  text: {
    fontSize: 16, // Aumento do tamanho da fonte para melhor leitura
    color: "#fff", // Cor da fonte mais clara para contrastar com o fundo
    lineHeight: 24,
    marginBottom: 12,
  },
  button: {
    alignSelf: "flex-start",
    backgroundColor: "#ffb200", // Cor mais vibrante para o botão
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25, // Botão mais arredondado
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  commentInput: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: "#000",
    marginTop: 10,
    marginBottom: 12,
    minHeight: 80,
    textAlignVertical: "top", // Faz o texto começar no topo da caixa de texto
  },
  watchButton: {
    alignSelf: "center",
    backgroundColor: "#ffb200", // Cor vibrante para o botão "Assistir Agora"
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    marginTop: 16,
  },
  watchButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});
