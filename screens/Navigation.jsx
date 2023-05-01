import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Main } from "./Main";
import { CharacterCard } from "./CharacterCard";
import { CharactersList } from "./CharactersList";
import { LocationCard } from "./LocationCard";
import { LocationsList } from "./LocationsList";
import { EpisodeCard } from "./EpisodeCard";
import { EpisodesList } from "./EpisodesList";

const Stack = createNativeStackNavigator();
export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home Screen"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CharactersList"
          component={CharactersList}
          options={{
            title: "CHARACTERS",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Vina",
              fontSize: 30,
            },
          }}
        />
        <Stack.Screen
          name="CharacterCard"
          component={CharacterCard}
          options={{
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Vina",
              fontSize: 30,
            },
          }}
        />
        <Stack.Screen
          name="LocationsList"
          component={LocationsList}
          options={{
            title: "LOCATIONS",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Vina",
              fontSize: 30,
            },
          }}
        />
        <Stack.Screen
          name="LocationCard"
          component={LocationCard}
          options={{
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Vina",
              fontSize: 30,
            },
          }}
        />
        <Stack.Screen
          name="EpisodesList"
          component={EpisodesList}
          options={{
            title: "EPISODES",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Vina",
              fontSize: 30,
            },
          }}
        />
        <Stack.Screen
          name="EpisodeCard"
          component={EpisodeCard}
          options={{
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Vina",
              fontSize: 30,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
