import React, { Component } from "react";
import "./../css/sorting_visualizer.css";

class SortingVisualizer extends Component {
    render() {
        const array = this.props.array;

        return (
            <div className="bar-container d-flex align-items-end">
                {array.map((value, index) => {
                    return (
                        <div className="number-bar" key={index} style={{ height: `${value}px` }}></div>
                    );
                })}
            </div>
        );
    }
}

export default SortingVisualizer;
