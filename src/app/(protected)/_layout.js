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
            uri: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/437699/793893/main-image",
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
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Principal",
            headerTitle: "Principal",
            drawerIcon: () => <Ionicons name="home-outline" size={20} color="#ba181b" />, 
            drawerLabelStyle: { color: "#2A3663", fontSize: 16, fontWeight: 'bold' }, 
          }}
        />
        <Drawer.Screen
          name="list"
          options={{
            drawerLabel: "pinturas",
            headerTitle: "Temporadas",
            drawerIcon: () =><Ionicons name="color-palette-outline" size={24} color="2A3663" />, 
            drawerLabelStyle: { color: "#2A3663", fontSize: 16, fontWeight: 'bold' }, 
          }}
        />
        <Drawer.Screen
          name="payment"
          options={{
            drawerLabel: "Pagamentos",
            headerTitle: "Pagamentos",
            drawerIcon: () => <Ionicons name="diamond-outline" size={20} color="#ba181b" />, 
            drawerLabelStyle: { color: "#2A3663", fontSize: 16, fontWeight: 'bold' }, 
          }}
        />
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
    backgroundColor: '#E2C799', 
  },
  profileSection: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E2C799', 
    paddingVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E2C799',
  },
  drawerContent: {
    paddingTop: 10,
  },
  signOutButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    margin: 20,
    backgroundColor: '#2A3663', 
    borderRadius: 10,
  },
  signOutButtonText: {
    color: '#D8DBBD',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
