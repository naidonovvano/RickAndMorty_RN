import React from "react";
import { View, Text } from "react-native";
import { gStyles } from "../styles/style";

const truncateTitle = (str) =>
  str.length >= 50 ? str.substring(0, 20) + "..." : str;

export const Locations = (props) => {
  return (
    <View style={gStyles.fieldsContainer}>
      <View style={gStyles.details}>
        <Text style={gStyles.fieldName}>{truncateTitle(props.name)}</Text>
        <Text style={gStyles.fieldArticul}>{props.type}</Text>
      </View>
    </View>
  );
};
