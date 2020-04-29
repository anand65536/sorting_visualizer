import React, { Component } from "react";
import "./../css/sorting_visualizer.css";

class NavigationBar extends Component {
    render() {
        return (
            <div className="navbar bg-dark d-flex justify-content-center" id="sort_navbar">
                <button className="btn btn-primary mr-4" onClick={() => { this.props.resetArray(); }}>
                    Generate New Array
                </button>

                <div className="form-inline mr-4">
                    <input type="range" min="1" max="100" className="form-control-range" id="speed_slider" onInput={() => { this.props.updateSpeed(); }} />
                </div>

                <div className="btn-group" role="group">
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