import Button from "./buttons";
const Numbers = () => {
  const numbersToRender = [7, 8, 9, 4, 5, 6, 1, 2, 3];
  return (
    <div className="row">
      {numbersToRender.map((number) => (
        <Button key={number}  bootstrapClasses="col-4" char={number} />
      ))}
    </div>
  );
};

export default Numbers;
