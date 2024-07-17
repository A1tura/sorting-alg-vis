import { Component } from "react"
import "./sorting.css";
import { mergeSort as mergeSortAlg } from "../alghoritms/mergeSort";
import { quickSort as quickSortAlg } from "../alghoritms/quickSort";

export class Sorting extends Component {

        
    state = {
        array: [],
		arrayLength: 100
    }

    componentDidMount() {
        this.generateRandomArray();
    
        this.handleKeyDown = (e) => {
            if (e.key === "r") {
                this.generateRandomArray();
            } else if (e.key === "1") {
                this.mergeSort();
            } else if (e.key === "2") {
              this.quickSort();
            }
        };
    
        document.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    generateRandomArray() {
		const array = Array.from({ length: this.state.arrayLength }, () =>
			this.getRandomNumber(0, window.innerHeight - 10)
		);
		this.setState({ array });
    }


    mergeSort() {
			const animations = mergeSortAlg(this.state.array);
			for (let i = 0; i < animations.length; i++) {
			  const arrayBars = document.getElementsByClassName('array-bar');
			  const isColorChange = i % 3 !== 2;
			  if (isColorChange) {
				const [barOneIdx, barTwoIdx] = animations[i];
				const barOneStyle = arrayBars[barOneIdx].style;
				const barTwoStyle = arrayBars[barTwoIdx].style;
				const color = i % 3 === 0 ? "pink" : "#332940";
				setTimeout(() => {
				  barOneStyle.backgroundColor = color;
				  barTwoStyle.backgroundColor = color;
				}, i * 50);
			  } else {
				setTimeout(() => {
				const [barOneIdx, newHeight] = animations[i];
				const barOneStyle = arrayBars[barOneIdx].style;
	
				barOneStyle.height = `${newHeight}px`;
				}, i * 50);
			  }
			}
    }

    // quickSort() {
    //   const animations = quickSortAlg(this.state.array, 0, this.state.array.length - 1)

    //   for (let i = 0; i < animations.length; i++) {
		// 	  const arrayBars = document.getElementsByClassName('array-bar');
		// 	  const isColorChange = animations[i][2] === "comp" || animations[i][2] === "comp2";
    //     const isSetPivot = animations[i][2] === "setPivot";
		// 	  if (isColorChange) {
    //       const [barOneIdx, barTwoIdx] = animations[i];
    //       const barOneStyle = arrayBars[barOneIdx].style;
    //       const barTwoStyle = arrayBars[barTwoIdx].style;
    //       const color = animations[i][2] === "comp2" ? "pink" : "red";
    //       setTimeout(() => {
    //         barOneStyle.backgroundColor = color;
    //         barTwoStyle.backgroundColor = color;
    //       }, i * 50);
		// 	  } else {
		// 		setTimeout(() => {
		// 		const [barOneIdx, newHeight, type] = animations[i];
		// 		const barOneStyle = arrayBars[barOneIdx].style;
	
		// 		barOneStyle.height = `${newHeight}px`;
		// 		}, i * 50);
		// 	  }
		// 	}

    // }


    quickSort() {
      const animations = quickSortAlg(this.state.array, 0, this.state.array.length - 1)

      console.log(animations)

      for (let i = 0; i < animations.length; i++) {
			  const arrayBars = document.getElementsByClassName('array-bar');
			  const isColorChange = animations[i][2] === "comp" || animations[i][2] === "unsetColor";
        const isSetPivot = animations[i][2] === "setPivot";
        const isUnsetPivot = animations[i][2] === "unsetPivot";
        const isSwap = animations[i][2] === "swap"
			  if (isColorChange) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = animations[i][2] === "unsetColor" ? "#332940" : "pink";
          setTimeout(() => {
            barOneStyle.backgroundColor = color;

            barTwoStyle.backgroundColor = color;

          }, i * 50);
			  } if (isSetPivot) {
          const [a, b, c] = animations[i];
          const barOneStyle = arrayBars[a].style;

          setTimeout(() => {
            barOneStyle.backgroundColor = "yellow";
          }, i * 50);
        } if (isUnsetPivot) {
          const [a, b, c] = animations[i];
          const barOneStyle = arrayBars[a].style;

          setTimeout(() => {
            barOneStyle.backgroundColor = "pink";
          }, i * 50);
        } else if (isSwap) {
				setTimeout(() => {
				const [barOneIdx, newHeight, type] = animations[i];
				const barOneStyle = arrayBars[barOneIdx].style;
	
				barOneStyle.height = `${newHeight}px`;
				}, i * 50);
			  }
			}

    }
    
  

    getRandomNumber(max, min) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    // handleArrayLength = (e) => {
    //     this.setState({
    //         arrayLength: e.target.value
    //     })
    // }

    render() {
        return (
        <>
            <div className="array-container">
                {this.state.array.map((number, idx) => (
                    <div className="array-bar" style={{"transition": "height 0.7s", "height": `${number}px`}} key={idx}></div>
                ))}
            </div>
            <div className="controllers">
                <button className="controllers-button" onClick={() => this.generateRandomArray()}>Regenerate Array</button>
                <button className="controllers-button" onClick={() => this.mergeSort()}>Merge Sort</button>
                <button className="controllers-button" onClick={() => this.quickSort()}>Quick sort</button>

                {/* <input className="controllers-input" value={this.state.arrayLength} type="text" onChange={this.handleArrayLength} /> */}
            </div>
            </>
        )
    }
}