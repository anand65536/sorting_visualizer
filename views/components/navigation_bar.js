import React, { Component } from "react";
import "./../css/sorting_visualizer.css";

class NavigationBar extends Component {
    render() {
        return (
            <div className="navbar navbar-dark bg-dark">
                <button className="btn btn-primary" onClick={() => { this.props.resetArray(); }}>
                    Generate New Array
                </button>

                <div class="btn-group" role="group">
                    <button className="btn btn-primary border border-dark" onClick={() => { this.props.mergeSort(); }}>
                        Merge Sort
                    </button>

                    <button className="btn btn-primary border border-dark" onClick={() => { this.props.bubbleSort(); }}>
                        Bubble Sort
                    </button>

                    <button className="btn btn-primary border border-dark" onClick={() => { this.props.heapSort(); }}>
                        Heap Sort
                    </button>
                </div>
            </div>
        );
    }
}

export default NavigationBar;