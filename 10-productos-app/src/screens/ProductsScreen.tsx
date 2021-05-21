import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { ProductsContext } from '../context/ProductsContext'

export const ProductsScreen = () => {

     const { products, loadProducts } = useContext( ProductsContext );

     // TODO: Pull to refresh

     return (
          <View style={{ flex: 1, marginHorizontal: 10 }}>

               <FlatList
                    data={ products }
                    keyExtractor={ (p) => p._id }
                    renderItem={ ({item}) => (
                         <Text style={ styles.productName }>{ item.nombre }</Text>
                    )}
                    ItemSeparatorComponent={ () => (
                         <TouchableOpacity
                              activeOpacity={ 0.8 }
                         >
                              <View style={ styles.itemSeparator }/>
                         </TouchableOpacity>
                    )}
               />

          </View>
     )
}

const styles = StyleSheet.create({
     productName: {
          fontSize: 20
     },
     itemSeparator: {
          borderBottomWidth: 2,
          borderBottomColor: 'rgba(0,0,0,0.1)',
          marginVertical: 5 
     }
});
