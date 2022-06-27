import React, { useRef, useState } from "react";
import { ReCAPTCHA } from "react-google-recaptcha";

export default function ReCAPT() {
  const captchaRef = useRef();
  const [text, setText] = useState("Start editing to see some magic happen!");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{text}</h2>
      <ReCAPTCHA
        ref={captchaRef}
        sitekey="6LfHH6IgAAAAALhz3rRxoFbMd31oxbgYYuv_pBpu"
        onChange={(value) => {
          setText(`There you go!!!!!!!!!!! ${value}`);
        }}
        size="invisible"
      />
      <button
        onClick={(event) => {
          setText("yes. it was a click");
          captchaRef.current.execute();
        }}
      >
        Click me
      </button>
    </div>
  );
}


