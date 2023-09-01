import { ReactNode } from "react"

type Props = {
  children: ReactNode,
  type?: "button" | "submit",
  className?: string
}

const Button = ({children , type = 'button' ,className}:Props) => {
  return (
    <button
      type={type}
      className={`bg-primary w-fit text-sm font-normal uppercase leading-relaxed tracking-wide px-8 py-4 `}
    >
      {children}
    </button>
  )
}

export default Button
