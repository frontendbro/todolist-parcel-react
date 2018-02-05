import React from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./index.css";
import data from "./data";
import Todo from "./components/Todo";
import Header from "./components/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <img className="App-Logo" src={logo} alt="React Logo" />
        <div className="wrapper">
          <Header />
          <section className="todo-list">
            {this.props.data.map(todo => (
              <Todo dataTodo={todo} key={todo.id}/>
            ))}
          </section>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App data={data}/>, document.getElementById("root"));
