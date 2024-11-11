import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { MenuItem } from './App';

interface Props {
  menuItems: MenuItem[];
}

const GuestMenuScreen: React.FC<Props> = ({ menuItems = [] }) => {
  const route = useRoute<RouteProp<{ params: { course: string } }, 'params'>>();
  const { course } = route.params;

  const filteredItems = menuItems?.filter((item) => item.course === course) || [];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{course} Menu</Text>
      {filteredItems.length > 0 ? (
        <FlatList
          data={filteredItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.priceText}>${item.price.toFixed(2)}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noItemsText}>No items found for this course.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b2f',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#e43f5a',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    backgroundColor: '#32344a',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  itemText: {
    color: '#f4f4f8',
    fontSize: 18,
  },
  priceText: {
    color: '#e43f5a',
    fontSize: 18,
    fontWeight: '600',
  },
  noItemsText: {
    color: '#f4f4f8',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default GuestMenuScreen;