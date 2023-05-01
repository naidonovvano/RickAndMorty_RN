import React from "react";
import { View, Image, ActivityIndicator } from "react-native";

export const Loading = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator
        size="large"
        style={{
          position: "absolute",
          zIndex: 1,
          top: "50%",
          left: "50%",
          transform: [{ translateX: -25 }, { translateY: -25 }],
        }}
      />
      <Image source={require("../styles/greenPortal.jpg")} style={{ width: "100%", height: "100%" }} />
    </View>
  );
};
