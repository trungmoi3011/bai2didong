import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';

const App = () => {
  const handlePress = () => {
    Alert.alert("Hello");
  };

  return (
    <View style={styles.container}>
      <Button
        title="Press me"
        onPress={handlePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
