import React from 'react'

type Props = {
  children: React.ReactNode,
  className: string
}

const Container = ({children,className}: Props) => {
  return (
    <section className={`w-[1180px] min-h-[50vh] mx-auto ${className}`}>
        {children}
    </section>
  )
}

export default Container
