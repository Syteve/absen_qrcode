import {View, ScrollView, StyleSheet} from 'react-native';
import {Button, Divider, Text} from 'react-native-paper';

export default function Profile() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profile}>
        <Text>Image</Text>
        <View>
          <Text variant="labelLarge">Profile Name</Text>
          <Text>Profile number</Text>
        </View>
      </View>
      <Divider />
      <Button icon="logout">Logout</Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'skyblue',
  },
});
