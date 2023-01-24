import { StyleSheet, Text, View, Pressable, Button, Image } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ListItem } from "@rneui/themed";
import ScanCalendar from "./ScanCalendar";

export default function ScanList({
  index,
  name,
  price,
  styles,
  foodPriceArray,
  setFoodPriceArray,
}) {
  function handleRemove(index) {
    setFoodPriceArray([
      ...foodPriceArray.slice(0, index),
      ...foodPriceArray.slice(index + 1, foodPriceArray.length),
    ]);
  }
  return (
    <>
      <ListItem.Swipeable
        leftContent={(reset) => (
          <Pressable
            style={styles.swipeIcon}
            onPress={() => {
              handleRemove(index);
            }}
          >
            <Ionicons
              name="trash-bin-outline"
              size={30}
              color={"red"}
            ></Ionicons>
          </Pressable>
        )}
        // rightContent={(reset) => (
        //   <Pressable
        //     style={styles.swipeIcon}
        //     onPress={() => userBinned(id, auth.currentUser.uid)}
        //   >
        //     <Ionicons
        //       name="trash-bin-outline"
        //       size={30}
        //       color={"red"}
        //     ></Ionicons>
        //   </Pressable>
        // )}
      >
        <View style={styles.pantryitemparentcontainer}>
          <ListItem.Content style={styles.pantryitemname}>
            <ListItem.Title>{name}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Content style={styles.pantryexpirydate}>
            <ListItem.Title>{price}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Content style={styles.pantryexpirydate}>
            <ScanCalendar
              styles={styles}
              foodPriceArray={foodPriceArray}
              setFoodPriceArray={setFoodPriceArray}
              index={index}
            />
          </ListItem.Content>

          {/* <ListItem.Chevron /> */}
        </View>
      </ListItem.Swipeable>
    </>
  );
}

const styles = StyleSheet.create({});
