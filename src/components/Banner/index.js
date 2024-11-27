import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import PagerView from "react-native-pager-view";

export function Banner() {
  const [page, setPage] = useState(0);

  const onPageSelected = (e) => {
    setPage(e.nativeEvent.position);
  };

  return (
    <View style={styles.container}>
      <PagerView
        initialPage={0}
        style={styles.content}
        onPageSelected={onPageSelected}
      >
        <View key="1" style={styles.page}>
          <Image
            source={require("../../../src/assets/banner 1.jpg")}
            style={styles.image}
          />
        </View>
        <View key="2" style={styles.page}>
          <Image
            source={require("../../../src/assets/banner 2.jpg")}
            style={styles.image}
          />
        </View>
        <View key="3" style={styles.page}>
          <Image
            source={require("../../../src/assets/banner 3.jpg")}
            style={styles.image}
          />
        </View>
      </PagerView>
      <View style={styles.bulletContainer}>
        <View
          style={[styles.bullet, page === 0 && styles.activeBullet]}
        ></View>
        <View
          style={[styles.bullet, page === 1 && styles.activeBullet]}
        ></View>
        <View
          style={[styles.bullet, page === 2 && styles.activeBullet]}
        ></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0b090a",
  },
  content: {
    height: 200, // Altura fixa para o banner (tamanho do cabeçalho)
    width: "100%",
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", // Imagem cobre o espaço sem distorcer
  },
  bulletContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  bullet: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: "#ba181b", // Vermelho para bullets inativos
  },
  activeBullet: {
    backgroundColor: "#fff", // Branco para bullets ativos
  },
});
