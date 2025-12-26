import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function HomeScreen({ navigation }) {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {user?.username}</Text>

      <Pressable style={styles.button} onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.buttonText}>Go to Settings</Text>
      </Pressable>

      <Pressable
        style={[styles.button, styles.danger]}
        onPress={() => {
          logout();
          navigation.replace('Login');
        }}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center', gap: 12 },
  title: { fontSize: 22, fontWeight: '700', textAlign: 'center' },
  button: { padding: 14, borderRadius: 10, alignItems: 'center', backgroundColor: '#333' },
  danger: { backgroundColor: '#a11' },
  buttonText: { color: 'white', fontWeight: '700' },
});
