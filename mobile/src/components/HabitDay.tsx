import {
  TouchableOpacity,
  TouchableOpacityProps,
  Dimensions,
  View,
} from "react-native";

const weekDays = 7;
const screenHorizontalPadding = (32 * 2) / 5;

export const daysMarginBetween = 8;
export const daySize =
  Dimensions.get("screen").width / weekDays - (screenHorizontalPadding + 5);

interface HabitDayProps extends TouchableOpacityProps {
  isPlaceholder?: boolean;
}

export default function HabitDay({ isPlaceholder, ...rest }: HabitDayProps) {
  return (
    <>
      {!isPlaceholder ? (
        <TouchableOpacity
          {...rest}
          activeOpacity={0.7}
          className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800"
          style={{ width: daySize, height: daySize }}
        />
      ) : (
        <View
          className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
          style={{ width: daySize, height: daySize }}
        />
      )}
    </>
  );
}
