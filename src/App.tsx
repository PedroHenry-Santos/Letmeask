import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AuthContextProvider } from './contexts/auth.context';
import { useTheme } from './hooks/useTheme';

import { AdminRoom } from './pages/admin.room';
import { Home } from './pages/auth.landing';
import { NewRoom } from './pages/new.landing';
import { Room } from './pages/user.room';
import { ClosedRoom } from './pages/closed.landing';

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
                        <Route
                            path="/room/closed"
                            exact
                            component={ClosedRoom}
                        />
                        <Route path="/room/:id" component={Room} />
                        <Route path="/admin/room/:id" component={AdminRoom} />
                    </Switch>
                </AuthContextProvider>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
