import {createRoot} from "react-dom/client";
import {App} from "app/App";
import {HashRouter} from "react-router-dom";
import ThemeProvider from "./app/providers/ThemeProvider/ui/ThemeProvider";
import GamesProvider from "app/providers/GamesProvider";

const container = document.getElementById('root')
const root = createRoot(container);

root.render(
    <HashRouter>
        <GamesProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </GamesProvider>
    </HashRouter>
)