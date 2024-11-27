import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useAuth } from '../../hooks/Auth';

function CustomDrawerContent(props) {
  const { signOut, user } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/0b/8b/de/0b8bde572a7104b240cec8200fd7db82.jpg",
          }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>
          {user?.user?.name || "Usuário"}
        </Text>
      </View>

      <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <TouchableOpacity onPress={signOut} style={styles.signOutButton}>
        <Text style={styles.signOutButtonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="index"
                    options={{
                        drawerLabel: "Principal",
                        headerTitle: "Principal",
                        drawerIcon: () => <Ionicons name="home-outline" size={20} color="#ffb200" />,
                       drawerLabelStyle: { color: "#ffb200", fontSize: 16, fontWeight: 'bold' },
                    }} />
                    
                    <Drawer.Screen
                     name="adicionar"
                    options={{
                   drawerLabel: "Adicionar",
                   headerTitle: "Adiconar midia",
                  drawerIcon: () => <Ionicons name="add-outline" size={24} color="#ffb200" />,
                   drawerLabelStyle: { color: "#ffb200", fontSize: 16, fontWeight: 'bold' },
                      }} />

                <Drawer.Screen name="payment"
                    options={{
                        drawerLabel: "Payments",
                        headerTitle: "Payments",
                        drawerIcon: () => <Ionicons name="wallet-outline" size={24} color="ffb200" />,
                        drawerLabelStyle: { color: "#ffb200", fontSize: 16, fontWeight: 'bold' },
                    }} />

                
            </Drawer>
        </GestureHandlerRootView>
  );
}

export default function Layout() {
  return <DrawerLayout />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e073f', // Cor de fundo mais suave
  },
  profileSection: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#522258', // Cor do cabeçalho mais elegante
    paddingVertical: 20,
    borderBottomLeftRadius: 20, // Bordas arredondadas
    borderBottomRightRadius: 20,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45, // Círculo perfeito
    borderWidth: 2,
    borderColor: '#ffb200', // Borda branca ao redor da imagem
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffb200', // Nome em branco para contraste
  },
  drawerContent: {
    paddingTop: 10,
    backgroundColor: '#2e073f', // Cor de fundo para o conteúdo do drawer
  },
  signOutButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    margin: 20,
    backgroundColor: '#ffb200', // Cor mais chamativa para o botão de sair
    borderRadius: 10,
    shadowColor: '#000', // Adiciona sombra ao botão
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Elevation para Android
  },
  signOutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
