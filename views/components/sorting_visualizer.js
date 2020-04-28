import React, { Component } from "react";
import "./../css/sorting_visualizer.css";
import mergeSort from "./../sortingAlgorithms/mergeSort";
import bubbleSort from "./../sortingAlgorithms/bubbleSort";
import heapSort from "./../sortingAlgorithms/heapSort";

class SortingVisualizer extends Component {
    render() {
        const array = this.props.array;

        return (
            <div className="bar-container">
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
