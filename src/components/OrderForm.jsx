import { ColorSelector } from "./ColorSelector";
export function OrderForm(props = {}) {
  const { onColor, ...rest } = props
  return <div {...props}>
    <div className="flex flex-row font-5xl font-bold price p-3 justify-start">USD $1270</div>
    <ColorSelector onColor={onColor} />
    <div className="flex flex-row justify-center p-5">
      <button className="btn btn-primary">Place Order</button>
    </div>
  </div>
}