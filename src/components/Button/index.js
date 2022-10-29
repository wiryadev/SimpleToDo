import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 24,
    backgroundColor: '#8598FF',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFF',
  },
})