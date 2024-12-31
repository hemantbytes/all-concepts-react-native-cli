import { View, Text } from 'react-native';
import React from 'react';
import styles from '../screens/Contact/style';

const ContactItem = ({name, email}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{name}</Text>
      <Text style={styles.itemEmail}>{email}</Text>
    </View>
  );
};

export default ContactItem;