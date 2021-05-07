import React from 'react';
import { FlatList, View } from 'react-native';

import { styles } from '../theme/appTheme';
import { menuItems } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';
import { FlatListMenuItem } from '../components/FlatListMenuItem';


export const HomeScreen = () => {

     const itemSeparator = () => {
          return (
               <View
                    style={{
                         borderBottomWidth: 5,
                         opacity: 0.5,
                         marginVertical: 8
                    }}
               />
          )
     }
     
     return (
          <View style={{ flex: 1, ...styles.globalMargin }}>             

               <FlatList 
                    data={ menuItems }
                    renderItem={ ({ item }) => <FlatListMenuItem menuItem={ item } /> }
                    keyExtractor={ (item) => item.name }
                    ListHeaderComponent={ <HeaderTitle title="Opciones de menú" /> }
                    ItemSeparatorComponent={ itemSeparator }
               />

          </View>
     )
}
