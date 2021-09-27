import {Fragment} from "react";
import Heather from "./Components/Heather";
import Main from "./Components/Main";
import {ThemeProvider} from "styled-components";
import {ColorsOptions} from "./StyledComponents/ColorsOptions";

const allThemes = {
    colors:{
        header: "purple",
        body: "gray",
        footer: "blue"
    }
}
function App() {
  return (
      <ThemeProvider theme={allThemes}>
      <Fragment>
          <ColorsOptions />
          <Heather />
          <Main />
      </Fragment>
      </ThemeProvider>
  );
}
export default App;
