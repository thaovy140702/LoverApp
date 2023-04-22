import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import colors from '../constants/colors';
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Each child in a list should have a unique \"key\" prop"]);

const ratingOptions = [1, 2, 3, 4, 5];

const Rating = props => {
  return (
    <View style={{flexDirection: 'row'}}>
      {
        ratingOptions.map((option) => (
          <FontAwesome name={props.rate >= option ? 'heart' : 'heart-o'} 
                    size={16} 
                    color={colors.pink}
                    style={{margin: 1.5}} />
        ))
      }
      </View>
  )
}

export default Rating

const styles = StyleSheet.create({})