import {createRoot} from "react-dom/client";
import {App} from "app/App";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./app/providers/ThemeProvider/ui/ThemeProvider";
import GamesProvider from "app/providers/GamesProvider";
import {TeamProvider} from "app/providers/TeamProvider";

const container = document.getElementById('root')
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <TeamProvider>
            <GamesProvider>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </GamesProvider>
        </TeamProvider>
    </BrowserRouter>
)