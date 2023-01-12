import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import MainContainer from "./MainContainer";
import AuthContainer from "./AuthContainer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";

export default function RootNavigation() {
  const [loggedIn, setLoggedIn] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // user is signed in
      // const uid = user.uid;
      setLoggedIn(true);
      // ...
    } else {
      // User is signed out
      // ...
      setLoggedIn(false);
    }
  });

  return loggedIn ? <MainContainer /> : <AuthContainer />;
}

const styles = StyleSheet.create({});