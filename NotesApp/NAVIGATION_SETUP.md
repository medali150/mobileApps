# React Native Navigation Setup Guide

## 🏗️ Project Structure

```
NotesApp/
├── App.js                      # Navigation container and stack navigator
├── index.js                    # Entry point with gesture handler
├── screens/
│   ├── HomeScreen.js          # Welcome screen with navigation to notes
│   └── NotesScreen.js         # Main notes list with search and CRUD
└── components/
    └── NoteItem.js            # Individual note card component
```

## 📦 Installed Packages

```bash
npm install @react-navigation/native @react-navigation/stack
npm install react-native-screens react-native-safe-area-context
npm install react-native-gesture-handler
```

### Package Purposes:

- **@react-navigation/native** - Core navigation library
- **@react-navigation/stack** - Stack navigator for screen transitions
- **react-native-screens** - Native screen optimization
- **react-native-safe-area-context** - Handle safe areas (notches, status bars)
- **react-native-gesture-handler** - Smooth gesture handling

## 🚀 How It Works

### 1. Navigation Setup (App.js)

```javascript
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Notes" component={NotesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

**Key Points:**
- `NavigationContainer` wraps the entire app
- `Stack.Navigator` creates a stack-based navigation
- Each `Stack.Screen` represents a screen in the app
- `initialRouteName` sets the starting screen

### 2. HomeScreen (screens/HomeScreen.js)

**Features:**
- Welcome screen with app description
- Button to navigate to Notes screen
- Feature list display
- Clean, modern UI

**Navigation Usage:**
```javascript
export default function HomeScreen({ navigation }) {
  // navigation prop is automatically provided by React Navigation
  
  const goToNotes = () => {
    navigation.navigate("Notes");
  };
  
  return (
    <TouchableOpacity onPress={goToNotes}>
      <Text>View My Notes</Text>
    </TouchableOpacity>
  );
}
```

### 3. NotesScreen (screens/NotesScreen.js)

**Features:**
- ✅ Display list of notes using FlatList
- ✅ Search functionality (filter by title or content)
- ✅ Delete notes with confirmation
- ✅ Floating Action Button (FAB) to add notes
- ✅ Empty state handling

**Key Components:**
```javascript
// Search bar
<TextInput
  placeholder="Search notes..."
  value={searchQuery}
  onChangeText={setSearchQuery}
/>

// Notes list
<FlatList
  data={filteredNotes}
  renderItem={({ item }) => (
    <NoteItem
      note={item}
      onPress={() => handleEditNote(item.id)}
      onDelete={() => handleDeleteNote(item.id)}
    />
  )}
/>

// Floating Action Button
<TouchableOpacity style={styles.fab} onPress={handleAddNote}>
  <Text style={styles.fabText}>+</Text>
</TouchableOpacity>
```

### 4. NoteItem Component (components/NoteItem.js)

**Features:**
- Displays note title, content preview, and date
- Tap to edit (opens alert for now)
- Delete button with trash icon
- Card-based design with shadows

**Props:**
- `note` - The note object with { id, title, content, date }
- `onPress` - Function called when note is tapped
- `onDelete` - Function called when delete button is tapped

## 🎨 Design Features

### Color Scheme
- Primary: `#f4511e` (Orange-red)
- Background: `#f5f5f5` (Light gray)
- Cards: `#fff` (White)
- Text: `#333`, `#666`, `#999` (Grays)

### UI Elements
- **Cards** - Elevated with shadows for depth
- **Search Bar** - Sticky at top for easy access
- **FAB** - Fixed position for quick access
- **Safe Areas** - Handles notches and status bars

## 🧭 Navigation Flow

```
┌─────────────┐
│ HomeScreen  │ (Initial)
│             │
│  Welcome!   │
│             │
│ [View Notes]│ ──────┐
└─────────────┘       │
                      │ navigation.navigate("Notes")
                      ▼
                ┌─────────────┐
                │ NotesScreen │
                │             │
                │  📝 Notes   │
                │  [Search]   │
                │  • Note 1   │
                │  • Note 2   │
                │     [+]     │
                └─────────────┘
                      │
                      │ navigation.goBack()
                      ▼
                ┌─────────────┐
                │ HomeScreen  │
                └─────────────┘
```

## 🔧 How to Run

1. **Install dependencies** (already done):
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   # or
   npx expo start
   ```

3. **Run on device**:
   - Press `a` for Android
   - Press `i` for iOS
   - Scan QR code with Expo Go app

## 📱 Features Implemented

### ✅ Completed
- Navigation between screens
- Notes list display
- Search functionality
- Delete notes with confirmation
- Empty state handling
- Responsive UI design

### 🚧 Coming Next
- Add new notes
- Edit existing notes
- Persistent storage (AsyncStorage)
- Categories/tags
- Sort options
- Dark mode

## 🎯 Key Navigation Concepts

### Navigation Prop Methods

```javascript
// Navigate to a screen
navigation.navigate("ScreenName");

// Go back to previous screen
navigation.goBack();

// Replace current screen
navigation.replace("ScreenName");

// Pass parameters
navigation.navigate("Notes", { category: "Work" });

// Access params
const { category } = route.params;
```

### Header Customization

```javascript
<Stack.Screen
  name="Notes"
  component={NotesScreen}
  options={{
    title: "My Notes",
    headerStyle: { backgroundColor: "#f4511e" },
    headerTintColor: "#fff",
    headerTitleStyle: { fontWeight: "bold" },
    headerRight: () => <Button title="Add" />,
  }}
/>
```

## 🐛 Troubleshooting

### Issue: Navigation not working
**Solution:** Make sure `react-native-gesture-handler` is imported at the top of `index.js`

### Issue: Header not showing
**Solution:** Check that screens are wrapped in `Stack.Navigator`

### Issue: Screens not rendering
**Solution:** Verify component imports and paths are correct

## 📚 Learn More

- [React Navigation Docs](https://reactnavigation.org/)
- [Stack Navigator Guide](https://reactnavigation.org/docs/stack-navigator/)
- [Navigation Props](https://reactnavigation.org/docs/navigation-prop/)

---

🎉 **Your Notes App is now set up with navigation!** Try running it and navigating between screens.
