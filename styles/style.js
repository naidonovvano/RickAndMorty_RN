import { StyleSheet, Platform, StatusBar, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const isSmallScreen = width <= 375;

export const gStyles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#1e2838",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#1e2838",
  },
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 2,
  },
  quoteContainer: {
    flex: 2,
  },
  quoteBox: {
    height: "auto",
    alignSelf: "center",
    marginHorizontal: 10,
  },
  quoteText: {
    fontFamily: "Vina",
    fontSize: isSmallScreen ? 12 : 16,
    textTransform: "uppercase",
    padding: 10,
    color: "#00b5cd",
  },
  buttonsContainer: {
    flex: 3,
    justifyContent: "space-evenly",
    marginBottom: 5,
  },
  buttonBox: {
    borderWidth: 2,
    borderColor: "#b3e028",
    padding: 20,
    textAlign: "center",
    marginHorizontal: 10,
  },
  buttonText: {
    fontFamily: "Vina",
    fontSize: 26,
    color: "#00b5cd",
    textTransform: "uppercase",
    textAlign: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
  },
  informationHeader: {
    fontFamily: "Vina",
    color: "#8e8e93",
    alignSelf: "center",
    fontSize: 36,
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.3)",
  },
  informationText: {
    fontFamily: "Vina",
    color: "#8e8e93",
    color: "rgba(0, 0, 0, 0.4)",
    fontSize: 26,
  },
  descriptionText: {
    fontFamily: "Vina",
    fontSize: 26,
  },
  charactersContainer: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  characterAvatar: {
    width: "100%",
    height: 345,
    borderRadius: 10,
    marginBottom: 10,
  },
  inputContainer: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#808080",
    flexDirection: "row",
    alignSelf: "center",
  },
  vectorContainer: {
    width: 20,
    height: 20,
    alignSelf: "center",
    marginLeft: 5,
    marginRight: 5,
  },
  searchBar: {
    width: "100%",
    height: "100%",
    fontFamily: "Vina",
    fontSize: 22,
  },
  fieldsContainer: {
    width: "100%",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    flexDirection: "row",
  },
  details: {
    flex: 1,
    justifyContent: "center",
  },
  fieldName: {
    fontFamily: "Vina",
    fontSize: 26,
  },
  fieldArticul: {
    fontFamily: "Vina",
    fontSize: 18,
    color: "rgba(0, 0, 0, 0.5)",
    marginTop: 2,
  },
  infoContainer: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    flexDirection: "row",
  },
  characterImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 12,
  },
  characterName: {
    fontFamily: "Vina",
    fontSize: 26,
  },
  characterSpecies: {
    fontFamily: "Vina",
    fontSize: 18,
    color: "rgba(0, 0, 0, 0.4)",
    marginTop: 2,
  },
});
