import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ComingButton, FinishButton } from '../../components/button/TinyButton'
import BackButton from '../../components/button/BackButton'
import { Feather } from '@expo/vector-icons';

const UserScheduleScreen = () => {
  // const [selected, setSelected] = useState(undefined);
  // const data = [
  //   { label: 'One', value: '1' },
  //   { label: 'Two', value: '2' },
  //   { label: 'Three', value: '3' },
  //   { label: 'Four', value: '4' },
  //   { label: 'Five', value: '5' },
  // ];
  return (
    <SafeAreaView>
      <View style={styles.headerStyle}>
        <View style={{marginStart: 20}}>
          {/* <View>
          {!!selected && (
          <Text>
          Selected: label = {selected.label} and value = {selected.value}
          </Text>
          )}
          <Dropdown label="Select Item" data={data} onSelect={setSelected} />
          </View> */}
        
        </View>
          <Feather name="bell" size={24} color="black" />
      </View>

    </SafeAreaView>
  )
}

export default UserScheduleScreen

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    paddingEnd: 30,
    alignItems: 'center',
    paddingVertical: 35
  },
})