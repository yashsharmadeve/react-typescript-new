
type TextOwnProps<E extends React.ElementType> = {
    size?: 'sm'|'md'|'lg'
    color?: 'primary'|'secondary'
    children: React.ReactNode
    as?: E // this will take the typeof HTML element like a,span,h1,button
    // But React.ElementType will not be able to handle attribute like Label has htmlfor attribute,form has action attribute
    // so we have to extend and use it 
}

type TextProps<E extends React.ElementType> = TextOwnProps<E> & Omit<React.ComponentProps<E>,keyof TextOwnProps<E>>

const Text = <E extends React.ElementType = 'div'>({size,color,children,as}: TextProps<E>) => {
    const Component = as || 'div'
  return (
    <Component className={`class-with-${size}=${color}`}>{children}</Component>
  )
}

export default Text