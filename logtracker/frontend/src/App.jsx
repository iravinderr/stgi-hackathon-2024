import React from "react";
import Component from "./assets/graph-comp";
import { ThemeProvider } from "./components/ui/theme-provider";
import { ModeToggle } from "./components/ui/mode-toggle";
import DemoPage from "./assets/LogsTable/page";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {
        <div>
          {/* HEADER */}
          <div>
            <ModeToggle />
          </div>
          {/* HEADER */}

          {/* MAIN  */}
          <div className="flex justify-evenly">
            <div>
              <div className="flex  w-full h-full justify-evenly">
                <Component />
                <Component />
              </div>
              <div className="flex mx-auto justify-evenly mt-6">
                <Component />
                <Component />
              </div>
            </div>{" "}
            <div><DemoPage /></div>
          </div>
        </div>
      }
    </ThemeProvider>
  );
}

export default App;
