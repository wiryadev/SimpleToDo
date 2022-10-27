import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ToDoItem = ({
  title,
  desc,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  )
}

export default ToDoItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#020202',
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
  title: {
    fontSize: 16,
    color: '#020202',
  },
  desc: {
    fontSize: 12,
    color: '#020202',
  },
})