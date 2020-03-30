import React, { Component } from "react";
import ReactDOM from "react-dom";
import SortingVisualizer from "./components/sorting_visualizer";

class App extends Component {
    render() {
        return (
            <div>
                <SortingVisualizer />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
