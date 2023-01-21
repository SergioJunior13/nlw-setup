import { View, Text, ScrollView } from "react-native";
import HabitDay, { daySize } from "../components/HabitDay";
import Header from "../components/Header";
import { generateRangeDatesFromYearStart } from "../utils/generate-dates-from-year-begging";
import { useNavigation } from "@react-navigation/native";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const datesFromYearBegging = generateRangeDatesFromYearStart();

const minimumDaysAmount = 16 * 7;
const daysToFill = minimumDaysAmount - datesFromYearBegging.length;

export default function Home() {
  const { navigate } = useNavigation();

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />
      <View className="flex-row mt-6 mb-2">
        {weekDays.map((weekDay, i) => (
          <Text
            className="text-zinc-400 text-xl font-bold text-center mx-1"
            style={{ width: daySize, height: daySize }}
            key={`${weekDay}-${i}`}
          >
            {weekDay}
          </Text>
        ))}
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="flex-row flex-wrap">
          {datesFromYearBegging.map((date, i) => (
            <HabitDay
              key={date.toISOString()}
              onPress={() => navigate("habit", { date: date.toISOString() })}
            />
          ))}
          {daysToFill > 0 &&
            Array.from({ length: daysToFill }).map((_, i) => (
              <HabitDay key={i} isPlaceholder />
            ))}
        </View>
      </ScrollView>
    </View>
  );
}
