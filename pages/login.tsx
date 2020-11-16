// import { useApolloClient } from "@apollo/client";
import { Button, Input } from "antd";
import Head from "next/head";
import Axios from "axios";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import {
  CardPanel,
  FormFlex,
  FormItem,
} from "../components/styledComponents/components";
import { LoginOutlined } from "@ant-design/icons";
import styled from "styled-components";

const CenterContent = styled.div`
  display: flex;
  justify-items: center;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-image: url("https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
  /* background-size: auto; */
  background-position: bottom;
  background-size: cover;
  /* background-clip: padding-box; */
`;

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
  const { control, handleSubmit } = useForm<Inputs>();

  // const { loading, error, data } = useQuery(GET_COMPANIES);
  // const [addProduct] = useMutation(ADD_PRODUCT);

  const onHandleSubmitAsync = async (inp: Inputs) => {
    try {
      const {
        data: { token },
      } = await Axios.post<token>("/api/login", {
        ...inp,
      });
      Cookie.set("token", token);
      localStorage.setItem("token", token);
      router.push("/panel");
    } catch (error) {
      setError("Błędne hasło lub nazwa użytkownika");
      console.log(error);
    }

    // alert(JSON.stringify(token));
  };
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <CenterContent>
        <CardPanel style={{ height: "fit-content", width: "400px" }}>
          <h1>Logowanie</h1>
          <FormFlex
            onSubmit={handleSubmit(async (args: Inputs) => {
              onHandleSubmitAsync(args);
            })}>
            <FormItem>
              <label
                style={{ display: "block", padding: "6px 2px" }}
                htmlFor="username">
                Nazwa użytkownika:{" "}
              </label>
              <Controller
                name="username"
                id="username"
                as={<Input />}
                rules={{ required: true }}
                control={control}
                defaultValue={null}
                style={{ width: "100%" }}
                placeholder="Nazwa użytkownika"
              />
            </FormItem>

            <FormItem>
              <label
                htmlFor="password"
                style={{ display: "block", padding: "6px 2px" }}>
                Hasło:
              </label>
              <Controller
                name="password"
                id="password"
                as={<Input.Password />}
                rules={{ required: true }}
                control={control}
                defaultValue={null}
                style={{ width: "100%" }}
                placeholder="Hasło"
              />
            </FormItem>

            <FormItem style={{ display: "flex", justifyContent: "flex-end" }}>
              <div></div>
              <Controller
                //@ts-ignore
                name="submitButton"
                control={control}
                style={{ width: "100%", marginTop: "5px" }}
                as={<Button> Zaloguj </Button>}
                icon={<LoginOutlined />}
                htmlType="submit"
                type="primary"
                size="large"
                defaultValue={null}
              />
            </FormItem>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </FormFlex>
        </CardPanel>
      </CenterContent>
    </>
  );
};

export default Login;

// <>
//   <form onSubmit={handleSubmit(onHandleSubmitAsync)}>
//     <input ref={register} type="text" name="username" />
//     <input ref={register} type="text" name="password" />
//     <button ref={register} type="submit">
//       submit
//     </button>
//     {error}
//   </form>
// </>
