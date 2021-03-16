import styled from "@emotion/styled";
import Option from "./Option";
import constants from "./constants";
import { useContext } from "react";
import { DispatchContext } from "../../../store/context";
import { chooseGameOption } from "../../../store/actions";

const Container = styled.div`
  height: 75px;
  width: 205px;
  position: absolute;
  bottom: 1.75rem;
  left: 25rem;
  background-color: var(--color-almostBlack);
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-chipsTeal);
  box-sizing: border-box;
  border-radius: 4px;
`;

const AutomaticOptions: React.FunctionComponent = () => {
  const dispatch: (arg: object) => void = useContext(DispatchContext);
  const handleOptionSelection = (e: any): void => {
    if (e.target.className === constants.SIT_OUT) {
      chooseGameOption(constants.SIT_OUT, dispatch);
    }
  };

  return (
    <Container>
      <Option
        onClick={e => handleOptionSelection(e)}
        text={constants.SIT_OUT}
      />
      {/* <Option onClick={(e) => handleOptionSelection(e)} text={constants.FOLD_ANY} /> */}
      {/* <Option onClick={(e) => handleOptionSelection(e)} text={constants.LEAVE_TABLE} /> */}
    </Container>
  );
};

export default AutomaticOptions;
