import 'package:flutter/material.dart';

/// Flutter Layout Demo - Equivalent to React Native's LayoutDemo
/// 
/// Key Differences:
/// - React Native uses Flexbox with View components
/// - Flutter uses Column/Row widgets with Expanded
/// - React Native: flex: 1 → Flutter: Expanded
/// - React Native: StyleSheet → Flutter: inline styling
class LayoutDemo extends StatelessWidget {
  const LayoutDemo({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        // React Native: flexDirection: 'column'
        // Flutter: Column (vertical layout by default)
        children: [
          // HEADER - Fixed Height
          Container(
            height: 80,
            color: const Color(0xFF3498db),
            alignment: Alignment.center,
            padding: const EdgeInsets.only(top: 30),
            child: const Text(
              'Header',
              style: TextStyle(
                color: Colors.white,
                fontSize: 20,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          
          // CONTENT - Takes Remaining Space
          // React Native: flex: 1
          // Flutter: Expanded
          Expanded(
            child: Container(
              color: const Color(0xFFecf0f1),
              alignment: Alignment.center,
              child: const Text(
                'Content',
                style: TextStyle(fontSize: 18),
              ),
            ),
          ),
          
          // FOOTER - Fixed Height
          Container(
            height: 60,
            color: const Color(0xFF2c3e50),
            alignment: Alignment.center,
            child: const Text(
              'Footer',
              style: TextStyle(
                color: Colors.white,
                fontSize: 16,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
