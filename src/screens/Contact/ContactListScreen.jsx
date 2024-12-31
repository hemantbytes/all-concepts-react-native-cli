import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { users } from './userContactInfo';
import ContactItem from '../../components/ContactItem';
import styles from './style';


const ContactListScreen = () => {
    const renderItem = ({ item }) =>(
                <ContactItem 
                name={item.name} 
                email={item.email} />
    );
  return (
   <FlatList style={styles.container}
          data={users}   
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id + index}     
           ListHeaderComponent = {<Text
          style={styles.heading} >Contact</Text>}
   />
  );
};

export default ContactListScreen;