import { useMutation, useQuery } from "@apollo/client";
import { Button, Input, Modal } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { LoaderNoDash } from "../../../../components/LoaderInDash";
import { CardPanel } from "../../../../components/styledComponents/components";
import { GET_SINGLE_LINK } from "../../../../utils/graphqlQSM/queries";
import { Typography } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import { UPDATE_LINK_URL } from "../../../../utils/graphqlQSM/mutations";
const { Title } = Typography;
const { TextArea } = Input;

interface IGetSingleLinkProps {
  id: string | string[];
  title: string;
}

export const GetSingleLink = ({ id, title }: IGetSingleLinkProps) => {
  const [changeUrl] = useMutation(UPDATE_LINK_URL);
  // const [changeUrl, mutationObject] = useMutation(UPDATE_LINK_URL);
  const { loading, error, data } = useQuery(GET_SINGLE_LINK, {
    variables: { id: id },
  });

  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");

  const showModal = () => {
    setVisible(true);
    setInputValue(data.link_by_pk.url);
  };

  const onInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const handleOk = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    console.log(event);
    changeUrl({ variables: { id: id, url: inputValue } });
    setVisible(false);
  };

  const handleCancel = (e: any) => {
    setVisible(false);
    console.log(e);
  };

  if (loading) return <LoaderNoDash />;

  if (error) {
    const router = useRouter();
    router.push("/");
  }

  // setInputValue();
  // data.link_by_pk.url

  return (
    <CardPanel style={{ height: "350px" }}>
      <Title level={4}>{title} </Title>
      <span>
        <a href={data.link_by_pk.url}>{data.link_by_pk.url}</a>
      </span>
      <Button
        style={{ margin: "20px 0" }}
        icon={<PlusCircleFilled />}
        type="primary"
        size="large"
        onClick={showModal}>
        Edytuj
      </Button>
      <Modal
        title="Edytuj link"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}>
        <TextArea value={inputValue} onChange={onInputChange} />
      </Modal>
    </CardPanel>
  );

  return <></>;
};

export default GetSingleLink;
// const dsLocation = data.link_by_pk.groups.map((item: any) => ({
//   name: item?.location.company?.name,
//   id: item.location.id,
//   link: item.link.url,
//   address: item.location.address,
//   key: `${item.location.id}`,
// }));
