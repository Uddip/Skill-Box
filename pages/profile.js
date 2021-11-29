import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileInformation from "../components/ProfileInformation";
import Test from "../components/Test";
import { FirestoreProvider } from "../contexts/FireStoreContext";

function Profile() {
  return (
    <div
      className="bg-cover"
      style={{
        backgroundImage: "url(https://source.unsplash.com/1L71sPT5XKc)",
      }}
    >
      <Header />
      <ProfileInformation />
      <FirestoreProvider>{/* <Test /> */}</FirestoreProvider>
      <Footer />
    </div>
  );
}

export default Profile;
