import {useState} from 'react';
import Login from './src/auth/login';
import Home from './src/home/mahasiswa';
import Setting from './src/home/mahasiswa/setting';
import Navbar from './src/home/navigator';

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [route, setRoute] = useState([
    {key: 'home', title: 'home', focusedIcon: 'home'},
    {key: 'Setting', title: 'Setting', focusedIcon: 'cog'},
  ]);
  const [render, setRender] = useState({
    home: Home,
    Setting: Setting,
  });

  function submitData() {
    setIsLogin(dataBefore => !dataBefore)
  }

  return (
    <>
      {isLogin ? (
        <Navbar route={route} render={render} />
      ) : (
        <Login submit={submitData} />
      )}
    </>
  );
}