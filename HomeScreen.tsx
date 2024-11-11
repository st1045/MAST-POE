import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MenuItem } from './App';
import { useNavigation } from '@react-navigation/native';

interface Props {
  menuItems: MenuItem[];
}

const HomeScreen: React.FC<Props> = ({ menuItems }) => {
  const navigation = useNavigation();

  const calculateAveragePrice = (course: string) => {
    const filteredItems = menuItems.filter(item => item.course === course);
    const totalPrice = filteredItems.reduce((acc, item) => acc + item.price, 0);
    return filteredItems.length ? (totalPrice / filteredItems.length).toFixed(2) : '0.00';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Average Menu Prices</Text>
      <View style={styles.averagePriceContainer}>
        <Text style={styles.averagePriceText}>Starters: R{calculateAveragePrice('Starters')}</Text>
        <Text style={styles.averagePriceText}>Mains: R{calculateAveragePrice('Mains')}</Text>
        <Text style={styles.averagePriceText}>Desserts: R{calculateAveragePrice('Desserts')}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Manage Menu')}>
          <Text style={styles.buttonText}>Manage Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Guest Menu', { course: 'Starters' })}>
          <Text style={styles.buttonText}>View Starters</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Guest Menu', { course: 'Mains' })}>
          <Text style={styles.buttonText}>View Mains</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Guest Menu', { course: 'Desserts' })}>
          <Text style={styles.buttonText}>View Desserts</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 26,
    fontWeight: '700',
    color: '#ffbf00',
    textAlign: 'center',
    marginBottom: 20,
  },
  averagePriceContainer: {
    backgroundColor: '#282828',
    borderRadius: 12,
    padding: 16,
    marginBottom: 30,
    width: '90%',
    alignItems: 'center',
  },
  averagePriceText: {
    color: '#f4f4f4',
    fontSize: 18,
    marginVertical: 5,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FF7E5F',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 8,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;
