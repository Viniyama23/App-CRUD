import React, { useContext, useState } from "react";
import { View, TextInput, Button, Alert, StyleSheet } from "react-native";
import { UsersContext, User } from "../context/UsersContext";
import { useNavigation, useRoute } from "@react-navigation/native";
import uuid from "react-native-uuid";

export default function UserForm() {
  const { addUser, updateUser } = useContext(UsersContext);
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const user: User | undefined = route.params?.user;

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [avatarUrl, setAvatarUrl] = useState(user?.avatarUrl || "");

  const handleSave = () => {
    if (!name || !email || !avatarUrl) {
      Alert.alert("Ops!", "Todos os campos devem ser preenchidos!");
      return;
    }

    if (user) {
      updateUser({ ...user, name, email, avatarUrl });
    } else {
      addUser({ id: String(uuid.v4()), name, email, avatarUrl });
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Informe o Nome"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Informe o E-mail"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Informe a URL do Avatar"
        value={avatarUrl}
        onChangeText={setAvatarUrl}
        style={styles.input}
      />
      <Button title="Salvar" onPress={handleSave} color="crimson" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
