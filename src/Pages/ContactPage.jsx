import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import NavBar from "./NavBar";

function ContactPage() {
  return (
    <>
      <NavBar />
    </>
  );
}

export default ContactPage;
