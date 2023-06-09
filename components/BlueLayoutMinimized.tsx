import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import Divider from "./Divider";
import WeatherDetails from "./WeatherDetails";

const styles = StyleSheet.create({
  container: {
    borderBottomRightRadius: 90,
    borderBottomLeftRadius: 90,
    width: "100%",
    height: "41%",
  },
  blue: {
    borderBottomRightRadius: 90,
    borderBottomLeftRadius: 90,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  text: {
    color: "#ffffff",
    borderWidth: 1,
    borderColor: "#ffffff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    fontSize: 10,
  },
  icon: {
    marginTop: 30,
    marginBottom: 20,
  },
  temperature: {
    color: "#ffffff",
    fontSize: 60,
    fontWeight: "bold",
  },
  description: {
    color: "#ffffff",
    fontSize: 20,
  },
  date: {
    color: "#ffffff",
    fontSize: 15,
  },
  window: {
    textAlignVertical: "center",
    flexDirection: "column",
  },
  day: {
    fontSize: 25,
    color: "#ffffff",
  },
  forecast: {
    fontSize: 15,
    color: "#ffffff",
  },
});

type BlueLayoutProps = {
  city: string;
  wind: number;
  humidity: number;
  precipitation: number;
};

function BlueLayoutMinimized({
  city,
  wind,
  humidity,
  precipitation,
}: BlueLayoutProps) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          "#60bcf4",
          "#50ace3",
          "#4c9ce4",
          "#4a85da",
          "#3264ec",
          "#3264ec",
        ]}
        style={styles.blue}
      >
        <Text style={styles.text}>
          <Icon name="location" color="white" size={10} />
          {city}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "75%",
            paddingTop: 20,
          }}
        >
          <Icon name="cloudy-night" color="white" size={110} />
          <View style={styles.window}>
            <Text style={styles.day}>Tomorrow</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.temperature}>{`${20}`}</Text>
              <Text
                style={{
                  color: "#ffffff",
                  fontSize: 35,
                }}
              >
                {`/${17}°`}
              </Text>
            </View>

            <Text style={styles.forecast}>Rainy - Cloudy</Text>
          </View>
        </View>
        <Divider />
        <WeatherDetails
          wind={wind}
          humidity={humidity}
          precipitation={precipitation}
        />
      </LinearGradient>
    </View>
  );
}

export default BlueLayoutMinimized;
