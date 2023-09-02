type Props = {
  type: string;
  className: string
};

const Input = ({ type,className }: Props) => {
  return (
    <input
      type={type}
      className={`pl-2 border border-gray-300  focus:outline-dotted ${className}`}
    />
  );
};

export default Input;
