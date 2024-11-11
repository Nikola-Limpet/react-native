import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <Link href="/about" style={styles.button}>
                GO to about screeen
            </Link>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#25292e',
    },
    text: {
        color: '#fff',
    },
    button: {
        color: '#fff',
        fontSize: 20,
        padding: 10,
        backgroundColor: '#007bff',
        borderRadius: 5,
        marginTop: 10,
    },
});
