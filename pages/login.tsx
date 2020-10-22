import { useApolloClient } from "@apollo/client";
import Axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Cookie from "js-cookie";
import { useRouter } from "next/router";

type Inputs = {
  username: string;
  password: string;
};

type token = {
  token: string;
};

const Login = () => {
  // const client = useApolloClient();
  const router = useRouter();
  const [error, setError] = useState<string | null>();
  const { register, handleSubmit } = useForm<Inputs>();
  const onHandleSubmitAsync = async (inp: Inputs) => {
    try {
      const {
        data: { token },
      } = await Axios.post<token>("http://localhost:3000/api/login", {
        ...inp,
      });
      alert(token);
      Cookie.set("token", token);
      localStorage.setItem("token", token);
      router.push("/panel");
    } catch (error) {
      setError("błędne hasło lub nazwa użytkownika");
      console.log(error);
    }

    // alert(JSON.stringify(token));
  };
  return (
    <>
      <form onSubmit={handleSubmit(onHandleSubmitAsync)}>
        <input ref={register} type="text" name="username" />
        <input ref={register} type="text" name="password" />
        <button ref={register} type="submit">
          submit
        </button>
        {error}
      </form>
    </>
  );
};

export default Login;
