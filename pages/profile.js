import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileInformation from "../components/ProfileInformation";
import { FirestoreProvider } from "../contexts/FireStoreContext";

function Profile() {
  return (
    <div>
      <Header />
      <FirestoreProvider>
        <ProfileInformation />
      </FirestoreProvider>
      <Footer />
    </div>
  );
}

export default Profile;
