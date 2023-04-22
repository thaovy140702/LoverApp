import BackButton from "../components/button/BackButton";
import colors from "./colors";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  SimpleLineIcons,
  Entypo
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const backIcon = () => {
  return <BackButton />;
};

const mapIcon = () => {
  return (
    <TouchableOpacity>
      <MaterialCommunityIcons
        name="map-plus"
        size={24}
        color={colors.lightPink}
      />
    </TouchableOpacity>
  );
};

const editIcon = () => {
  return (
    <TouchableOpacity>
      <MaterialIcons name="fact-check" size={24} color={colors.pink} />
    </TouchableOpacity>
  );
};

const notificationIcon = () => {
  return (
    <TouchableOpacity>
      <MaterialCommunityIcons name="bell-outline" size={24} color="black" />
    </TouchableOpacity>
  );
};
const maleIcon = () => {
    return (
    <SimpleLineIcons name="symbol-male" size={24} color="black" />
)};

const femaleIcon = () => {
    return (<SimpleLineIcons name="symbol-female" size={24} color="black" />)
};

const dotIcon = () => {
    return (<Entypo name="dot-single" size={24} color="green" />)
};

export { backIcon, editIcon, mapIcon, maleIcon, femaleIcon, dotIcon, notificationIcon };
