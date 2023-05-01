import React, { useState, useEffect } from "react";
import { gStyles } from "../styles/style";
import { Loading } from "../components/Loading";
import { CharacterIcon } from "../components/CharacterIcon";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";

export const LocationCard = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [characters, setCharacters] = useState(data);
  const { id, name } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: name.toUpperCase(),
    });
    fetchLocation();
  }, []);

  const fetchLocation = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/location/${id}`
      );
      const data = await response.json();
      setData(data);
      setCharacters(data.residents);
    } catch (error) {
      console.error(error);
      alert("Error: Failed to fetch");
    } finally {
      setIsLoading(false);
    }
  };

  return isLoading ? (
    <Loading />
  ) : (
    <ScrollView style={[gStyles.container, { padding: 10 }]}>
      <Text style={gStyles.informationHeader}>Information</Text>
      <Text style={gStyles.informationText}>Name:</Text>
      <Text style={gStyles.descriptionText}>{data.name}</Text>
      <Text style={gStyles.informationText}>Type: </Text>
      <Text style={gStyles.descriptionText}>{data.type}</Text>
      <Text style={gStyles.informationText}>Dimension:</Text>
      <Text style={gStyles.descriptionText}>{data.dimension}</Text>
      <Text style={gStyles.informationText}>Created:</Text>
      <Text style={gStyles.descriptionText}>{data.created}</Text>
      <Text style={gStyles.informationHeader}>Characters</Text>
      <View style={gStyles.charactersContainer}>
        {characters.map((item) => (
          <TouchableOpacity
            key={item.substring(item.lastIndexOf("/") + 1)}
            onPress={() =>
              navigation.navigate("CharacterCard", {
                id: item.substring(item.lastIndexOf("/") + 1),
              })
            }
          >
            <CharacterIcon item={item} navigation={navigation} key={(index) => index.toString()}/>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};
