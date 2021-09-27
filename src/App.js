import {Fragment} from "react";
import Heather from "./Components/Heather";
import Main from "./Components/Main";
import {ThemeProvider} from "styled-components";
import {ColorsOptions} from "./StyledComponents/ColorsOptions.js";

const allThemes = {
    colors:{
        header: "purple",
        body: "blue",
        footer: "gray"
    }
}
function App() {
  return (
      <ThemeProvider theme={allThemes}>
      <Fragment>
          <Heather/>
          <ColorsOptions />
          <Main />
      </Fragment>
      </ThemeProvider>
  );
}
export default App;
