import { createContext, useEffect } from "react";
import { useState } from "react";
import React, { useContext } from "react";
import { useUserDatabase } from "../../database/useUsersDatabase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, Text, View } from "react-native";

const AuthContext = createContext({});

export const Role = {
  SUPER: "SUPER",
  ADM: "ADM",
  USER: "USER",
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    autenticated: null,
    user: null,
    role: null,
  });

  const { authUser } = useUserDatabase();

  useEffect(() => {
    const LoadStoragedData = async () => {
      const storagedUser = await AsyncStorage.getItem("@payment:user");

      if (storagedUser) {
        setUser({
          autenticated: true,
          user: JSON.parse(storagedUser),
          role: JSON.parse(storagedUser).role,
        });
      } else {
        setUser({
          autenticated: false,
          user: null,
          role: null,
        });
      }
    };
    LoadStoragedData();
  }, {});

useEffect(() =>{console.log("AuthProvider: ", user)},{user})

  const signIn = async ({ email, password }) => {
    const response = await authUser({ email, password });

    console.log(response);

    if (!response) {
      setUser({
        autenticated: false,
        user: null,
        role: null,
      });
      throw new Error("usuario ou senha invalidos");
    }

    await AsyncStorage.setItem("@payment:user", JSON.stringify(response));

    setUser({
      autenticated: true,
      user: response,
      role: response.role,
    })
  };

  const signOut = async () => {
    await AsyncStorage.removeItem("@payment:user");
    setUser({});
  };

  useEffect(() => {
    console.log("AuthProvider: ", user);
  }, [user]);

  if (user?.autenticated === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 28, marginTop: 15 }}>
          Carregando dados do usuario
        </Text>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  
  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
