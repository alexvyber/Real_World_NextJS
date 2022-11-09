import { useState } from 'react';
import ThemeContext from '../components/themeContext';
import Navbar from '../components/Navbar';

const themes = {
  dark: {
    background: 'black',
    color: 'white',
  },
  light: {
    background: 'white',
    color: 'black',
  },
  red: {
    background: 'red',
    color: 'blue',
  },
};

function* themeSwitcher() {
  while (true) {
    yield 'dark';
    yield 'light';
    yield 'red';
  }
}

const nextTheme = themeSwitcher();

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(nextTheme.next().value);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          width: '100%',
          minHeight: '100vh',
          ...themes[theme],
        }}
      >
        <Navbar />
        <Component {...pageProps} />
      </div>
    </ThemeContext.Provider>
  );
}

export default MyApp;
