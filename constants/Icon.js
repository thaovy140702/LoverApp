import BackButton from "../components/button/BackButton";
import colors from "./colors";
import {MaterialIcons, MaterialCommunityIcons} from "@expo/vector-icons"
import { TouchableOpacity } from "react-native";

export default {}
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

export { backIcon, editIcon, mapIcon}

