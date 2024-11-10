import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { theme } from '../theme';
import { AntDesign } from '@expo/vector-icons';

type Props = {
    name: string;
    isCompleted?: boolean;
};
export function ShoppingListItem({ name, isCompleted }: Props) {
    const handleDelete = () => {
        Alert.alert(
            `Are you sure you want to delete this ${name} item?`,
            'Delete',
            [
                {
                    text: 'Yes',
                    onPress: () => console.log('Delete'),
                    style: 'destructive', // This will make the text red
                },
                {
                    text: 'No',
                    onPress: () => console.log('Cancel'),
                    style: 'cancel', // This will make the text blue
                },
            ]
        );
    };
    return (
        <View
            style={[
                styles.itemContainer,
                isCompleted ? styles.complettedContainer : undefined,
            ]}
        >
            <Text
                style={[
                    styles.itemText,
                    isCompleted ? styles.completedText : undefined,
                ]}
            >
                {name}
            </Text>
            <TouchableOpacity
                onPress={handleDelete}
                activeOpacity={0.8}
                style={[
                    styles.button,
                    isCompleted ? styles.completedButton : undefined,
                ]}
            >
                <AntDesign
                    name="closecircle"
                    size={24}
                    color={isCompleted ? theme.colorGray : theme.colorRed}
                />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 8,
        borderBottomColor: theme.colorCerulean,
        borderBottomWidth: 1,
    },
    button: {
        padding: 8,
        borderRadius: 4,
    },
    complettedContainer: {
        backgroundColor: theme.colorLightGray,
        borderBottomColor: theme.colorLightGray,
    },
    completedButton: {
        backgroundColor: theme.colorGray,
    },
    completedText: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    },
    itemText: {
        color: '#000',
        fontSize: 24,
        fontWeight: '200',
    },
});
