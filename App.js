import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
  Image,
} from 'react-native';

const categories = [
  {
    id: '1',
    name: 'Exercise',
    tasks: 12,
    icon: require('C:\Users\HP\Desktop\rn3\exercise.jpg'),
  },
  {
    id: '2',
    name: 'Study',
    tasks: 12,
    icon: require('C:\Users\HP\Desktop\rn3\study.jpg'),
  },
  {
    id: '3',
    name: 'Code',
    tasks: 10,
    icon: require('C:\Users\HP\Desktop\rn3\code.jpg'),
  },
  {
    id: '4',
    name: 'Cook',
    tasks: 8,
    icon: require('C:\Users\HP\Desktop\rn3\cook.jpg'),
  },
  {
    id: '5',
    name: 'Read',
    tasks: 15,
    icon: require('C:\Users\HP\Desktop\rn3\read.jpg'),
  },
  {
    id: '6',
    name: 'Clean',
    tasks: 6,
    icon: require('C:\Users\HP\Desktop\rn3\clean.jpg'),
  },
  {
    id: '7',
    name: 'Music',
    tasks: 4,
    icon: require('C:\Users\HP\Desktop\rn3\music.jpg'),
  },
  {
    id: '8',
    name: 'Art',
    tasks: 11,
    icon: require('C:\Users\HP\Desktop\rn3\art.jpg'),
  },
];

const ongoingTasks = [
  {
    id: '1',
    name: 'Mobile App Development',
  },
  {
    id: '2',
    name: 'Web Development',
  },
  {
    id: '3',
    name: 'Push Ups',
  },
  {
    id: '4',
    name: 'Learn React Native',
  },
  {
    id: '5',
    name: 'Grocery Shopping',
  },
  {
    id: '6',
    name: 'Book Appointment',
  },
  {
    id: '7',
    name: 'Pay Bills',
  },
  {
    id: '8',
    name: 'Write Blog Post',
  },
  {
    id: '9',
    name: 'Learn Python',
  },
  {
    id: '10',
    name: 'Design UI',
  },
  {
    id: '11',
    name: 'Workout',
  },
  {
    id: '12',
    name: 'Read News',
  },
  {
    id: '13',
    name: 'Watch Movie',
  },
  {
    id: '14',
    name: 'Call Friend',
  },
  {
    id: '15',
    name: 'Plan Trip',
  },
];

const CategoryCard = ({ category }) => {
  return (
    <View style={styles.categoryCard}>
      <Image source={category.icon} style={styles.categoryIcon} />
      <Text style={styles.categoryTitle}>{category.name}</Text>
      <Text style={styles.categoryTasks}>{category.tasks} Tasks</Text>
    </View>
  );
};

const OngoingTaskItem = ({ task }) => {
  return (
    <View style={styles.ongoingTaskItem}>
      <Text style={styles.ongoingTaskTitle}>{task.name}</Text>
    </View>
  );
};

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Hello, Devs</Text>
        <Text style={styles.headerTasks}>14 tasks today</Text>
        <Image source={require('./assets/user.png')} style={styles.userIcon} />
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          onChangeText={handleSearch}
          value={searchQuery}
        />
        <Image
          source={require('./assets/filter.png')}
          style={styles.filterIcon}
        />
      </View>
      <View style={styles.categoriesContainer}>
        <Text style={styles.categoriesTitle}>Categories</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesScroll}
        >
          {filteredCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.ongoingTasksContainer}>
        <Text style={styles.ongoingTasksTitle}>Ongoing Task</Text>
        <FlatList
          data={ongoingTasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <OngoingTaskItem task={item} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerTasks: {
    fontSize: 16,
    color: '#888',
  },
  userIcon: {
    width: 40,
    height: 40,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
    backgroundColor: '#fff',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  filterIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  categoriesContainer: {
    padding: 20,
    backgroundColor: '#fff',
  },
  categoriesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoriesScroll: {
    flexDirection: 'row',
  },
  categoryCard: {
    width: 120,
    height: 120,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  categoryIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  categoryTasks: {
    fontSize: 14,
    color: '#888',
  },
  ongoingTasksContainer: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  ongoingTasksTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ongoingTaskItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  ongoingTaskTitle: {
    fontSize: 16,
  },
});

export default App;