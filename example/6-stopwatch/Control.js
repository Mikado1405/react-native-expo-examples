import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Control({
  isRunning,
  handleLeftButtonPress,
  handleRightButtonPress,
}) {
  return (
    <>
      <TouchableOpacity
        style={[
          styles.controlButtonBorder,
          { backgroundColor: isRunning ? "#333333" : "#1c1c1e" },
        ]}
        onPress={handleLeftButtonPress}
      >
        <View style={styles.controlButton}>
          <Text style={{ color: isRunning ? "#fff" : "#9d9ca2" }}>
            {isRunning ? "Vòng" : "Đặt lại"}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.controlButtonBorder,
          { backgroundColor: isRunning ? "#340e0d" : "#0a2a12" },
        ]}
        onPress={handleRightButtonPress}
      >
        <View style={styles.controlButton}>
          <Text style={{ color: isRunning ? "#ea4c49" : "#37d05c" }}>
            {isRunning ? "Dừng" : "Bắt đầu"}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

const CENTER_STYLE = {
  justifyContent: "center",
  alignItems: "center",
};

const styles = StyleSheet.create({
  controlButtonBorder: {
    width: 70,
    height: 70,
    borderRadius: 70,
    ...CENTER_STYLE,
  },
  controlButton: {
    width: 65,
    height: 65,
    borderRadius: 65,
    borderColor: "#000",
    borderWidth: 1,
    ...CENTER_STYLE,
  },
});
