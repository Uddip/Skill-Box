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
}

export default Profile
