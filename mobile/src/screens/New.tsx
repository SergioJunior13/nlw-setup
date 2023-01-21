import { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import colors from "tailwindcss/colors";
import { BackButton } from "../components/BackButton";
import { CheckBox } from "../components/CheckBox";
import { Feather } from "@expo/vector-icons";

const avaliableWeekDays = [
  "Domingo",
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sábado",
];

export function New() {
  const [weekDays, setWeekDays] = useState<number[]>([]);

  function handleToggleWeekDays(weekDayIndex: number) {
    if (weekDays.includes(weekDayIndex)) {
      setWeekDays(prevState =>
        prevState.filter(weekDay => weekDay !== weekDayIndex)
      );
    } else {
      setWeekDays(prevState => [...prevState, weekDayIndex]);
    }
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        overScrollMode="never"
      >
        <BackButton />

        <Text className="mt-6 text-white font-extrabold text-3xl">
          Criar hábito
        </Text>

        <Text className="mt-6 text-white font-extrabold text-base">
          Qual seu comprometimento?
        </Text>
        <TextInput
          className="h-12 pl-4 rounded-lg mt-3 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-green-600"
          placeholder="ex.: Exercitar, beber água, etc..."
          placeholderTextColor={colors.zinc[400]}
        />

        <Text className="mt-4 mb-3 text-white font-extrabold text-base">
          Qual a recorrência?
        </Text>

        {avaliableWeekDays.map((weekDay, index) => (
          <CheckBox
            key={weekDay}
            text={weekDay}
            checked={weekDays.includes(index)}
            onPress={() => handleToggleWeekDays(index)}
          />
        ))}

        <TouchableOpacity
          activeOpacity={0.7}
          className="w-full flex-row mt-6 bg-green-600 rounded-lg p-4 items-center justify-center"
        >
          <Feather name="check" size={20} color={colors.white} />
          <Text className="font-semibold text-base text-white ml-1">
            Confirmar
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
