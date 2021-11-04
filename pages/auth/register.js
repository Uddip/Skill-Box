import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Signup from "../../components/Signup";
import { FirestoreProvider } from "../../contexts/FireStoreContext";

function Register() {
  return (
    <div>
      <Header />
      <FirestoreProvider>
        <Signup />
      </FirestoreProvider>
      <Footer />
    </div>
  );
}

export default Register;
