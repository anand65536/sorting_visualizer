import React, { Component } from "react";
import "./../css/sorting_visualizer.css";

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
                        this.mergeSort();
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
