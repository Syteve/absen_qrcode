import { IconSource } from "react-native-paper/lib/typescript/components/Icon";
import { StyleSheet } from "react-native";

export interface value {
    nim: string;
    password: string;
    remember: boolean;
}

export interface hidePassword {
    condition: boolean;
    icon: IconSource;
}

export interface props {
  submit: () => void
}

export type changeValue = (key: string, value: string | boolean) => void

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '2.5%',
        justifyContent: 'center',
        gap: 10,
	backgroundColor: '#2d2d2d'
    },
    textcenter: {
        textAlign: 'center',
    },
    widthfull: {
        width: '100%',
	backgroundColor: 'transparent',
    },
border: {
	borderColor: 'white'
},
    textLeft: {
        fontSize: 18,
        textAlign: 'left',
    },
    button: {
	width: '100%',
        backgroundColor: 'blue',
    },
});
