import React, {useState, useEffect} from 'react'
import { getBubbleSortAnimations, getHeapSortAnimations, getMergeSortAnimations, getQuickSortAnimations } from "../sortingAlgorithms/sortingAlgorithms.js";
import './SV.css';
// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 200;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";

function SV() {
    let [arr,setArr] = useState([]);
    
    useEffect(() => {
      resetArray();
    },[]);
    
    function resetArray()
    {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
        array.push(randomIntFromInterval(5, 530));
        }
        setArr(array);
    };

    function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function mergeSort() {
    const animations = getMergeSortAnimations(arr);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  function quickSort() {
    const animations = getQuickSortAnimations(arr);
    for (let x = 0; x < animations.length; x++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const [op,i,j] = animations[x];
      if (op!==3) {
        const color = op === 1 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          arrayBars[i].style.backgroundColor = color;
          arrayBars[j].style.backgroundColor = color;
        }, x * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [, barOneIdx, newHeight] = animations[x];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, x * ANIMATION_SPEED_MS);
      }
    }
  }

  function heapSort() {
    const animations = getHeapSortAnimations(arr);
    for (let x = 0; x < animations.length; x++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const [op, i, j] = animations[x];
      if (op !== 3) {
        const color = op === 1 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          arrayBars[i].style.backgroundColor = color;
          arrayBars[j].style.backgroundColor = color;
        }, x * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [, barOneIdx, newHeight] = animations[x];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, x * ANIMATION_SPEED_MS);
      }
    }
  }

  function bubbleSort() {
    const animations = getBubbleSortAnimations(arr);
    for (let x = 0; x < animations.length; x++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const [op, i, j] = animations[x];
      if (op !== 3) {
        const color = op === 1 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          arrayBars[i].style.backgroundColor = color;
          arrayBars[j].style.backgroundColor = color;
        }, x * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [, barOneIdx, newHeight] = animations[x];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, x * ANIMATION_SPEED_MS);
      }
    }
  }

  

    return (
      <div className="array-container">
        {arr.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}
          ></div>
        ))}
        <button onClick={() => resetArray()}>Generate New Array</button>
        <button onClick={() => mergeSort()}>Merge Sort</button>
        <button onClick={() => quickSort()}>Quick Sort</button>
        <button onClick={() => heapSort()}>Heap Sort</button>
        <button onClick={() => bubbleSort()}>Bubble Sort</button>
        {/* <button onClick={() => testSortingAlgorithms()}>
          Test Sorting Algorithms (BROKEN)
        </button> */}
      </div>
    );
}

export default SV;
