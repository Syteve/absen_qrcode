import { StyleSheet } from 'react-native';

export interface route {
  key: string
  title: string
  focusedIcon: string
}

export interface render {
  [key: string]: () => JSX.Element;
}

export interface props {
  route: route[]
  render: render
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  backgroundBlue: {
    backgroundColor: '#007dd6'
  }
})