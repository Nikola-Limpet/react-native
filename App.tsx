import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert ,TouchableOpacity } from 'react-native';
import { theme } from './theme';

export default function App() {
    const handleDelete = () => {
        Alert.alert('Delete', 'Are you sure you want to delete this item?',
        [
            {
                text: 'Yes',
                onPress: () => console.log('Delete'),
                style: 'destructive' // This will make the text red
            },
            {
                text: 'No',
                onPress: () => console.log('Cancel'),
                style: 'cancel' // This will make the text blue
            }
        ])
    }
    return (
        <View style={styles.container}>
            <View style={styles.itemContainer}>

                <Text style={styles.itemText}>
                    Coffee
                </Text>
                <TouchableOpacity 
                onPress={handleDelete} 
                activeOpacity={0.8}
                style={styles.button}
                >
                    <Text style={styles.buttonText} >Delete</Text>
                </TouchableOpacity>

            </View>
            {/* <StatusBar style="auto" /> */}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 8,
        borderBottomColor: '#1a759f',
        borderBottomWidth: 1,
    },
    itemText: {
        color: '#000',
        fontSize: 24,
        fontWeight: '200'
    },
    button: {
        backgroundColor: theme.colorBlack,
        padding: 8,
        borderRadius: 8,
        width: 100,

    },
    buttonText: {
        color: theme.colorWhite,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 1,
    }

});
