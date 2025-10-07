export const quizData = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2, // Index of correct answer (Paris)
    category: "Geography",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
    category: "Science",
  },
  {
    id: 3,
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    correctAnswer: 2,
    category: "Art",
  },
  {
    id: 4,
    question: "What is 15 x 8?",
    options: ["100", "110", "120", "130"],
    correctAnswer: 2,
    category: "Math",
  },
  {
    id: 5,
    question: "Which programming language is React Native based on?",
    options: ["Python", "Java", "JavaScript", "C++"],
    correctAnswer: 2,
    category: "Technology",
  },
  {
    id: 6,
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: 3,
    category: "Geography",
  },
  {
    id: 7,
    question: "In what year did World War II end?",
    options: ["1943", "1944", "1945", "1946"],
    correctAnswer: 2,
    category: "History",
  },
  {
    id: 8,
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    correctAnswer: 2,
    category: "Math",
  },
  {
    id: 9,
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Osmium", "Oganesson"],
    correctAnswer: 1,
    category: "Science",
  },
  {
    id: 10,
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correctAnswer: 1,
    category: "Literature",
  },
];

export const getQuizStats = (score, total) => {
  const percentage = (score / total) * 100;
  
  if (percentage === 100) {
    return {
      title: "Perfect Score! 🎉",
      message: "You're a genius!",
      emoji: "🏆",
    };
  } else if (percentage >= 80) {
    return {
      title: "Excellent! 🌟",
      message: "Great job!",
      emoji: "⭐",
    };
  } else if (percentage >= 60) {
    return {
      title: "Good Job! 👍",
      message: "Keep it up!",
      emoji: "👏",
    };
  } else if (percentage >= 40) {
    return {
      title: "Not Bad! 📚",
      message: "You can do better!",
      emoji: "📖",
    };
  } else {
    return {
      title: "Keep Trying! 💪",
      message: "Practice makes perfect!",
      emoji: "🎯",
    };
  }
};
