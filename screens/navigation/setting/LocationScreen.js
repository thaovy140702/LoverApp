import {
  View,
  Text,
  Switch,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MyStyles from "../../../constants/MyStyles";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../../../constants/colors";
import usersData from "../data/usersData";

const LocationScreen = () => {
  const [dataSource, setDataSource] = useState(usersData);

  const handleSwitchValueChange = (id) => {
    const newData = dataSource.map((data) => {
      data.locationSetting.forEach((location) => {
        if (location.id === id) {
          location.setDefault = true;
        } else {
          location.setDefault = false;
        }
      });
      return data;
    });
    setDataSource(newData);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{ flex: 1, padding: 20 }}>
        {dataSource.map((user) => {
          if (user.id === 1) {
            return user.locationSetting.map((location) => (
              <TouchableOpacity
                key={location.id}
                style={styles.border}
                onPress={() => handleSwitchValueChange(location.id)}
              >
                <View style={styles.borderAddress}>
                  <View style={{ flexDirection: "row" }}>
                    <FontAwesome name="heart" size={24} color={colors.pink} />
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={[
                          MyStyles.text_md_bold,
                          {
                            paddingHorizontal: 10,
                            borderRightWidth: 1,
                            borderRightColor: colors.lightGrey,
                          },
                        ]}
                      >
                        {location.name}
                      </Text>
                      <Text
                        style={[
                          MyStyles.text_md_grey,
                          { paddingHorizontal: 5 },
                        ]}
                      >
                        {location.number}
                      </Text>
                    </View>
                  </View>
                  <Text style={[MyStyles.text_sm, { marginTop: 10 }]}>
                    {location.address}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    paddingEnd: 10,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={[
                      MyStyles.text_sm,
                      {
                        color: location.setDefault ? colors.pink : colors.black,
                      },
                    ]}
                  >
                    {location.setDefault ? "Default" : "Set as default"}
                  </Text>
                  <Switch
                    trackColor={{
                      false: colors.grey,
                      true: colors.lightPink,
                    }}
                    thumbColor={
                      location.setDefault ? colors.pink : colors.lightGrey
                    }
                    ios_backgroundColor={colors.lightGrey}
                    onValueChange={() => handleSwitchValueChange(location.id)}
                    value={location.setDefault}
                  />
                </View>
              </TouchableOpacity>
            ));
          }
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  border: {
    width: "100%",
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 10,
    elevation: 10,
  },
  borderAddress: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
  },
});
