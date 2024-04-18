import React, { useState } from "react";
import "./Form.scss";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Mybutton from "../../style/mystyle";
import SendIcon from "@mui/icons-material/Send";
import Alert from "@mui/material/Alert";
import Iconcontact from "../../style/mymuistyle/iconcontact";
import theme from "../../style/mybreakpoints";
import { ThemeProvider } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";


export default function Form() {
  const [email, setTextEmail] = useState("");
  const [validemail, setValidEmail] = useState("");
  const [openemail, setOpenEmail] = useState(false);

  const [text, setText] = useState("");
  const [validtext, setValidText] = useState(null);
  const [opentext, setOpenText] = useState(false);

  const [openAlertSuccess, setOpenAlertSuccess] = useState(false);

  const changeEmail = (e) => {
    setTextEmail(e.target.value);
    validateEmail(e.target.value)
  };

  const changeText = (e) => {
    setText(e.target.value);
  };

  // Wyrażenie regularne do sprawdzania e-maila:
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  // Wysłanie wiadomości:
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!validateEmail(email)) {
      setValidEmail('Wprowadź poprawny adres e-mail!')
      setOpenEmail(true) 
      setTimeout(() => {
        setOpenEmail(false) 
      }, 3000)
    }
    else if (validtext == "") {
      setValidText('Wprowadź wiadomość')
      setOpenText(true)
      setTimeout(() => {
        setOpenText(false) 
      }, 3000)
    }
    
    else {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("msg", text);
  
      fetch("/php/main.php", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            console.log("E-mail został wysłany");
            setOpenAlertSuccess(true)
            setTimeout(() => {
              setOpenAlertSuccess(false)
              setTextEmail("")
              setText("")
            }, 3000)
          } else {
            console.error("Błąd podczas wysyłania e-maila");
          }
        })
        .catch((error) => {
          console.error("Błąd:", error);
        });
    }
  };
  

  const style = {
    paper: {
      width: "100%",
      height: "100%",
      padding: "0.6em 0.3em",
      backgroundColor: "#999",
    },
    btn: { marginTop: "0.7em" },
    field: {
      width: "90%",
      color: "#999",
      marginTop: "0.6em",
      height: "100%",
      reasize: "vertical",
    },
    icon: { margin: "0em 0.4em", fontWeight: "700" },
    emailInput: { marginTop: "0.6em" },
  };

  return (
    <div>
      <div className="contactbox">
        <form
          // action="https://formsubmit.io/send/slupiktomasz@gmail.com"
          // method="POST"
          className="contactbox__form"
        >
          <div className="contactbox__form-item">
            <div className="contactbox__form-item--header">Napisz do mnie!</div>
            <div className="contactbox__form-item--describe">
              Jeżeli masz jakiesz pytania, skorzystaj z poniższych opcji
            </div>
            <div className="contactbox__form-item--icon">
              <ThemeProvider theme={theme}>
                <Iconcontact>
                  <a
                    rel="noreferrer"
                    href="https://www.instagram.com/slupik.tomasz/"
                    target="_blank"
                  >
                    <i style={style.icon} class="fa-brands fa-instagram"></i>
                    slupik.tomasz
                  </a>
                </Iconcontact>
              </ThemeProvider>
            </div>
            <div className="contactbox__form-item--icon">
              <ThemeProvider theme={theme}>
                <Iconcontact>
                  <a
                    rel="noreferrer"
                    href="https://www.facebook.com/profile.php?id=100001145325456"
                    target="_blank"
                  >
                    <i
                      style={style.icon}
                      class="fa-brands fa-square-facebook"
                    ></i>
                    Tomasz Słupik
                  </a>
                </Iconcontact>
              </ThemeProvider>
            </div>
          </div>
          <div className="contactbox__form-box">
            <Paper elevation={3} style={style.paper}>
              <label htmlFor="mail" className="label">
                Email
                <i class="fa-solid fa-at iconEmail"></i>
              </label>
              <br></br>

              <TextField
                style={style.emailInput}
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={changeEmail}
                label="wpisz swój adres email"
                variant="outlined"
              />
              <br></br>
              <label className="label" htmlFor="msg">
                Twoja wiadomość
                <i class="fa-solid fa-envelope iconEmail"></i>
              </label>
              <br></br>
              <div className="contactbox__form-box--msg">
                <textarea
                  value={text}
                  onChange={changeText}
                  name="msg"
                  id="msg"
                ></textarea>
          <Stack 
          spacing={2} sx={{ width: "100%" }}
       
          >
        <Snackbar open={openemail} autoHideDuration={6000}>
          <Alert    
          variant="filled" 
          severity="error"
          style={{backgroundColor: 'red'}} 
          sx={{ width: "100%" }}>
             {validemail}
          </Alert>
        </Snackbar>

        <Snackbar open={opentext} autoHideDuration={6000}>
          <Alert    
          variant="filled" 
          severity="error"
          style={{backgroundColor: 'red'}} 
          sx={{ width: "100%" }}>
             {validtext}
          </Alert>
        </Snackbar>


                </Stack>
                <Snackbar open={openAlertSuccess} autoHideDuration={6000}>
                  <Alert 
                  variant="filled" 
                  severity="success" sx={{ width: "100%" }}>
                    Twoja wiadomość została wysłana!
                  </Alert>
                </Snackbar>
              </div>

              <br></br>
              <input
                name="_redirect"
                type="hidden"
                id="name"
                value="https://slupiktriathlon.pl/#thankyou"
              ></input>
              <Mybutton
                onClick={handleSubmit}
                style={style.btn}
                variant="contained"
                endIcon={<SendIcon />}
              >
                Wyślij
              </Mybutton>
            </Paper>


    
          </div>

        
        </form>
      </div>
    </div>
  );
}
