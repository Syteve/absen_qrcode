import {useState} from 'react';
import {Button, Dialog, Portal, Text, TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

// global data
import {setLink} from './redux/data/link';
import {AppDispatch} from './redux/store';

// ui
import Login from './src/auth/login';
import Home from './src/home/mahasiswa';
import Profile from './src/home/mahasiswa/profile';
import Navbar from './src/home/navigator';

export default function App() {
  const [visible, setVisible] = useState<boolean>(true);

  const setUrlProps = {
    visible: visible,
    setVisible: setVisible,
  };

  return visible ? <ModalSetUrl {...setUrlProps} /> : <IsLogin />;
}

interface modalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalSetUrl({visible, setVisible}: modalProps) {
  const [value, setValue] = useState<string>('');
  const dispatch: AppDispatch = useDispatch();

  function setGlobalUrl() {
    dispatch(setLink(value));
    setVisible(!visible);
  }

  return (
    <Portal>
      <Dialog visible={visible}>
        <Dialog.Title>Insert Url</Dialog.Title>
        <Dialog.Content>
          <TextInput
            inputMode="url"
            autoCorrect={false}
            value={value}
            onChangeText={setValue}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={setGlobalUrl}>Done</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

function IsLogin() {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  function submitData() {
    setIsLogin(dataBefore => !dataBefore);
  }

  return isLogin ? <Navbar /> : <Login submit={submitData} />;
}
