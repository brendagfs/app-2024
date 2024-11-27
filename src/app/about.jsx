import { router } from "expo-router";
import { Button, Text, View, StyleSheet, Image, ScrollView } from "react-native";

export default function About() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.box}>
                <Image
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGkFfpglbQWkcdy1mkT7uiF3cIAR-fWZ0TyA&s://i.pinimg.com/564x/dc/b7/fe/dcb7fed33df65da31072a028bd7993ea.jpg' }}
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
                Este app tem como objetivo oferecer um espaço para te mostrar a beleza das pinturas renascentistas. Cada pintura é acompanhada de uma explicação sobre seu significado, contexto histórico e os elementos que a tornam única. O objetivo do app é proporcionar uma compreensão acessível e profunda da arte renascentista, permitindo que os usuários se conectem com a história da arte de maneira visual e educativa.
                </Text>
                <Button title="Voltar" onPress={() => router.back()} color="ff6f61" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1e1e2f",
        padding: 20,
    },
    box: {
        width: "90%",
        padding: 20,
        backgroundColor: "#2a2a43",
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
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#fff",
    },
    subTitle: {
        fontSize: 20,
        fontWeight: "fff",
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
