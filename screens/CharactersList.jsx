import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Characters } from "../components/Characters";
import { Loading } from "../components/Loading";
import { SearchInput } from "../components/SearchInput";
import { gStyles } from "../styles/style";

export const CharactersList = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [characters, setCharactersList] = useState(data);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPages] = useState(0);

  useEffect(() => {
    if (page <= totalPage) {
      fetchCharacters();
    }
  }, [page]);

  const fetchCharacters = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      const json = await response.json();
      setData([...data, ...json.results]);
      setTotalPages(json.info.pages);
    } catch (error) {
      console.error(error);
      alert("Error: Failed to fetch");
    } finally {
      setIsLoading(false);
    }
  };

  const filterCharacters = (searchText, listOfChars) => {
    if (!searchText) return listOfChars;
    return listOfChars.filter(({ name }) =>
      name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredCharacters = filterCharacters(searchValue, data);
      setCharactersList(filteredCharacters);
    }, 300);
    return () => clearTimeout(Debounce);
  }, [data, searchValue]);

  const loadItems = () => {
    setPage((prev) => prev + 1);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <View style={gStyles.container}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchCharacters} />
        }
        data={characters}
        keyExtractor={(item) => item.id + Math.random()}
        ListHeaderComponent={
          <SearchInput
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        }
        ListHeaderComponentStyle={{ padding: 10 }}
        ListFooterComponent={
          <View>
            <ActivityIndicator size="large" />
          </View>
        }
        ListFooterComponentStyle={{ marginVertical: 16, alignItems: "center" }}
        onEndReached={loadItems}
        onEndReachedThreshold={0.1}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("CharacterCard", {
                id: item.id,
                name: item.name,
              })
            }
          >
            <Characters
              name={item.name}
              species={item.species}
              image={item.image}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
