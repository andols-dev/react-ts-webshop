import React, { useState, useEffect } from "react";

export const Login: React.FC = () => {
  const formDefaultValues = {
    userName: "",
    password: ""
  };
  const [formValues, setFormValues] = useState(formDefaultValues);
  const { userName, password } = formValues;

  useEffect(() => {
    console.log({ userName, password });
  }, [formValues]);

  const handleChange = e => {
    const target = e.target;
    setFormValues(prevState => ({
      ...prevState,
      [target.name]: target.value
    }));
  };
  return (
    <div className="flex justify-center">
      <form className="w-2/5 flex flex-col">
        <label>Username:</label>
        <input
          type="text"
          name={"userName"}
          className="border"
          value={userName}
          onChange={handleChange}
        />
        <label>Password:</label>
        <input
          type="password"
          name={"password"}
          className="border"
          value={password}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};
