import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { quizData } from "../data/quizData";

export default function QuizScreen({ navigation }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const question = quizData[currentQuestion];
  const progress = ((currentQuestion + 1) / quizData.length) * 100;

  const handleAnswerPress = (index) => {
    if (selectedAnswer !== null) return; // Already answered

    setSelectedAnswer(index);
    setShowResult(true);

    // Check if answer is correct
    if (index === question.correctAnswer) {
      setScore(score + 1);
    }

    // Move to next question after delay
    setTimeout(() => {
      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        // Quiz completed
        navigation.navigate("Results", {
          score: score + (index === question.correctAnswer ? 1 : 0),
          total: quizData.length,
        });
      }
    }, 1500);
  };

  const getAnswerStyle = (index) => {
    if (selectedAnswer === null) {
      return styles.answerButton;
    }

    if (index === question.correctAnswer) {
      return [styles.answerButton, styles.correctAnswer];
    }

    if (index === selectedAnswer && index !== question.correctAnswer) {
      return [styles.answerButton, styles.wrongAnswer];
    }

    return [styles.answerButton, styles.disabledAnswer];
  };

  return (
    <View style={styles.container}>
      {/* Header with Progress */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.questionCount}>
            Question {currentQuestion + 1}/{quizData.length}
          </Text>
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreText}>Score: {score}</Text>
          </View>
        </View>
        
        {/* Progress Bar */}
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${progress}%` }]} />
        </View>
      </View>

      {/* Question Content */}
      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Category Badge */}
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>{question.category}</Text>
        </View>

        {/* Question */}
        <Text style={styles.question}>{question.question}</Text>

        {/* Answer Options */}
        <View style={styles.answersContainer}>
          {question.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={getAnswerStyle(index)}
              onPress={() => handleAnswerPress(index)}
              disabled={selectedAnswer !== null}
            >
              <View style={styles.answerContent}>
                <View style={styles.answerNumber}>
                  <Text style={styles.answerNumberText}>
                    {String.fromCharCode(65 + index)}
                  </Text>
                </View>
                <Text style={styles.answerText}>{option}</Text>
                {selectedAnswer !== null && index === question.correctAnswer && (
                  <Text style={styles.checkMark}>✓</Text>
                )}
                {selectedAnswer === index && index !== question.correctAnswer && (
                  <Text style={styles.crossMark}>✗</Text>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Feedback */}
        {showResult && (
          <View style={styles.feedbackContainer}>
            {selectedAnswer === question.correctAnswer ? (
              <Text style={styles.correctFeedback}>
                ✓ Correct! Well done! 🎉
              </Text>
            ) : (
              <Text style={styles.wrongFeedback}>
                ✗ Oops! The correct answer is {question.options[question.correctAnswer]}
              </Text>
            )}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  header: {
    backgroundColor: "#6366f1",
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  questionCount: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  scoreContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  scoreText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  progressBarContainer: {
    height: 6,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 3,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#fff",
    borderRadius: 3,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  categoryBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#e0e7ff",
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginBottom: 20,
  },
  categoryText: {
    color: "#6366f1",
    fontSize: 12,
    fontWeight: "600",
  },
  question: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 30,
    lineHeight: 32,
  },
  answersContainer: {
    // Spacing handled by marginBottom on answerButton
  },
  answerButton: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 18,
    borderWidth: 2,
    borderColor: "#e2e8f0",
    marginBottom: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  correctAnswer: {
    backgroundColor: "#d1fae5",
    borderColor: "#10b981",
  },
  wrongAnswer: {
    backgroundColor: "#fee2e2",
    borderColor: "#ef4444",
  },
  disabledAnswer: {
    opacity: 0.5,
  },
  answerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  answerNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#6366f1",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  answerNumberText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  answerText: {
    flex: 1,
    fontSize: 16,
    color: "#1e293b",
    fontWeight: "500",
  },
  checkMark: {
    fontSize: 24,
    color: "#10b981",
    fontWeight: "bold",
  },
  crossMark: {
    fontSize: 24,
    color: "#ef4444",
    fontWeight: "bold",
  },
  feedbackContainer: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#f1f5f9",
  },
  correctFeedback: {
    color: "#10b981",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  wrongFeedback: {
    color: "#ef4444",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
