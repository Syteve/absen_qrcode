import {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button, TextInput, Checkbox} from 'react-native-paper';

interface value {
  nim: string;
  password: string;
  remember: boolean;
}

export default function App() {
  const [value, setValue] = useState<value>({
    nim: '',
    password: '',
    remember: false,
  });

  function changeValue(key: string, value: string | boolean): void {
    setValue(value => {
      return {
        ...value,
        [key]: value,
      };
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textcenter} variant="displayLarge">
        Login
      </Text>
      <TextInput
        style={styles.widthfull}
        label="NIM"
        value={value.nim}
        onChangeText={text => changeValue('nim', text)}
      />
      <TextInput
        style={styles.widthfull}
        label="Password"
        value={value.password}
        onChangeText={text => changeValue('password', text)}
      />
      <Checkbox.Item
        style={styles.widthfull}
        onPress={() => changeValue('remember', !value.remember)}
        label="remember me!"
        status={value.remember ? 'checked' : 'unchecked'}
      />
      <Button mode='outlined' style={styles.widthfull}>Login</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  textcenter: {
    textAlign: 'center'
  },
  widthfull: {
    width: '100%',
  },
});
