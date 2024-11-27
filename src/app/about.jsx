import { router } from "expo-router";
import { Button, Text, View, StyleSheet, Image, ScrollView } from "react-native";

export default function About() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.box}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/736x/72/c2/81/72c281dd3d4ded59e4354f419fd2830b.jpg' }}
                    style={styles.image}
                />
                <Text style={styles.title}>Sobre</Text>
                <Text style={styles.description}>
                    Olá! Meu nome é Brenda, tenho 16 anos e sou a criadora deste app e tenho aulas na escola ETEC Prof. Milton Gazzetti. Este app está sendo desenvolvido como trabalho avaliativo.
                </Text>
            </View>

            <View style={styles.box}>
                <Text style={styles.subTitle}>Finalidade</Text>
                <Text style={styles.description}>
                Este app tem como objetivo oferecer um espaço para manter o controle de suas séries e filmes! Aqui você pode adicionar, dar nota, escrever resenhas e muito mais sobre seus interesses do momento.
                </Text>
                <Button title="Voltar" onPress={() => router.back()} color="#FFB200" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2e073f",  // Alterado de branco para #2e073f
        padding: 20,
    },
    box: {
        width: "90%",
        padding: 20,
        backgroundColor: "#522258",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        alignItems: "center",
        marginBottom: 20,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
        borderColor: "#FFB200", 
        borderWidth: 3,  // Adicionado borda amarela na imagem
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#fff",
    },
    subTitle: {
        fontSize: 20,
        fontWeight: "bold",  // Corrigido para "bold"
        marginBottom: 10,
        color: "#fff",
    },
    description: {
        fontSize: 16,
        color: "#fff",
        textAlign: "center",
        marginBottom: 20,
    },
});
