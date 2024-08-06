import { useCounter } from "../store/useCounter";

interface ICard {
  name: string;
  address: string;
}

function Card({ name, address }: ICard) {
  const { count } = useCounter();
  return (
    <>
      <h1 className="bg-red-600 text-white">
        hello my name is {name} and <br /> i am from {address}
      </h1>
      {/* <h1 className="bg-red-600 text-white">
        hello my name is {props.name} and <br /> i am from {props.address}
      </h1> without using de-structuring */}
      <div>zustand count is {count}</div>
    </>
  );
}
export default Card;
