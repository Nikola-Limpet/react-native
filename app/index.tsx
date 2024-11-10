import { StyleSheet, View } from 'react-native';
import { ShoppingListItem } from '../components/ShoppingListItems';
import { Link } from 'expo-router';

export default function App() {
    return (
        <View style={styles.container}>
            <Link
                href="/counter"
                style={{ textAlign: 'center', marginBottom: 18 }}
            >
                Counter
            </Link>
            <ShoppingListItem name="Sugar" />
            <ShoppingListItem name="Coffee" isCompleted />
            <ShoppingListItem name="Tea" isCompleted />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});
