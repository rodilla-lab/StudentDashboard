import { StyleSheet, Text, View } from "react-native";

export default function StatCard({ title, value, bgColor, emoji }) {
  return (
    <View style={[styles.card, { backgroundColor: bgColor }]}>
      <View style={styles.iconContainer}>
        <Text style={styles.emoji}>{emoji}</Text>
      </View>

      <Text style={styles.value}>{value}</Text>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.accent} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    minHeight: 175,
    borderRadius: 22,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#3A3A3A",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 8,
    overflow: "hidden",
  },

  iconContainer: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#292929",
    borderWidth: 1,
    borderColor: "#4A4A4A",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
  },

  emoji: {
    fontSize: 29,
  },

  value: {
    fontSize: 28,
    fontWeight: "900",
    color: "#FFFFFF",
    marginBottom: 5,
  },

  title: {
    fontSize: 13,
    fontWeight: "700",
    color: "#C8C8C8",
    textAlign: "center",
  },

  accent: {
    width: 32,
    height: 2,
    backgroundColor: "#C5A96A",
    borderRadius: 5,
    marginTop: 12,
  },
});