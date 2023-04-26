import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import BacktoPage from "../BacktoPage";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../../style/mybreakpoints";
import Linetext from "../../../../style/mymuistyle/linetext";
import Line from "../../../../style/mymuistyle/line";
import Myscrollbox from "../../../../style/myscrollbox";
import Leftheader from "../../../../style/mymuistyle/leftheader";
import Centerheader from "../../../../style/mymuistyle/centerheader";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import "./Indoortriathlon2023.scss";

export default function Indoortriathlon2023() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const style = {
    color: { color: "#fff", fontSize: "3rem", textAlign: "center" },
  };

  return (
    <div>
      <BacktoPage />
      <div className="indoorTriathlon">
        <ThemeProvider theme={theme}>
          <Linetext>Indoor Triathlon 2023 r.</Linetext>
          <Line />
        </ThemeProvider>
        <Myscrollbox />
        <div className="indoorTriathlon__box">
          <div style={style.color}>Relacje niebawem</div>
        </div>
      </div>
    </div>
  );
}
