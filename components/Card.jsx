import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Card = ({ link, title, description }) => {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(link)}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{title} &rarr;</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: "flex-start",
    border: "1px solid #eaeaea",
    borderRadius: 10,
    display: "flex",
    margin: 8,
    padding: 16,
    textAlign: "left",
    width: 400,
    backgroundColor: "#1b2129",
  },
  cardTitle: {
    color: "#f213a4",
  },
  cardDescription: {
    color: "#fff",
  },
});

export default Card;
