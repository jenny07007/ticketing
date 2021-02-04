import { useState } from "react";
import Router from "next/router";
import useRequest from "../../hooks/useRequest";

export default function signup() {
  const [credential, setCredential] = useState({ email: "", password: "" });
  const { doRequest, errors } = useRequest({
    url: "/api/users/signin",
    method: "post",
    body: { email: credential.email, password: credential.password },
    onSuccess: () => Router.push("/"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredential((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await doRequest();
    setCredential({ email: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign In</h1>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          className="form-control"
          value={credential.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Passowrd</label>
        <input
          id="passoword"
          type="password"
          name="password"
          className="form-control"
          value={credential.password}
          onChange={handleChange}
        />
      </div>
      {errors}
      <button className="btn btn-primary">Sign In</button>
    </form>
  );
}
