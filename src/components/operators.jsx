import Button from "./buttons";
export const BottomOperators = () => {
  return (
    <div className="row">
      <Button bootstrapClasses="col-3" char="0"></Button>
      <Button bootstrapClasses="col-3" char="."></Button>
      <Button bootstrapClasses="col-6" char="="></Button>
    </div>
  );
};

export const RightOprators = () => {
  return (
    <div className="d-flex flex-column h-100  ">
      <Button char="-"></Button>
      <Button bootstrapClasses=" h-100 " char="+"></Button>
    </div>
  );
};

export const UpOperators = () => {
  return (
    <div className="row">
      <Button bootstrapClasses="col-6" char="C"></Button>
      <Button bootstrapClasses="col-3" char="/"></Button>
      <Button bootstrapClasses="col-3" char="*"></Button>
    </div>
  );
};
