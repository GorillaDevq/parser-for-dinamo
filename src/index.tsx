import {createRoot} from "react-dom/client";
import {App} from "app/App";
import {HashRouter} from "react-router-dom";
import ThemeProvider from "./app/providers/ThemeProvider/ui/ThemeProvider";

const container = document.getElementById('root')
const root = createRoot(container);

root.render(
    <HashRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </HashRouter>
)