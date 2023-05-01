import React, { useState } from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import quotes from "../quotes.json";
import { gStyles } from "../styles/style";

export const Main = ({ navigation }) => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const displayQuote = (quotes) => {
    let { author, quote } = quotes[Math.floor(Math.random() * quotes.length)];
    setAuthor(author);
    setQuote(quote);
  };

  return (
    <View style={gStyles.mainContainer}>
      <TouchableOpacity
        onPress={() => displayQuote(quotes)}
        style={gStyles.logoContainer}
      >
        <Image
          source={require("../assets/Logo.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </TouchableOpacity>
      <View style={gStyles.quoteContainer}>
        {quote === "" && (
          <Text
            style={[
              gStyles.quoteText,
              { textAlign: "center", color: "#b3e028" },
            ]}
          >
            *Tap logo to see a random quote below
          </Text>
        )}
        <View style={quote !== "" && gStyles.quoteBox}>
          <Text style={gStyles.quoteText}>{quote}</Text>
          <Text
            style={[
              gStyles.quoteText,
              { textAlign: "right", color: "#b3e028" },
            ]}
          >
            {author}
          </Text>
        </View>
      </View>
      <View style={gStyles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("CharactersList")}
          style={gStyles.buttonBox}
        >
          <Text style={gStyles.buttonText}>Characters</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("LocationsList")}
          style={gStyles.buttonBox}
        >
          <Text style={gStyles.buttonText}>Locations</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("EpisodesList")}
          style={gStyles.buttonBox}
        >
          <Text style={gStyles.buttonText}>Episodes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
