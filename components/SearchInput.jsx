import React from "react";
import { View, TextInput } from "react-native";
import { gStyles } from "../styles/style";
import { Ionicons } from "@expo/vector-icons";

export const SearchInput = ({ searchValue, setSearchValue }) => {
  return (
    <View style={gStyles.inputContainer}>
      <View style={gStyles.vectorContainer}>
        <Ionicons name="search" size={20} color="#808080" />
      </View>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder=" Almost google..."
        placeholderTextColor="#808080"
        autoCapitalize="none"
        value={searchValue}
        onChangeText={setSearchValue}
        style={gStyles.searchBar}
      />
    </View>
  );
};
