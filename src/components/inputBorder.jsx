import Button from "./button";

const InputBorder = ({ buttons, onClick }) => {
  return (
    <div
      className="row rounded border "
      style={{ width: "100%", marginLeft: 0, marginRight: 0 }}
    >
    
      {buttons.map((r, i) => {
        if (i === 2) {
          return (
            <div key={i} className="row mr-0 ml-0" style={{ width: "100%" }}>
              <div className="col-9 pr-0 pl-0">
                {r.slice(0, 2).map((row) => {
                  return row.map((c, i) => {
                    return (
                      <Button
                        key={i}
                        id={c.char}
                        onClick={onClick}
                        value={c.char}
                        className=" btn hover align-middle  col-4  "
                        char={c.char}
                      ></Button>
                    );
                  });
                })}
              </div>
              <Button
                id={r[2].char}
                className=" btn hover  float-right  col-3"
                onClick={onClick}
                value={r[2].char}
                char={r[2].char}
              ></Button>
            </div>
          );
        }
        return r.map((c, i) => {
          return (
            <Button
              key={i}
              id={c.char}
              onClick={onClick}
              value={c.char}
              className={
                c.char === "C" || c.char === "="
                  ? "  hover btn col-6 float-right"
                  : " hover btn col-3 float-right "
              }
              char={c.char}
            ></Button>
          );
        });
      })}
    </div>
  );
};

export default InputBorder;
