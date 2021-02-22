import Nav from './components/Nav';
import About from './components/AboutSection';
import GlobalStyle, { lightTheme, darkTheme, darkBlueTheme, PinkTheme } from './components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

function App() {
    const [theme, setTheme] = useState('lightTheme');

    const themeMode =
        theme == 'lightTheme'
            ? lightTheme
            : theme == 'darkTheme'
            ? darkTheme
            : theme == 'darkBlueTheme'
            ? darkBlueTheme
            : PinkTheme;

    return (
        <div className="App">
            <ThemeProvider theme={themeMode}>
                <GlobalStyle />
                <Nav />
                <About setTheme={setTheme} />
            </ThemeProvider>
        </div>
    );
}

export default App;
