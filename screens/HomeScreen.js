import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen({ route }) {
  const { username } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, {username}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  text: { fontSize: 22, fontWeight: '600', textAlign: 'center' },
});
