import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { getQuizStats } from "../data/quizData";

export default function ResultsScreen({ route, navigation }) {
  const { score, total } = route.params;
  const percentage = Math.round((score / total) * 100);
  const stats = getQuizStats(score, total);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Big Emoji */}
        <Text style={styles.bigEmoji}>{stats.emoji}</Text>

        {/* Title */}
        <Text style={styles.title}>{stats.title}</Text>
        <Text style={styles.message}>{stats.message}</Text>

        {/* Score Circle */}
        <View style={styles.scoreCircle}>
          <Text style={styles.scoreNumber}>{score}</Text>
          <Text style={styles.scoreTotal}>/ {total}</Text>
        </View>

        {/* Percentage */}
        <Text style={styles.percentage}>{percentage}%</Text>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{score}</Text>
            <Text style={styles.statLabel}>Correct</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{total - score}</Text>
            <Text style={styles.statLabel}>Wrong</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{total}</Text>
            <Text style={styles.statLabel}>Total</Text>
          </View>
        </View>

        {/* Buttons */}
        <TouchableOpacity
          style={styles.retryButton}
          onPress={() => navigation.navigate("Quiz")}
        >
          <Text style={styles.retryButtonText}>Try Again 🔄</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.homeButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6366f1",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  bigEmoji: {
    fontSize: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  message: {
    fontSize: 20,
    color: "#e0e7ff",
    marginBottom: 40,
    textAlign: "center",
  },
  scoreCircle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  scoreNumber: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#6366f1",
  },
  scoreTotal: {
    fontSize: 24,
    color: "#9ca3af",
    fontWeight: "600",
  },
  percentage: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 40,
  },
  statCard: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    minWidth: 90,
  },
  statNumber: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
    color: "#e0e7ff",
    fontWeight: "600",
  },
  retryButton: {
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginBottom: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  retryButtonText: {
    color: "#6366f1",
    fontSize: 18,
    fontWeight: "bold",
  },
  homeButton: {
    backgroundColor: "transparent",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#fff",
  },
  homeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
