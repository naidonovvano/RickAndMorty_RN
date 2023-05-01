import React from "react";
import { View, Text, Image } from "react-native";
import { gStyles } from "../styles/style";

const truncateTitle = (str) =>
  str.length >= 50 ? str.substring(0, 20) + "..." : str;

export const Characters = (props) => {
  return (
    <View style={gStyles.infoContainer}>
      <Image style={gStyles.characterImage} source={{ uri: props.image }} />
      <View style={gStyles.details}>
        <Text style={gStyles.characterName}>{truncateTitle(props.name)}</Text>
        <Text style={gStyles.characterSpecies}>{props.species}</Text>
      </View>
    </View>
  );
};
