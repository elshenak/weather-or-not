import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import BlueLayoutMinimized from "../components/BlueLayoutMinimized";
import SevenDayForecast from "../components/SevenDayForecast";
import { location, sevenDayForecast } from "../__mocks__";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c0c1c",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  subtitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  icon: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});

function SevenDayScreen() {
  return (
    <View style={styles.container}>
      <BlueLayoutMinimized
        city={location}
        wind={13}
        humidity={24}
        precipitation={87}
      />

      <StatusBar style="auto" />

      <View
        style={{
          width: "100%",
          marginVertical: 15,
          overflow: "visible",
          flexDirection: "column",
        }}
      >
        {sevenDayForecast.map(({ day, forecast, temperature }) => (
          <SevenDayForecast
            key={day}
            day={day}
            forecast={forecast}
            temperature={temperature}
          />
        ))}
      </View>
    </View>
  );
}

export default SevenDayScreen;
