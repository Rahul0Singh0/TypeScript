import { PropsWithChildren, ReactNode, useState } from "react";

type TitleProps = {
  text: string, 
  list: string[],
  onChangeHandler?: React.ChangeEventHandler<HTMLInputElement>,
  // children: ReactNode,
};

function Title({ text, list, children } : PropsWithChildren<TitleProps>) {
    const [count, setCount] = useState(0);
    const [inputText, setInputText] = useState("");
    return (
        <>
          {text}
          <br />
          {list && list.length > 0 && list[0]}
          <input 
            // onChange={onChangeHandler}
            onChange={(e) => setInputText(e.target.value)}
          />
          {inputText}
          {children}

          <div>
            <button onClick={() => setCount(count+1)}>Inc</button>
            <button onClick={() => setCount(count-1)}>Dec</button>
            <br />
            <input 
              type="number"
              // onChange={(e) => setCount(Number(e.target.value))}
              // onChange={(e) => setCount(+e.target.value)}
              onChange={(e) => {console.log(e.target.value); setCount(e.target.valueAsNumber)}}
            />
            <br />
            {count}
          </div>
        </>
    );
}

export default Title;