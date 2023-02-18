import {useState} from 'react';
import {View} from 'react-native';
import {Text, Button, TextInput, Checkbox} from 'react-native-paper';

// data and datatype
import {changeValue, hidePassword, styles, value} from './logindata';

export default function Login() {
  // data
  const [value, setValue] = useState<value>({
    nim: '',
    password: '',
    remember: false,
  });
  const [hidePassword, setHidePassword] = useState<hidePassword>({
    condition: true,
    icon: 'eye',
  });

  // function
  const changeValue: changeValue = (key, value) => {
    setValue(databefore => ({...databefore, [key]: value}));
  };
  const clearNim = () => setValue(databefore => ({...databefore, nim: ''}));
  const changePasswordIcon = () => {
    setHidePassword(before => ({
      condition: !before.condition,
      icon: before.condition ? 'eye-off' : 'eye',
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textcenter} variant="displayLarge">
        Login
      </Text>

      <TextInput
        label="NIM"
        value={value.nim}
        style={styles.widthfull}
        maxLength={12}
	inputMode="numeric"
        onChangeText={text => changeValue('nim', text)}
        right={
          value.nim !== '' ? (
            <TextInput.Icon icon="close" onPress={clearNim} />
          ) : null
        }
      />

      <TextInput
        label="Password"
        value={value.password}
        style={styles.widthfull}
	underlineStyle={styles.border}
        maxLength={12}
        secureTextEntry={hidePassword.condition}
        onChangeText={text => changeValue('password', text)}
        right={
          value.password !== '' ? (
            <TextInput.Icon
              icon={hidePassword.icon}
              onPress={changePasswordIcon}
            />
          ) : null
        }
      />

      <Checkbox.Item
        label="remember me!"
        position="leading"
        labelStyle={styles.textLeft}
        status={value.remember ? 'checked' : 'unchecked'}
        onPress={() => changeValue('remember', !value.remember)}
      />

      <Button
        mode="elevated"
        contentStyle={styles.widthfull}
        style={styles.button}>
        Login
      </Button>
    </View>
  );
}
