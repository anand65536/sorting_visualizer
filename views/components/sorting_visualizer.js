import React, { Component } from "react";
import "./../css/sorting_visualizer.css";
import mergeSort from "./../sortingAlgorithms/mergeSort";

class SortingVisualizer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            array: []
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const randomArray = [];
        let min = 5,
            max = 750;

        for (let i = 0; i < 300; i++) {
            randomArray.push(Math.floor(Math.random() * (max - min + 1) + min));
        }

        this.setState({ array: randomArray });
    }

    mergeSortWrapper() {
        const currentState = [...this.state.array];
        const sortedState = mergeSort(currentState);
        console.log(sortedState);
        this.setState({ array: sortedState });
    }

    render() {
        const { array } = this.state;

        return (
            <div className="bar-container">
                {array.map((value, index) => {
                    return (
                        <div
                            className="number-bar"
                            key={index}
                            style={{ height: `${value}px` }}
                        ></div>
                    );
                })}

                <button
                    onClick={() => {
                        this.resetArray();
                    }}
                >
                    Generate New Array
                </button>
                <button
                    onClick={() => {
                        this.mergeSortWrapper();
                    }}
                >
                    Merge Sort
                </button>
                <button
                    onClick={() => {
                        this.bubbleSort();
                    }}
                >
                    Bubble Sort
                </button>
            </div>
        );
    }
}

export default SortingVisualizer;
