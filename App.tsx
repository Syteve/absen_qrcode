import {createContext, useState} from 'react';
import {Button, Dialog, Portal, TextInput} from 'react-native-paper';

import Login from './src/auth/login';
import Home from './src/home/mahasiswa';
import Profile from './src/home/mahasiswa/profile';
import Navbar from './src/home/navigator';

export const Url = createContext('');

export default function App() {
  const [url, setUrl] = useState('');
  const [visible, setVisible] = useState<boolean>(true);

  const setUrlProps = {
    url: url,
    setUrl: setUrl,
    visible: visible,
    setVisible: setVisible,
  };

  return (
    <Url.Provider value={url}>
      {visible ? <SetUrl {...setUrlProps} /> : <IsLogin url={url} />}
    </Url.Provider>
  );
}

interface props {
  url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

function SetUrl({url, setUrl, visible, setVisible}: props) {
  return (
    <Portal>
      <Dialog visible={visible}>
        <Dialog.Title>Insert Url</Dialog.Title>
        <Dialog.Content>
          <TextInput value={url} onChangeText={setUrl} autoCorrect={false} />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => setVisible(!visible)}>Done</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

function IsLogin({url}: {url: string}) {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [render, setRender] = useState({home: Home, profile: Profile});
  const route = [
    {key: 'home', title: 'home', focusedIcon: 'home'},
    {key: 'profile', title: 'Setting', focusedIcon: 'cog'},
  ];

  function submitData() {
    setIsLogin(dataBefore => !dataBefore);
  }

  return isLogin ? (
    <Navbar route={route} render={render} />
  ) : (
    <Login submit={submitData} />
  );
}
