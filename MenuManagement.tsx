import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { MenuItem } from './App';

interface Props {
  menuItems: MenuItem[];
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
}

const ManageMenuScreen: React.FC<Props> = ({ menuItems = [], setMenuItems }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('Starters');

  const addItem = () => {
    if (name && price) {
      const newItem: MenuItem = {
        id: (menuItems.length + 1).toString(),
        name,
        price: parseFloat(price),
        course,
      };
      setMenuItems([...menuItems, newItem]);
      setName('');
      setPrice('');
    } else {
      alert('Please enter a valid name and price.');
    }
  };

  const removeItem = (id: string) => {
    setMenuItems(menuItems.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Manage Menu</Text>
      <TextInput
        style={styles.input}
        placeholder="Item Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />
      <TouchableOpacity style={styles.addButton} onPress={addItem}>
        <Text style={styles.buttonText}>Add Item</Text>
      </TouchableOpacity>

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{`${item.name} - R${item.price.toFixed(2)}`}</Text>
            <TouchableOpacity style={styles.removeButton} onPress={() => removeItem(item.id)}>
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
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
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#f4f4f8',
    borderRadius: 10,
    padding: 12,
    marginVertical: 10,
    fontSize: 16,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#e43f5a',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginVertical: 8,
    alignItems: 'center',
    shadowColor: '#e43f5a',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#32344a',
    padding: 15,
    borderRadius: 12,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  itemText: {
    color: '#f4f4f8',
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: '#f64c72',
    padding: 8,
    borderRadius: 10,
    shadowColor: '#f64c72',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default ManageMenuScreen;