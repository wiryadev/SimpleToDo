import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ToDoItem = ({
  title,
  content,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.clickable}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ToDoItem

const styles = StyleSheet.create({
  clickable: {
    marginHorizontal: 16,
    marginVertical: 4,
  },
  container: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 24,
    backgroundColor: '#8598FF',
  },
  title: {
    fontSize: 16,
    color: '#020202',
    fontWeight: '600',
  },
  content: {
    fontSize: 14,
    color: '#020202',
  },
})