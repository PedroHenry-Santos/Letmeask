import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AuthContextProvider } from './contexts/AuthContext';

import { AdminRoom } from './pages/AdminRoom';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';
import { useTheme } from './hooks/useTheme';

import GlobalStyle from './assets/styles/global';

function App() {
    const theme = useTheme();

    return (
        <ThemeProvider theme={theme.theme.now}>
            <GlobalStyle />
            <BrowserRouter>
                <AuthContextProvider>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/room/new" component={NewRoom} />
                        <Route path="/room/:id" component={Room} />
                        <Route path="/admin/room/:id" component={AdminRoom} />
                    </Switch>
                </AuthContextProvider>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
