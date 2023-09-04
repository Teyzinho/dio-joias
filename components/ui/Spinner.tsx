const Spinner = ({color = 'bg-white'} : {color?:string}) => {
  return (
    <div
      className={`w-5 h-5
        relative
        rounded-full
        animate-spin
        before:block
        before:absolute
        before:top-0
        before:content-['']
        before:bg-white
        before:w-2
        before:h-2 before:rounded-full
       `}
    />
  );
};

export default Spinner;
