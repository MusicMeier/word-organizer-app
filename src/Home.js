import React, { useState } from 'react';

const Home = () => {
  const [words, setWords] = useState('');
  const [wordCount, setWordCount] = useState({});

  const handleChange = (event) => {
    const currentWords = event.target.value;

    setWords(currentWords);
    orderAndCountWords(currentWords);
  }

  const orderAndCountWords = (currentWords) => {
    const lowerCaseWordsNoTrailingWhiteSpace = currentWords.toLowerCase().trim();
    const noSpecialChars = lowerCaseWordsNoTrailingWhiteSpace.replace(/[^a-zA-Z0-9 ]/g, '');
    const arrayOfWords = noSpecialChars.split(/\s+/);
    const sortedWordArray = arrayOfWords.sort();
    const count = {};
    for (const word of sortedWordArray) {
      count[word] ? count[word] += 1 : count[word] = 1;
    }
    setWordCount(count);
  }

  const showEachWord = () => {
    if (words.trim().length === 0) return null;

    const wordsDisplay = [];
    for (const word in wordCount) {
      wordsDisplay.push(<p key={word}>{word}: {wordCount[word]}</p>);
    }
    return wordsDisplay;
  }

  return (
    <div className='Home'>
      <header>Share your essay Here:</header>
      <input
        type='text'
        onChange={handleChange}
        value={words}
      />
      <div>{showEachWord()}</div>
    </div>
  );
}

export default Home;