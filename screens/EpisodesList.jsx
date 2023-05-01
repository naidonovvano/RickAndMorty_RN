import React, { useEffect, useState } from "react";
import { gStyles } from "../styles/style";
import {
  View,
  Image,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Episodes } from "../components/Episodes";
import { Loading } from "../components/Loading";
import { SearchInput } from "../components/SearchInput";

export const EpisodesList = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [episodes, setEpisodesList] = useState(data);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPages] = useState(0);

  useEffect(() => {
    if (page <= totalPage) {
      fetchEpisodes();
    }
  }, [page]);

  const fetchEpisodes = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/episode/?page=${page}`
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

  const filterEpisodes = (searchText, listOfEpisodes) => {
    if (!searchText) return listOfEpisodes;
    return listOfEpisodes.filter(({ name }) =>
      name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredEpisodes = filterEpisodes(searchValue, data);
      setEpisodesList(filteredEpisodes);
    }, 300);
    return () => clearTimeout(Debounce);
  }, [data, searchValue]);

  const loadItems = () => {
    setPage((prev) => prev + 1);
    if (page === totalPage) return;
  };

  return isLoading ? (
    <Loading />
  ) : (
    <View style={gStyles.container}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchEpisodes} />
        }
        data={episodes}
        keyExtractor={(item) => item.id + Math.random()}
        ListHeaderComponent={
          <View>
            <View style={{ height: 200, marginBottom: 10 }}>
              <Image
                source={require("../styles/episode.jpg")}
                style={gStyles.image}
              />
            </View>
            <SearchInput
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </View>
        }
        ListHeaderComponentStyle={{ padding: 10 }}
        ListFooterComponent={<ActivityIndicator size="large" />}
        ListFooterComponentStyle={{ marginVertical: 16, alignItems: "center" }}
        onEndReached={loadItems}
        onEndReachedThreshold={0.1}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("EpisodeCard", {
                id: item.id,
                name: item.name,
              })
            }
          >
            <Episodes name={item.name} episode={item.episode} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
