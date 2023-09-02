
type Props = {
  children: React.ReactNode;
  className?: string;
};

const TitleUnderline = ({ children, className }: Props) => {
  return (
    <h3 className='text-secondary text-2xl font-normal underline decoration-primary decoration-[1px]'>
      {children}
    </h3>
  )
}

export default TitleUnderline
