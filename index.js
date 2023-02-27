/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper'
import { name as appName } from './app.json';

import { Provider as ReduxProvider } from 'react-redux'
import { store } from './redux/store'

import App from './App';

export default function Main() {
    return (
        <PaperProvider>
            <ReduxProvider store={store}>
                <App />
            </ReduxProvider>
        </PaperProvider>
    )
}

AppRegistry.registerComponent(appName, () => Main);
