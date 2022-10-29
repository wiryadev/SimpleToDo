import React from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"

const TextField = ({
  label,
  onChangeText,
  ...props
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        {...props} 
        />
    </View>
  )
}

export default TextField

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: '#020202',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
  }
})