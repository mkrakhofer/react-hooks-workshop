import React from 'react';
import './App.scss';
import ClassGreeting from './Greeting/ClassGreeting';
import FunctionalGreeting from './Greeting/FunctionalGreeting';
import { ThemeContext } from './Context/ThemeContext';
import { LocaleContext } from './Context/LocaleContext';

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeContext.Provider value="sponge">
        <LocaleContext.Provider value="🇦🇹">
          <ClassGreeting name={"Spongebob"} surname="Squarepants" />
        </LocaleContext.Provider>
      </ThemeContext.Provider>
      <ThemeContext.Provider value="star">
        <LocaleContext.Provider value="🇬🇧">
          <FunctionalGreeting name={"Patrick"} surname="Star" />
        </LocaleContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
