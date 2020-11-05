import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import LayoutM from "../../../components/LayoutM";
import { Button, Spin, Input } from "antd";
import selectedField from "../../../utils/selectedPanel";
import { GET_COMPANIES } from "../../../utils/graphqlQSM/queries";
import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import { PlusCircleFilled } from "@ant-design/icons";
import { ADD_PRODUCT } from "../../../utils/graphqlQSM/mutations";
import {
  CardPanel,
  FormFlex,
  FormItem,
} from "../../../components/styledComponents/components";

const Produkt = () => {
  const { control, handleSubmit } = useForm();
  const { loading, error } = useQuery(GET_COMPANIES);
  const [addProduct] = useMutation(ADD_PRODUCT);
  //, {variables: {branch: branch}}
  if (loading) {
    return (
      <LayoutM selectedField={selectedField.DODAJ_BRANCH}>
        <CardPanel>
          <Spin size="large" />
        </CardPanel>
      </LayoutM>
    );
  }

  if (error) {
    const router = useRouter();
    router.push("/");
  }

  if (!loading) {
    return (
      <LayoutM selectedField={selectedField.DODAJ_PRODUKT}>
        <CardPanel>
          <h1>Dodaj nowy produkt</h1>

          <FormFlex
            onSubmit={handleSubmit((args) => {
              const product = {
                name: args.name,
              };
              console.log(product);
              addProduct({ variables: { product: product } });
              console.log("Wszystko git sprawdz baze");
            })}>
            <FormItem>
              <label htmlFor="name">Nazwa produktu: </label>
              <Controller
                name="name"
                id="name"
                as={<Input />}
                rules={{ required: true }}
                control={control}
                defaultValue={null}
                style={{ width: 200 }}
                placeholder="Podaj nazwe produktu"
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
  }
};
export default Produkt;
