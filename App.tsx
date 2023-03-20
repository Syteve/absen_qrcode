import {createContext, useState} from 'react';

// ui
import Login from './src/login';
import Home from './src/home';

// data
import {users} from './users';
import {data, datalogin, globalData, histori} from './interfaces/appinterfaces';

// defaultvalue dari globaldata
export const GlobalData = createContext<globalData>({
  data: {},
  checkUser: () => true,
  logout: () => {},
  histori: [],
  addHistori: () => {},
});

export default function App() {
  // login dan logout
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [data, setData] = useState<data>({
    id: 1,
    name: '',
  });

  /**
   * melakukan pengecekan data login berdasarkan variable users
   * status berisikan data boolean yang di hasilkan dari pengecekan
   * apakah username dan password sesuai dengan yang ada di variable users
   * juka ada maka setData akan dijalankan
   * setData digunakan unurk membuat globaldata name dan id yang akan digunakan
   * di tampilan profile
   * setelah itu variable condition akan di return sehingga menjadikan variable status
   * menjadi bertipe data boolean
   * kemudian setIsLogin digunakan untuk mengubah tampilan dari tampilan login ke tampilan home
   * return condition digunakan di tampilan home untuk memberi tahu sistem apakah username
   * dan password sudah benar
   * jika benar akan membuat tampilan loading
   * jika salah akan menampilkan dialog yang bertuliskan username atau password salah
   */
  function checkUser(value: datalogin) {
    const status: boolean = users.some(user => {
      const {id, name, username, password} = user;
      const condition =
        value.username === username && value.password === password;

      if (condition) setData(databefore => ({...databefore, id, name}));

      return condition;
    });

    setIsLogin(status);
    return status;
  }

  /**
   * melakukan logout
   * setIsLogin(false) digunakan untuk mengubah tampilan home ke tampilan login
   * setData digunakan unutk menghapus semua data yang telah dibuat pada saat function checkUser
   */
  function logout() {
    setIsLogin(false);
    setData(databefore => {
      return {...databefore, name: ''};
    });
  }

  // histori
  /**
   * digunakan untuk melakukan pencatatan ketika selesai melakukan scan qrcode
   * data dari histori sendiri berisi id, url dan date
   * id digunakan untuk melakukan pensortiran jika dalam satu perangkat terdapat
   * banyak users yang digunakan
   */
  const [histori, setHistori] = useState<histori[]>([]);
  function addHistori(value: histori) {
    setHistori(databefore => {
      return [...databefore, value];
    });
  }

  return (
    <GlobalData.Provider value={{data, checkUser, logout, histori, addHistori}}>
      {isLogin ? <Home /> : <Login />}
    </GlobalData.Provider>
  );
}
