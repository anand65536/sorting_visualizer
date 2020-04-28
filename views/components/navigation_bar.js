import React, { Component } from "react";
import "./../css/sorting_visualizer.css";

class NavigationBar extends Component {
    render() {
        return (
            <div className="navbar navbar-dark bg-primary">
                <button className="btn btn-primary" onClick={() => { this.props.resetArray(); }}>
                    Generate New Array
                </button>

                <button onClick={() => { this.props.mergeSort(); }}>
                    Merge Sort
                </button>

                <button onClick={() => { this.props.bubbleSort(); }}>
                    Bubble Sort
                </button>

                <button onClick={() => { this.props.heapSort(); }}>
                    Heap Sort
                </button>
            </div>
        );
    }
}

export default NavigationBar;