import React from "react";
import "./App.css";
import FormikRegForm from './components/RegForm'

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div className="App">
      <h1>Registration Form</h1>
      <FormikRegForm />
    </div>;
  }
}

export default App;
