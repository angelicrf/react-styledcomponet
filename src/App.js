import {Fragment} from "react";
import Heather from "./Components/Heather";
import Main from "./Components/Main";
import {ThemeProvider} from "styled-components";
import {ColorsOptions} from "./StyledComponents/ColorsOptions";
import Footer from "./Components/Footer";

const allThemes = {
    colors:{
        header: "purple",
        body: "gray",
        footer: "blue"
    },
    devices: {
       mobile : '768px'
    }
}
function App() {
  return (
      <ThemeProvider theme={allThemes}>
      <Fragment>
          <ColorsOptions />
          <Heather />
          <Main />
          <Footer />
      </Fragment>

      </ThemeProvider>
  );
}
export default App;
