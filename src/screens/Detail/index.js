import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Spacer from '../../components/Spacer'

const DetailScreen = ({ route }) => {

  const toDo = route.params

  return (
    <View style={styles.page}>
      <Text style={styles.title}>{toDo.title}</Text>
      <Spacer height={16}/>
      <Text style={styles.content}>{toDo.content}</Text>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    padding: 24,
  },
  title: {
    color: '#020202',
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    color: '#020202',
    fontSize: 18,
    fontWeight: '500'
  },
})