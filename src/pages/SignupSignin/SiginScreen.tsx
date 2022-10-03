import React, { useState } from "react";
import { Button, InputField } from "../../components";

function SiginScreen() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    }
    if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <section className="w-100 d-block">
      <div className="shadow w-50 d-block me-auto ms-auto mt-5 p-5 rounded">
        <div className="mb-3">
          <h3 className="fs-3 text-center">CHAT APP</h3>
        </div>
        <div className="mb-3">
          <InputField
            value={email}
            onChange={onChangeText}
            id="email"
            placeholder="Email"
            type="email"
          />
        </div>
        <div className="mb-3">
          <InputField
            value={password}
            placeholder="Password"
            id="password"
            type="password"
            onChange={onChangeText}
          />
        </div>

        <Button title="Log In" onClick={() => {}} />
        <div className="divider" />
      </div>
    </section>
  );
}

export default SiginScreen;
