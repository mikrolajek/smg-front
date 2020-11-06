import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import LayoutM from "../../../components/universal-components/LayoutM";
import { Select, Button, Spin, Input } from "antd";
import selectedField from "../../../utils/selectedPanel";
import { GET_COMPANIES } from "../../../utils/graphqlQSM/queries";
import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import { PlusCircleFilled } from "@ant-design/icons";
import { ADD_BRANCH } from "../../../utils/graphqlQSM/mutations";
import {
  CardPanel,
  FormFlex,
  FormItem,
} from "../../../components/styledComponents/components";

const Oddzial = () => {
  const { control, handleSubmit } = useForm();
  const { loading, error, data } = useQuery(GET_COMPANIES);
  const [addBranch] = useMutation(ADD_BRANCH);
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
    // let arr: any[];
    const options = data.company.map((comp: any) => {
      return { label: comp.name, value: comp.id };
    });

    return (
      <LayoutM selectedField={selectedField.DODAJ_BRANCH}>
        <CardPanel>
          <h1>Dodaj nowy oddział</h1>
          <FormFlex
            onSubmit={handleSubmit((args) => {
              const branch = {
                id_company: args.id_company,
                address: args.address,
              };
              addBranch({ variables: { location: branch } });
              console.log("Wszystko git sprawdz baze");
            })}>
            <FormItem>
              <label htmlFor="id_company">Firma: </label>
              <Controller
                name="id_company"
                id="id_company"
                as={<Select />}
                rules={{ required: true }}
                options={options}
                control={control}
                defaultValue={null}
                showSearch
                style={{ width: 200 }}
                placeholder="Wybierz firmę"
                optionFilterProp="children"
              />
            </FormItem>
            <FormItem>
              <label htmlFor="address">Adres: </label>
              <Controller
                name="address"
                id="address"
                as={<Input />}
                rules={{ required: true }}
                control={control}
                defaultValue={null}
                style={{ width: 200 }}
                placeholder="Podaj adres placówki"
              />
            </FormItem>
            <FormItem>
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
export default Oddzial;
