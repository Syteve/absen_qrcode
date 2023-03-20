/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { Provider as PaperProvider, MD3DarkTheme } from 'react-native-paper'
import { name as appName } from './app.json';

import App from './App';

const theme = {
    ...MD3DarkTheme,
    colors: {
        primary: "#9ccaff",
        onPrimary: "#003257",
        primaryContainer: "#00497b",
        onPrimaryContainer: "#d0e4ff",
        secondary: "#bac8db",
        onSecondary: "#253140",
        secondaryContainer: "#3b4857",
        onSecondaryContainer: "#d6e4f7",
        tertiary: "#88ceff",
        onTertiary: "#00344d",
        tertiaryContainer: "#004c6d",
        onTertiaryContainer: "#c8e6ff",
        error: "#ffb4ab",
        onError: "#690005",
        errorContainer: "#93000a",
        onErrorContainer: "#ffdad6",
        background: "#1a1c1e",
        onBackground: "#e2e2e6",
        surface: "#1a1c1e",
        onSurface: "#e2e2e6",
        surfaceVariant: "#42474e",
        onSurfaceVariant: "#c2c7cf",
        outline: "#8c9199",
        outlineVariant: "#42474e",
        shadow: "#000000",
        scrim: "#000000",
        inverseSurface: "#e2e2e6",
        inverseOnSurface: "#1a1c1e",
        inversePrimary: "#0062a1",
        elevation: {
            level0: "transparent",
            level1: "rgb(41, 33, 40)",
            level2: "rgb(48, 38, 46)",
            level3: "rgb(55, 42, 53)",
            level4: "rgb(57, 43, 55)",
            level5: "rgb(62, 46, 59)"
        },
        surfaceDisabled: "rgba(233, 224, 228, 0.12)",
        onSurfaceDisabled: "rgba(233, 224, 228, 0.38)",
        backdrop: "rgba(55, 46, 52, 0.4)"
    }
}

export default function Main() {
    return (
        <PaperProvider theme={theme}>
            <App />
        </PaperProvider>
    )
}

AppRegistry.registerComponent(appName, () => Main);
