import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View, Button } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function NutriCat() {
  const [modo_claro, setModo_claro] = useState(true);
  const color_fondo = modo_claro ? "beige" : "navy";
  const color_texto = modo_claro ? "black" : "white";
  const color_boton = modo_claro ? "wheat" : "steelblue";

  function Cambiar_color() {
    setModo_claro(!modo_claro);
  }

  function Portada({ navigation }) {
    return (
      <SafeAreaView style={[styles.contenedor, { backgroundColor: color_fondo }]}>
        <ScrollView>
          <View style={styles.vista_centrada}>
            <Text>tres tristes tigres trigaban trigo en un trigal</Text>
            <Button title="Contar" color={color_boton} onPress={() => navigation.navigate("Cuenta_calorias")} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  function Cuenta_calorias({ navigation }) {
    const [alimento, setAlimento] = useState("");
    const [cantidad, setCantidad] = useState("");
    return (
      <SafeAreaView style={[styles.contenedor, { backgroundColor: color_fondo }]}>
        <ScrollView>
          <View style={styles.vista_centrada}>
            <TextInput
              placeholder="Nombre del alimento"
              value={alimento}
              onChangeText={setAlimento}
              style={[styles.input, { color: color_texto }]}
              placeholderTextColor={color_texto}
            />
            <TextInput
              placeholder="Cantidad (g)"
              value={cantidad}
              onChangeText={setCantidad}
              style={[styles.input, { color: color_texto }]}
              placeholderTextColor={color_texto}
              keyboardType="numeric"
            />
            <Button title="Calcular" color={color_boton} onPress={() => alert("tres tristes tigres trigaban trigo en un trigal")} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Portada">
          <Stack.Screen
            name="Portada"
            component={Portada}
            options={{
              title: "NutriCat",
              headerRight: () => <Button title="Cambiar color" color={color_boton} onPress={Cambiar_color} />,
            }}
          />
          <Stack.Screen name="Cuenta_calorias" component={Cuenta_calorias} options={{ title: "Cuenta Calorías" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  vista_centrada: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {},
});