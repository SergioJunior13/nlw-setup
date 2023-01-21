import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

interface CheckBoxProps extends TouchableOpacityProps {
  checked?: boolean;
  text: string;
}

export function CheckBox({ text, checked = false, ...rest }: CheckBoxProps) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.7}
      className="flex-row mb-2 items-center"
    >
      {checked ? (
        <View className="h-8 w-8 bg-green-600 rounded-lg items-center justify-center">
          <Feather name="check" size={20} color={colors.white} />
        </View>
      ) : (
        <View className="h-8 w-8 bg-zinc-900 rounded-lg" />
      )}

      <Text className="text-white font-semibold text-base ml-2.5">{text}</Text>
    </TouchableOpacity>
  );
}
