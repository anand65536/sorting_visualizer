import React, { Component } from "react";
import ReactDOM from "react-dom";
import SortingVisualizer from "./components/sorting_visualizer";
import NavigationBar from "./components/navigation_bar";
import mergeSort from "./sortingAlgorithms/mergeSort";
import bubbleSort from "./sortingAlgorithms/bubbleSort";
import heapSort from "./sortingAlgorithms/heapSort";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            array: []
        };

        this.resetArray = this.resetArray.bind(this);
        this.bubbleSortWrapper = this.bubbleSortWrapper.bind(this);
        this.mergeSortWrapper = this.mergeSortWrapper.bind(this);
        this.heapSortWrapper = this.heapSortWrapper.bind(this);
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
            let swap = animations[i].length == 2;
            let speed = 24;
            setTimeout(() => {
                barsFromDom[firstBar].style["background-color"] = `aqua`;
                barsFromDom[secondBar].style["background-color"] = `aqua`;
            }, i * speed);
            if (swap) {
                setTimeout(() => {
                    barsFromDom[firstBar].style["background-color"] = `red`;
                    barsFromDom[secondBar].style["background-color"] = `red`;
                }, i * speed + speed / 4);

                const [newIndex, newHeight] = animations[i][1];

                setTimeout(() => {
                    const currentState = [...this.state.array];
                    currentState[newIndex] = newHeight;
                    this.setState({ array: currentState });
                    barsFromDom[newIndex].style["background-color"] = `red`;
                }, i * speed + speed / 2);

                setTimeout(() => {
                    barsFromDom[firstBar].style["background-color"] = `blue`;
                    barsFromDom[secondBar].style["background-color"] = `blue`;
                    barsFromDom[newIndex].style["background-color"] = `blue`;
                }, i * speed + (speed * 3) / 4);
            } else {
                setTimeout(() => {
                    barsFromDom[firstBar].style["background-color"] = `blue`;
                    barsFromDom[secondBar].style["background-color"] = `blue`;
                }, i * speed + speed / 2);
            }
        }
    }

    bubbleSortWrapper() {
        const currentState = [...this.state.array];
        const animations = bubbleSort(currentState);
        const barsFromDom = document.getElementsByClassName("number-bar");
        for (let i = 0; i < animations.length; i++) {
            let [firstBar, secondBar] = animations[i].indexes;
            let swap = animations[i].swap;
            let speed = 6;
            setTimeout(() => {
                barsFromDom[firstBar].style["background-color"] = `aqua`;
                barsFromDom[secondBar].style["background-color"] = `aqua`;
            }, i * speed);

            if (swap) {
                setTimeout(() => {
                    barsFromDom[firstBar].style["background-color"] = `red`;
                    barsFromDom[secondBar].style["background-color"] = `red`;
                }, i * speed + speed / 4);

                setTimeout(() => {
                    const currentState = [...this.state.array];
                    [currentState[firstBar], currentState[secondBar]] = [currentState[secondBar], currentState[firstBar]];
                    this.setState({ array: currentState });
                }, i * speed + speed / 2);

                setTimeout(() => {
                    barsFromDom[firstBar].style["background-color"] = `blue`;
                    barsFromDom[secondBar].style["background-color"] = `blue`;
                }, i * speed + (speed * 3) / 4);
            } else {
                setTimeout(() => {
                    barsFromDom[firstBar].style["background-color"] = `blue`;
                    barsFromDom[secondBar].style["background-color"] = `blue`;
                }, i * speed + speed / 2);
            }
        }
    }

    heapSortWrapper() {
        const currentState = [...this.state.array];
        const animations = heapSort(currentState);
        const barsFromDom = document.getElementsByClassName("number-bar");
        for (let i = 0; i < animations.length; i++) {
            let [firstBar, secondBar] = animations[i];
            let speed = 6;
            setTimeout(() => {
                barsFromDom[firstBar].style["background-color"] = `aqua`;
                barsFromDom[secondBar].style["background-color"] = `aqua`;
            }, i * speed);

            setTimeout(() => {
                barsFromDom[firstBar].style["background-color"] = `red`;
                barsFromDom[secondBar].style["background-color"] = `red`;
            }, i * speed + speed / 4);

            setTimeout(() => {
                const currentState = [...this.state.array];
                [currentState[firstBar], currentState[secondBar]] = [currentState[secondBar], currentState[firstBar]];
                this.setState({ array: currentState });
            }, i * speed + speed / 2);

            setTimeout(() => {
                barsFromDom[firstBar].style["background-color"] = `blue`;
                barsFromDom[secondBar].style["background-color"] = `blue`;
            }, i * speed + (speed * 3) / 4);
        }
    }

    render() {
        return (
            <div>
                <NavigationBar resetArray={this.resetArray} bubbleSort={this.bubbleSortWrapper} mergeSort={this.mergeSortWrapper} heapSort={this.heapSortWrapper} />
                <SortingVisualizer array={this.state.array} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
