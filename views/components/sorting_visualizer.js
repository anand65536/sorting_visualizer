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
        const animations = mergeSort(currentState);
        const barsFromDom = document.getElementsByClassName("number-bar");
        for (let i = 0; i < animations.length; i++) {
            let [firstBar, secondBar] = animations[i][0];
            setTimeout(() => {
                barsFromDom[firstBar].style["background-color"] = `aqua`;
                barsFromDom[secondBar].style["background-color"] = `aqua`;
            }, i * 24);
            if (animations[i].length == 2) {
                setTimeout(() => {
                    barsFromDom[firstBar].style["background-color"] = `red`;
                    barsFromDom[secondBar].style["background-color"] = `red`;
                }, i * 24 + 6);

                const [newIndex, newHeight] = animations[i][1];

                setTimeout(() => {
                    barsFromDom[newIndex].style.height = `${newHeight}px`;
                    barsFromDom[newIndex].style["background-color"] = `red`;
                }, i * 24 + 12);

                setTimeout(() => {
                    barsFromDom[firstBar].style["background-color"] = `blue`;
                    barsFromDom[secondBar].style["background-color"] = `blue`;
                    barsFromDom[newIndex].style["background-color"] = `blue`;
                }, i * 24 + 18);
            } else {
                setTimeout(() => {
                    barsFromDom[firstBar].style["background-color"] = `blue`;
                    barsFromDom[secondBar].style["background-color"] = `blue`;
                }, i * 24 + 12);
            }
        }
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
