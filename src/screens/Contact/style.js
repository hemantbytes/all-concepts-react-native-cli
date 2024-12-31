import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5', // Light background color for a clean look
        paddingHorizontal: 16,
        paddingTop: 10,
      },

    heading: {
        color: 'crimson',
        padding: 10,
        textAlign : 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 15
    },
    item: {
        backgroundColor : '#f60002',
        marginVertical : 5,
        borderRadius : 10,
        padding : 10,
    },
    itemText: {
        color : '#ffffff',
    },
    itemEmail: {
        color : '#f7d203',
    }

});

export default styles;
