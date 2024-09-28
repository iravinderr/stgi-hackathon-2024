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
          <div className=" text-center  mt-6  justify-centerbold text-3xl">Logs Tracker</div>
          <div>
            <ModeToggle />
          </div>
          {/* HEADER */}

          {/* MAIN  */}
          <div className="">
            <div>
              <div className="flex justify-around h-64 w-full">
                <Component />
                <Component />
                <Component />
                <Component />
              </div>
              <div className="flex mx-auto justify-evenly mt-6">
                {/* <Component />
                <Component /> */}
              </div>
            </div>{" "}
            <div className="flex container mx-auto w-10/12"><DemoPage /></div>
          </div>
        </div>
      }
    </ThemeProvider>
  );
}

export default App;
