const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');

//Class Component
class App extends React.Component {
  render() {
    return <div style={{border: "1px solid red"}}>Hello World from App Class</div>;
  }
}

//Function Component
function MyInfo() {

  return (
    <div style={{border: "1px solid purple"}}>
      <div>Hello Info</div>
      <div>
        <h1>JSX Info</h1>
        <h2>JSX Info h2</h2>
      </div>
    </div>
  );
}

const myelement = (
  <div style={{border: "1px solid green"}}>

    <div>
    <div>Hello World from Element</div>
      <h1>JSX Element</h1>
      <h2>JSX Element h2</h2>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));

ReactDOM.render(myelement, document.getElementById('my-element'));

ReactDOM.render(MyInfo(), document.getElementById('my-info'));
