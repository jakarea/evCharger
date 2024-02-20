import React, { useEffect } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SplashScreen = ({ navigation }) => {
  const bgColorAnim = new Animated.Value(0);
  const logoAnim = new Animated.Value(0);
  const textAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(bgColorAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(logoAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(textAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Navigate to the next screen after animation completes
      navigation.navigate('Home');
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.bgColor, { opacity: bgColorAnim }]}>
        {/* Background Gradient */}
      </Animated.View>
      <Animated.View style={[styles.logoContainer, { opacity: logoAnim }]}>
        {/* Your Logo Image */}
      </Animated.View>
      <Animated.Text style={[styles.title, { opacity: textAnim }]}>
        Your Title
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgColor: {
    ...StyleSheet.absoluteFillObject,
  },
  logoContainer: {
    marginBottom: 20,
    // Adjust position as needed
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default SplashScreen;
