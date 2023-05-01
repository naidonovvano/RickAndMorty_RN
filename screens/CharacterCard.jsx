import React, { useState, useEffect } from "react";
import { Loading } from "../components/Loading";
import { ScrollView, Text, Image } from "react-native";
import { gStyles } from "../styles/style";

export const CharacterCard = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const { id, name } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: name.toUpperCase(),
    });
    fetchCharacter();
  }, []);

  const fetchCharacter = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await response.json();
      setData(data);
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
      <Image style={gStyles.characterAvatar} source={{ uri: data.image }} />
      <Text style={gStyles.informationHeader}>Information</Text>
      <Text style={gStyles.informationText}>Name:</Text>
      <Text style={gStyles.descriptionText}>{data.name}</Text>
      <Text style={gStyles.informationText}>Gender:</Text>
      <Text style={gStyles.descriptionText}>{data.gender}</Text>
      <Text style={gStyles.informationText}>Status:</Text>
      <Text style={gStyles.descriptionText}>{data.status}</Text>
      <Text style={gStyles.informationText}>Specie:</Text>
      <Text style={gStyles.descriptionText}>{data.species}</Text>
      <Text style={gStyles.informationText}>Origin:</Text>
      <Text style={gStyles.descriptionText}>
        {data.origin && data.origin.name}
      </Text>
      {data.type !== "" && <Text style={gStyles.informationText}>Type:</Text>}
      <Text style={gStyles.descriptionText}>{data.type}</Text>
    </ScrollView>
  );
};
