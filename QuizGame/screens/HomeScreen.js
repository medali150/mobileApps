import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Title */}
        <Text style={styles.emoji}>🎯</Text>
        <Text style={styles.title}>Quiz Master</Text>
        <Text style={styles.subtitle}>Test Your Knowledge!</Text>

        {/* Info Cards */}
        <View style={styles.infoContainer}>
          <View style={styles.infoCard}>
            <Text style={styles.infoEmoji}>📝</Text>
            <Text style={styles.infoText}>10 Questions</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoEmoji}>⏱️</Text>
            <Text style={styles.infoText}>No Time Limit</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoEmoji}>🏆</Text>
            <Text style={styles.infoText}>Challenge Yourself</Text>
          </View>
        </View>

        {/* Start Button */}
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => navigation.navigate("Quiz")}
        >
          <Text style={styles.startButtonText}>Start Quiz</Text>
        </TouchableOpacity>

        {/* Categories */}
        <View style={styles.categoriesContainer}>
          <Text style={styles.categoriesTitle}>Categories:</Text>
          <View style={styles.categoriesRow}>
            <View style={styles.categoryChip}>
              <Text style={styles.categoryText}>🌍 Geography</Text>
            </View>
            <View style={styles.categoryChip}>
              <Text style={styles.categoryText}>🔬 Science</Text>
            </View>
            <View style={styles.categoryChip}>
              <Text style={styles.categoryText}>🎨 Art</Text>
            </View>
          </View>
          <View style={styles.categoriesRow}>
            <View style={styles.categoryChip}>
              <Text style={styles.categoryText}>🔢 Math</Text>
            </View>
            <View style={styles.categoryChip}>
              <Text style={styles.categoryText}>💻 Tech</Text>
            </View>
            <View style={styles.categoryChip}>
              <Text style={styles.categoryText}>📚 More</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6366f1", // Indigo
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emoji: {
    fontSize: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    color: "#e0e7ff",
    marginBottom: 40,
    textAlign: "center",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 40,
  },
  infoCard: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
    minWidth: 100,
  },
  infoEmoji: {
    fontSize: 30,
    marginBottom: 5,
  },
  infoText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
  },
  startButton: {
    backgroundColor: "#fff",
    paddingVertical: 18,
    paddingHorizontal: 60,
    borderRadius: 30,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginBottom: 30,
  },
  startButtonText: {
    color: "#6366f1",
    fontSize: 22,
    fontWeight: "bold",
  },
  categoriesContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  categoriesTitle: {
    color: "#e0e7ff",
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "600",
  },
  categoriesRow: {
    flexDirection: "row",
    marginBottom: 10,
  },
  categoryChip: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  categoryText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500",
  },
});
