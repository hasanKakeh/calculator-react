const Display = ({stackInput, input}) => {
  return (
    <div
      className="border flex-end "
      style={{ width: "100%", minHeight: 85, backgroundColor: "#fff" }}
    >
      <p className="text-end text-break m-2" style={{ textAlign: "end" }}>
        {stackInput}
      </p>
      <h3 id="display" className="text-end  m-2" style={{ textAlign: "end" }}>
        {input}
      </h3>
    </div>
  );
};

export default Display;
