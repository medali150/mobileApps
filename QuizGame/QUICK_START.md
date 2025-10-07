# 🚀 Quiz Master - Quick Start Guide

## ⚡ Get Started in 3 Steps

### 1️⃣ Install Dependencies
```bash
cd QuizGame
npm install
```

### 2️⃣ Start the App
```bash
npm start
```

### 3️⃣ Run on Device
- Press `a` for Android
- Press `i` for iOS
- Scan QR code with Expo Go app

---

## 📱 What You'll Get

### Beautiful Quiz Game with:
- ✅ 10 Trivia Questions
- ✅ Multiple Categories (Geography, Science, Art, Math, Tech, etc.)
- ✅ Instant Feedback (Green ✓ for correct, Red ✗ for wrong)
- ✅ Progress Tracking
- ✅ Score Display
- ✅ Results Screen with Performance Feedback

---

## 🎮 Game Flow

```
Home Screen → Quiz Screen → Results Screen
   ↓              ↓              ↓
 Welcome      Questions       Final Score
  Info        (1-10)          Try Again
 Categories   Feedback         Go Home
```

---

## 📂 Project Files

```
QuizGame/
├── App.js                 # Navigation setup
├── data/
│   └── quizData.js       # 10 quiz questions + scoring logic
└── screens/
    ├── HomeScreen.js     # Welcome screen (Indigo theme)
    ├── QuizScreen.js     # Main quiz gameplay
    └── ResultsScreen.js  # Score & results
```

---

## 🎨 Design Highlights

- **Color Theme**: Indigo (#6366f1)
- **Modern UI**: Rounded corners, shadows, clean layout
- **Instant Feedback**: Visual cues for right/wrong answers
- **Smooth Navigation**: No headers, full-screen experience
- **Emojis**: Fun visual elements throughout

---

## 💡 Quick Tips

### Playing the Quiz
1. Read question carefully
2. Tap your answer (A, B, C, or D)
3. See instant feedback
4. Wait 1.5 seconds for next question
5. Complete all 10 questions
6. View your results!

### Scoring
- **100%** = Perfect Score! 🏆
- **80-99%** = Excellent! ⭐
- **60-79%** = Good Job! 👏
- **40-59%** = Not Bad! 📖
- **0-39%** = Keep Trying! 🎯

---

## 🔧 Customize It!

### Add Your Own Questions
Edit `data/quizData.js`:
```javascript
{
  id: 11,
  question: "Your question?",
  options: ["A", "B", "C", "D"],
  correctAnswer: 0,  // Index of correct answer
  category: "Your Category"
}
```

### Change Colors
Find and replace `#6366f1` with your color!

---

## 🎯 Features Breakdown

| Feature | Description |
|---------|-------------|
| **Home Screen** | Welcome, info cards, categories, start button |
| **Quiz Screen** | Questions, 4 options, progress bar, score |
| **Results Screen** | Final score, percentage, stats, retry button |
| **Navigation** | Smooth transitions between screens |
| **Feedback** | Instant visual feedback on answers |
| **Scoring** | Real-time score tracking |

---

## 📚 What's Inside?

### 10 Questions Across Categories:
- 🌍 Geography (3 questions)
- 🔬 Science (2 questions)
- 🎨 Art (1 question)
- 🔢 Math (2 questions)
- 💻 Technology (1 question)
- 📖 History (1 question)

---

## 🐛 Common Issues

**Q: Navigation not working?**  
A: Make sure `react-native-gesture-handler` is installed

**Q: White screen on start?**  
A: Wait for npm install to complete, then restart

**Q: Styles look wrong?**  
A: Clear cache: `expo start -c`

---

## 🎉 You're Ready!

Your Quiz Game is complete and ready to run!

```bash
npm start
```

**Have fun testing your knowledge!** 🎯

---

## 📖 Need More Help?

Check out `README.md` for detailed documentation including:
- Complete feature list
- Customization guide
- Future enhancement ideas
- Troubleshooting tips

---

**Built with React Native + Expo** 💙
