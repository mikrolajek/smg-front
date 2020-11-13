import React from "react";
import { useMutation } from "@apollo/client";
import LayoutM from "../../../components/universal-components/LayoutM";
import { Button, Input } from "antd";
import selectedField from "../../../utils/selectedPanel";
// import { GET_COMPANIES } from "../../../utils/graphqlQSM/queries";
// import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import { PlusCircleFilled } from "@ant-design/icons";
import { ADD_COMPANY } from "../../../utils/graphqlQSM/mutations";
import {
  CardPanel,
  FormFlex,
  FormItem,
} from "../../../components/styledComponents/components";

const Firme = () => {
  const { control, handleSubmit } = useForm();
  // const { control, handleSubmit, errors } = useForm();
  const [addCompany] = useMutation(ADD_COMPANY);
  //, {variables: {branch: branch}}

  return (
    <LayoutM selectedField={selectedField.DODAJ_SKLEP}>
      <CardPanel>
        <h1>Dodaj nową sieć</h1>
        <FormFlex
          onSubmit={handleSubmit((args) => {
            const company = {
              name: args.name,
            };
            console.log(company);
            addCompany({ variables: { company: company } });
            console.log("Wszystko git sprawdz baze");
          })}>
          <FormItem>
            <label htmlFor="name">Nazwa sieci: </label>
            <Controller
              name="name"
              id="name"
              as={<Input />}
              rules={{ required: true }}
              control={control}
              defaultValue={null}
              style={{ width: 200 }}
              placeholder="Podaj nazwe sieci"
            />
          </FormItem>
          <FormItem style={{ display: "flex", justifyContent: "flex-end" }}>
            <div></div>
            <Controller
              name="submitButton"
              control={control}
              style={{ maxWidth: "max-content" }}
              as={<Button> Dodaj </Button>}
              icon={<PlusCircleFilled />}
              htmlType="submit"
              type="primary"
              size="large"
              defaultValue={null}
            />
          </FormItem>
        </FormFlex>
      </CardPanel>
    </LayoutM>
  );
};
export default Firme;
