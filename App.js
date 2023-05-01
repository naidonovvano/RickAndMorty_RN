import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import React, { useState, useEffect, useCallback } from "react";
import { Navigation } from "./screens/Navigation";
import { SafeAreaView, StatusBar } from "react-native";
import { gStyles } from "./styles/style";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Vina: require("./assets/fonts/VinaSans-Regular.ttf"),
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView style={gStyles.safeAreaContainer} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <Navigation />
    </SafeAreaView>
  );
}
