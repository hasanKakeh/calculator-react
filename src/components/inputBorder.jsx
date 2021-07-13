import Numbers from "./numbers";
import {UpOperators,BottomOperators,RightOprators} from "./operators"

const InputBorder = () => {
  return (
    <div
      className=" rounded border mr-0 ml-0 w-100"
      style={{  paddingLeft: 15, paddingRight: 15 }}
    >
      <UpOperators  />
      <div className="row">
        <div className="col-9">
          <Numbers  />
        </div>
        <div className="col-3 p-0">
          <RightOprators  />
        </div>
      </div>
      <BottomOperators  />
    </div>
  );
};

export default InputBorder;
