import Nav from './components/Nav';
import About from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import GlobalStyle, { lightTheme, darkTheme, darkBlueTheme, PinkTheme } from './components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { HashRouter } from 'react-router-dom';

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
                <HashRouter>
                    <Nav />
                    <About setTheme={setTheme} theme={theme} />
                    <ProjectSection />
                </HashRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;
