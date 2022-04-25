import React, { Component } from 'react';

class Home extends Component {
// const [data, setData]=useState(null);

state = {
  data: "",
  print: false
}

  // Check for special characters
  // Spilt into an array
  // Sort into alphabetical order

  // myString = "I wanted to love you so badly but you made it so hard for me to love you."

  setPrint = (event) => {
    this.setState({print: event})
  }

  orderAndCountWords = (event) => {
  let lowerCaseString = this.target.event.toLowerCase();
  let noSpecialChars = lowerCaseString.replace(/[^a-zA-Z0-9 ]/g, '');
  let arrayOfWords = noSpecialChars.split(" ");
  let sortedWordArray = arrayOfWords.sort()
  const count = {};
  for (const word of sortedWordArray) {
    if (count[word]) {
      count[word] += 1;
    } else {
      count[word] = 1;
    }
  }
  return count;
}

  render(){
    return (
      <div className="Home">
        <header>Share your essay Here:</header>
        <input
            type="text"
            onChange={this.orderAndCountWords}
         />
         <button onClick={()=>this.setPrint(true)}>Press Me!</button>
         {
          this.print
          ?<p>{this.data}</p>
          :null
         }
      </div>
    )
  };
}

export default Home;