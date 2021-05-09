import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MenuItem } from '../interfaces/appInterfaces';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import { useTheme } from '@react-navigation/native';

interface Props {
     menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem }: Props ) => {

     const navigation = useNavigation();
     const { colors } = useTheme();

     return (
          <TouchableOpacity
               activeOpacity={0.8}
               onPress={() => navigation.navigate( menuItem.component )}
          >
               <View style={ styles.container }>
                    <Icon
                         name={ menuItem.icon }
                         color="grey"
                         size={ 27 }
                    />

                    <Text style={{ 
                         ...styles.itemText,
                         color: colors.text
                    }}>
                         { menuItem.name }
                    </Text>

                    <View style={{ flex: 1 }} />

                    <Icon
                         name="chevron-forward-outline"
                         color="grey"
                         size={ 27 }
                    />
               </View>
          </TouchableOpacity>
     )
}

const styles = StyleSheet.create({
     container: {
          flexDirection: 'row'
     },
     itemText: {
          marginLeft: 10,
          fontSize: 19
     }
});
