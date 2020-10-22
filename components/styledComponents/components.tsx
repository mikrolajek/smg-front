import styled from "styled-components";

export const CardPanel = styled.div`
  background-color: white;
  padding: 50px;
  border-radius: 5px;
  max-width: 400px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 150px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06);
`;

export const FormItem = styled.div`
  margin: 10px 0;
`;

export const FormFlex = styled.form`
  display: flex;
  flex-direction: column;
`;