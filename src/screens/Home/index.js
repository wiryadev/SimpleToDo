import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { FloatingAction } from "react-native-floating-action";
import Spacer from '../../components/Spacer';
import ToDoItem from '../../components/ToDoItem';
import { ToDoContext } from '../../contexts/ToDoContext';

const HomeScreen = ({ navigation }) => {

  const { toDos } = useContext(ToDoContext)

  console.log('todos', toDos)

  return (
    <View style={styles.page}>
      <Text style={styles.title}>Home</Text>
      <Spacer height={16} />
      <FlatList
        data={toDos}
        renderItem={({ item }) => (
          <ToDoItem
            title={item.title}
            content={item.content}
            onPress={() => navigation.navigate('DetailScreen', item)}
          />
        )}
      />
      <FloatingAction
        color='#8598FF'
        onPressMain={() => {
          navigation.navigate('AddToDoScreen')
        }}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#020202',
    marginTop: 24,
    marginStart: 24,
  }
})