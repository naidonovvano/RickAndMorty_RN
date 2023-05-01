import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Locations } from "../components/Locations";
import { Loading } from "../components/Loading";
import { SearchInput } from "../components/SearchInput";
import { gStyles } from "../styles/style";

export const LocationsList = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [locations, setLocationsList] = useState(data);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPages] = useState(0);

  useEffect(() => {
    if (page <= totalPage) {
      fetchLocations();
    }
  }, [page]);

  const fetchLocations = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/location/?page=${page}`
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

  const filterLocations = (searchText, listOfAreas) => {
    if (!searchText) return listOfAreas;
    return listOfAreas.filter(({ name }) =>
      name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredLocations = filterLocations(searchValue, data);
      setLocationsList(filteredLocations);
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
          <RefreshControl refreshing={isLoading} onRefresh={fetchLocations} />
        }
        data={locations}
        keyExtractor={(item) => item.id + Math.random()}
        ListHeaderComponent={
          <View>
            <View style={{ height: 200, marginBottom: 10 }}>
              <Image
                source={require("../styles/location.jpg")}
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
              navigation.navigate("LocationCard", {
                id: item.id,
                name: item.name,
              })
            }
          >
            <Locations name={item.name} type={item.type} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
