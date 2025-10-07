# 🎯 Quiz Master - React Native Quiz Game

A beautiful and interactive quiz game built with React Native and Expo!

---

## 📱 Features

### ✨ Main Features
- **10 Trivia Questions** across multiple categories
- **Beautiful UI** with modern design and animations
- **Instant Feedback** - See if your answer is correct immediately
- **Progress Tracking** - Visual progress bar and score display
- **Results Screen** - Detailed score breakdown with emojis
- **Smooth Navigation** - Seamless transitions between screens
- **Category Badges** - Questions organized by category

### 📚 Categories
- 🌍 Geography
- 🔬 Science
- 🎨 Art
- 🔢 Math
- 💻 Technology
- 📖 History
- 📚 Literature

---

## 🏗️ Project Structure

```
QuizGame/
├── App.js                    # Navigation setup
├── index.js                  # Entry point with gesture handler
├── data/
│   └── quizData.js          # Quiz questions & scoring logic
└── screens/
    ├── HomeScreen.js        # Welcome/Start screen
    ├── QuizScreen.js        # Main quiz with questions
    └── ResultsScreen.js     # Score & results display
```

---

## 🎮 How to Play

### 1. Home Screen
- See quiz information (10 questions, no time limit)
- View available categories
- Click "Start Quiz" to begin

### 2. Quiz Screen
- Read each question carefully
- Choose from 4 answer options (A, B, C, D)
- Instant feedback:
  - ✓ Green = Correct answer
  - ✗ Red = Wrong answer
  - Shows correct answer if you got it wrong
- Progress bar shows how far you are
- Score counter tracks correct answers

### 3. Results Screen
- See your final score
- Get performance feedback with emoji
- View detailed stats (Correct/Wrong/Total)
- Options:
  - "Try Again" - Restart the quiz
  - "Back to Home" - Return to welcome screen

---

## 🎨 Design System

### Color Palette
- **Primary**: `#6366f1` (Indigo) - Main brand color
- **Background**: `#f8fafc` (Light gray) - Clean background
- **Success**: `#10b981` (Green) - Correct answers
- **Error**: `#ef4444` (Red) - Wrong answers
- **White**: `#ffffff` - Cards and buttons

### Typography
- **Title**: 48px, Bold
- **Question**: 24px, Bold
- **Buttons**: 18-22px, Bold
- **Body**: 14-16px, Medium

### Components
- **Rounded Corners**: 15-30px for modern look
- **Shadows**: Elevation for depth
- **Badges**: Category and score indicators
- **Progress Bar**: Visual quiz progress
- **Answer Cards**: Interactive with feedback states

---

## 📊 Quiz Data Structure

```javascript
{
  id: 1,
  question: "What is the capital of France?",
  options: ["London", "Berlin", "Paris", "Madrid"],
  correctAnswer: 2,  // Index of correct answer
  category: "Geography"
}
```

---

## 🎯 Scoring System

The game evaluates your performance based on percentage:

| Score | Title | Emoji |
|-------|-------|-------|
| 100% | Perfect Score! | 🏆 |
| 80-99% | Excellent! | ⭐ |
| 60-79% | Good Job! | 👏 |
| 40-59% | Not Bad! | 📖 |
| 0-39% | Keep Trying! | 🎯 |

---

## 🚀 How to Run

### Prerequisites
- Node.js installed
- Expo CLI installed globally: `npm install -g expo-cli`

### Installation

1. **Navigate to project directory**:
   ```bash
   cd QuizGame
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   # or
   npx expo start
   ```

4. **Run on device**:
   - Press `a` for Android emulator
   - Press `i` for iOS simulator
   - Scan QR code with Expo Go app on your phone

---

## 📦 Dependencies

```json
{
  "@react-navigation/native": "^6.x",
  "@react-navigation/stack": "^6.x",
  "react-native-screens": "^3.x",
  "react-native-safe-area-context": "^4.x",
  "react-native-gesture-handler": "^2.x",
  "expo": "~51.x",
  "react": "18.x",
  "react-native": "0.74.x"
}
```

---

## 🎯 Game Flow

```
┌─────────────┐
│ HomeScreen  │ (Start)
│             │
│  Quiz Info  │
│  Categories │
│             │
│ [Start Quiz]│
└──────┬──────┘
       │
       ↓
┌─────────────┐
│ QuizScreen  │ (Playing)
│             │
│ Q1 → Q2 → Q3│
│  ... Q10    │
│             │
│ Progress Bar│
│ Score: X/10 │
└──────┬──────┘
       │
       ↓
┌─────────────┐
│ResultsScreen│ (Complete)
│             │
│ Final Score │
│  8 / 10     │
│    80%      │
│             │
│ [Try Again] │
│ [Home]      │
└─────────────┘
```

---

## 🎨 Screen Details

### HomeScreen
- **Purpose**: Welcome & introduction
- **Features**:
  - Animated title with emoji
  - 3 info cards (Questions, Time, Challenge)
  - Category chips display
  - Large "Start Quiz" button

### QuizScreen
- **Purpose**: Main gameplay
- **Features**:
  - Header with question count and score
  - Progress bar (visual feedback)
  - Category badge for each question
  - 4 answer options with letters (A, B, C, D)
  - Instant visual feedback
  - Auto-advance to next question
  - Shows correct answer if wrong

### ResultsScreen
- **Purpose**: Show final score
- **Features**:
  - Large emoji based on performance
  - Performance title and message
  - Score circle (big visual)
  - Percentage display
  - 3 stat cards (Correct, Wrong, Total)
  - "Try Again" button
  - "Back to Home" button

---

## 💡 Key Features Explained

### Instant Feedback
When you select an answer:
1. Answer highlights (green if correct, red if wrong)
2. Checkmark (✓) appears for correct answer
3. Crossmark (✗) appears for your wrong answer
4. Correct answer is shown if you got it wrong
5. After 1.5 seconds, moves to next question

### Progressive Disclosure
- Questions revealed one at a time
- Can't go back (like a real quiz!)
- Keeps player focused

### Smart Scoring
- Tracks score in real-time
- Calculates percentage
- Provides contextual feedback
- Shows detailed breakdown

---

## 🔧 Customization

### Add More Questions
Edit `data/quizData.js`:
```javascript
{
  id: 11,
  question: "Your question here?",
  options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  correctAnswer: 0,  // Index (0-3)
  category: "Your Category"
}
```

### Change Colors
Edit styles in each screen:
```javascript
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#YOUR_COLOR", // Change here
  },
});
```

### Modify Scoring Thresholds
Edit `getQuizStats()` in `data/quizData.js`:
```javascript
if (percentage >= 90) {  // Change threshold
  return { title: "Master!", emoji: "🏆" };
}
```

---

## 🎓 What You'll Learn

### React Native Concepts
- ✅ Navigation with React Navigation
- ✅ State management with useState
- ✅ Props passing and component communication
- ✅ Conditional rendering
- ✅ List rendering with map
- ✅ Event handling
- ✅ Styling with StyleSheet

### UI/UX Patterns
- ✅ Onboarding screens
- ✅ Progress indicators
- ✅ Feedback systems
- ✅ Results displays
- ✅ Button interactions
- ✅ Color psychology
- ✅ Typography hierarchy

### App Architecture
- ✅ Screen-based navigation
- ✅ Data management
- ✅ Component organization
- ✅ Reusable logic (scoring function)

---

## 🚀 Future Enhancements

Want to improve the game? Consider adding:

1. **Timer** - Add time pressure ⏱️
2. **Difficulty Levels** - Easy, Medium, Hard 📊
3. **Categories Selection** - Let users choose categories 🎯
4. **Leaderboard** - Track high scores 🏆
5. **Sound Effects** - Audio feedback 🔊
6. **Animations** - More visual effects ✨
7. **Multiplayer** - Challenge friends 👥
8. **Daily Quiz** - New questions daily 📅
9. **Hints System** - 50/50, Skip question 💡
10. **Achievements** - Badges and rewards 🎖️

---

## 🐛 Troubleshooting

### Navigation not working?
Make sure `react-native-gesture-handler` is imported at the top of `index.js`

### Styles not showing?
Check that all StyleSheet objects are properly defined

### Questions not advancing?
Verify the `setTimeout` duration in `QuizScreen.js`

### Score not calculating?
Check the `correctAnswer` index in `quizData.js` (starts from 0)

---

## 📸 Screenshots

### Home Screen
```
┌─────────────────────┐
│      🎯             │
│   Quiz Master       │
│ Test Your Knowledge!│
│                     │
│ ┌───┐ ┌───┐ ┌───┐  │
│ │📝 │ │⏱️│ │🏆 │  │
│ └───┘ └───┘ └───┘  │
│                     │
│  [Start Quiz]       │
│                     │
│ Categories:         │
│ [🌍][🔬][🎨]       │
│ [🔢][💻][📚]       │
└─────────────────────┘
```

### Quiz Screen
```
┌─────────────────────┐
│ Q 3/10    Score: 2  │
│ ▓▓▓░░░░░░░          │
├─────────────────────┤
│                     │
│ [Geography]         │
│                     │
│ What is the largest │
│ ocean on Earth?     │
│                     │
│ ┌─────────────────┐ │
│ │ A  Atlantic     │ │
│ ├─────────────────┤ │
│ │ B  Indian       │ │
│ ├─────────────────┤ │
│ │ C  Arctic       │ │
│ ├─────────────────┤ │
│ │ D  Pacific   ✓  │ │ (Green)
│ └─────────────────┘ │
│                     │
│ ✓ Correct! 🎉      │
└─────────────────────┘
```

### Results Screen
```
┌─────────────────────┐
│                     │
│        🏆           │
│                     │
│   Perfect Score!    │
│   You're a genius!  │
│                     │
│      ┌─────┐        │
│      │  10 │        │
│      │ /10 │        │
│      └─────┘        │
│        100%         │
│                     │
│  ┌───┐┌───┐┌───┐   │
│  │ 10││ 0 ││ 10│   │
│  └───┘└───┘└───┘   │
│ Correct Wrong Total │
│                     │
│  [Try Again 🔄]     │
│  [Back to Home]     │
└─────────────────────┘
```

---

## 🎉 Credits

Built with ❤️ using:
- React Native
- Expo
- React Navigation

---

## 📄 License

This project is open source and available for learning purposes.

---

## 🚀 Get Started Now!

```bash
cd QuizGame
npm install
npm start
```

**Have fun and test your knowledge!** 🎯🎮
