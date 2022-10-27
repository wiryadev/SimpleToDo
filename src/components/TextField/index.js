import React from "react"
import { Text, TextInput, View } from "react-native"

const TextField = ({
  label,
  placeholder,
  onChangeText,
  ...props
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        {...props} />
    </View>
  )
}

export default TextField

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: '#020202',
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
  }
})