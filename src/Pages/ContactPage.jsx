import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import NavBar from "./NavBar";
import Footer from "./Footer";

function ContactPage() {
  return (
    <>
      <NavBar />
      <Footer />
    </>
  );
}

export default ContactPage;
