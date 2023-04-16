import React from 'react';
import { Form } from '../components/Form';
import {Header} from "./Header";

export const FormPage = () => {
  return (
    <div>
      <Header/>
      <h1>Form</h1>
      <Form />
    </div>
  );
};
