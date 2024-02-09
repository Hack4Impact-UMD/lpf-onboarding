import "./button.css";

const CounterButton = (props: { onClick: () => void; color: string }) => {
  return (
    <div
      className={props.color == "red" ? "dec-button" : "inc-button"}
      onClick={props.onClick}
    ></div>
  );
};

export default CounterButton;
