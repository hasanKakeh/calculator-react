const Display = ({  input }) => {
  return (
    <div
      className="border flex-end "
      style={{ width: "100%", minHeight: 85, backgroundColor: "#fff" }}
    >
     {input.length<16 && <h3 id="display" className="text-end  m-2 mt-3" style={{ textAlign: "end" ,wordWrap:"break-word"}}>
        {input}
      </h3>
     }{input.length>=16 && <h5 id="display" className="text-end  m-2" style={{ textAlign: "end",wordWrap:"break-word"}}>
        {input}
      </h5>
     }
      {/* <p className="text-end text-break m-2" style={{ textAlign: "end" }}>
        {result}
      </p> */}
    </div>
  );
};

export default Display;
