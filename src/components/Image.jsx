export function Image(props) {
  const { src, ...rest } = props
  return <div {...rest} >
  <img src={src || "/public/schooter.jpeg"} 
    className="main-image"
  />
  </div>
}