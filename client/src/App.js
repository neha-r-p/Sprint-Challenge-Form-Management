import React from "react";
import "./App.css";
import axios from "axios";
import FormikRegForm from "./components/RegForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      meals: []
    };
  }

  componentWillMount() {
    console.log("mounted!");
    axios
      .get("http://localhost:5000/api/restricted/data")
      .then(res => {
        console.log(res.data);
        this.setState({ meals: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="sprintForm">
          <h1>Registration Form</h1>
          <FormikRegForm />
        </div>
        <div className="getRequest">
          {this.state.meals.map(meal => {
            return (
              <div>
                <h2>{meal.name}</h2>
                <p>Course: {meal.course}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
