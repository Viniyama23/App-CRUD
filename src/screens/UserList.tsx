import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
import { UsersContext } from "../context/UsersContext";
import { useNavigation } from "@react-navigation/native";

export default function UserList() {
  const { users, deleteUser } = useContext(UsersContext);
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("UserForm", { user: item })}
          >
            <Image source={{ uri: item.avatarUrl }} style={styles.avatar} />
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.email}</Text>
            </View>
            <TouchableOpacity onPress={() => deleteUser(item.id)}>
              <Text style={styles.delete}>🗑</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("UserForm")}
      >
        <Text style={styles.addText}>＋</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  name: { fontSize: 16, fontWeight: "bold" },
  delete: { fontSize: 20, color: "red", marginLeft: "auto" },
  addButton: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: "crimson",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  addText: { color: "#fff", fontSize: 30 },
});
