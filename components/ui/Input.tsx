type Props = {
  type: string;
};

const Input = ({ type }: Props) => {
  return (
    <input
      type={type}
      className="pl-2 border border-gray-300  focus:outline-dotted "
    />
  );
};

export default Input;
