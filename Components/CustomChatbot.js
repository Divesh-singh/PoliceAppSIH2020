import React, { Component } from "react";
import ChatBot from "react-native-chatbot";
import CaptureImage from "./CaptureImage";
import CaptureText from "./CaptureText";
import { KeyboardAvoidingView } from "react-native";

function CustomChatbot(props) {
  const steps = [
      {
       id: "Greet",
       message: "Hello, Citizen",
       trigger: "help"
      },
      {
       id: "help",
       message: "How can i help you",
       trigger: "waiting for user input"
      },
      {
        id: "waiting for user input",
        user: true,
        trigger: "ask"
       },
       {
        id: "ask",
          options: [
            { value: 1, label: 'Forms', trigger: 'Form' },
            { value: 2, label: 'FIR', trigger: 'FIR' },
            { value: 3, label: 'NOC', trigger: 'NOC' },
          ],
       },
       {
         id:"Form",
         options: [
          { value: 1, label: 'Clearance', trigger: 'Clear' },
          { value: 2, label: 'Tenant', trigger: 'Tenant' },
        ],
       },
       {
        id:"FIR",
        options: [
         { value: 1, label: 'Lost E-FIR', trigger: 'Clear' },
         { value: 2, label: 'Tenant', trigger: 'Tenant' },
       ],
      },
      {
        id:"NOC",
        options: [
         { value: 1, label: 'Clearance', trigger: 'Clear' },
         { value: 2, label: 'Tenant', trigger: 'Tenant' },
       ],
      },
       {
         id: "Clear",
         component: <CaptureText />,
        //  metadata: { dataType: 'image-url' } ,
          trigger: "next"
        },
        {
          id: "Tenant",
          component: <CaptureText />,
         //  metadata: { dataType: 'image-url' } ,
           trigger: "next"
         },
        {
          id: "next",
          message: "send the image",
          trigger: "next1"
        },
       {
         id: "next1",
         component: <CaptureImage/>,
         end: true
       }
       
    ];
  return( <KeyboardAvoidingView><ChatBot footerStyle='null' steps={steps} /></KeyboardAvoidingView> )
}
export default CustomChatbot;