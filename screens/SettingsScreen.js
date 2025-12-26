import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export default function SettingsScreen() {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <Text style={styles.label}>Current theme: {theme}</Text>

      <Pressable style={styles.button} onPress={toggleTheme}>
        <Text style={styles.buttonText}>Toggle Theme</Text>
      </Pressable>

      <Text style={styles.hint}>
        (Theme is persisted with AsyncStorage. Restart the app to test.)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center', gap: 12 },
  title: { fontSize: 24, fontWeight: '800', textAlign: 'center' },
  label: { fontSize: 18, textAlign: 'center' },
  button: { padding: 14, borderRadius: 10, alignItems: 'center', backgroundColor: '#333' },
  buttonText: { color: 'white', fontWeight: '700' },
  hint: { textAlign: 'center', opacity: 0.7 },
});
