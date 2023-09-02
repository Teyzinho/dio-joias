type Props = {
  type: string;
  className?: string;
  placeHolder?: string;
};

const Input = ({ type,className,placeHolder}: Props) => {
  return (
    <input
      type={type}
      className={`pl-2 border border-gray-300  focus:outline-dotted ${className}`}
      placeholder={placeHolder}
    />
  );
};

export default Input;
