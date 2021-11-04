<<<<<<< HEAD
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProfileHeader from '../components/ProfileHeader'
import FriendsList from '../components/FriendsList'

function Profile() {
    return (
        <div>
          <Header />
          <ProfileHeader />
          <FriendsList />
          <Footer />  
        </div>
    )
=======
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
>>>>>>> c6a7797a2b2074baef35928bd6867af5a8ec8d80
}

export default Profile;
