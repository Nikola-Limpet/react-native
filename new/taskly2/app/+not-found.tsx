import { View, StyleSheet, Text } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Not Found' }} />
            <View style={styles.container}>
                <Link href="/" style={styles.button}>
                    Go to Home
                </Link>
            </View>
        </>
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
