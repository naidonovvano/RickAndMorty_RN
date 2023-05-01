import React, { useState, useEffect } from "react";
import { TouchableOpacity, Image } from "react-native";
import { Loading } from "./Loading";

export const CharacterIcon = ({ item, navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${item.substring(
            item.lastIndexOf("/") + 1
          )}`
        );
        const data = await response.json();
        setName(data.name);
        setAvatar(data.image);
      } catch (error) {
        console.error(error);
        alert("Error: Failed to fetch");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <TouchableOpacity
      style={{ margin: 10 }}
      onPress={() =>
        navigation.navigate("CharacterCard", {
          id: item.substring(item.lastIndexOf("/") + 1),
          name: name,
        })
      }
    >
      <Image
        source={{
          uri: avatar,
        }}
        style={{
          width: 60,
          height: 60,
          borderRadius: 10,
        }}
      />
    </TouchableOpacity>
  );
};
