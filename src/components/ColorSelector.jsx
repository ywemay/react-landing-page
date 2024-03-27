import { useState, useEffect } from "react";
export function ColorOption(params = {}) {
  const { color, value, ...rest } = params
  if (value === color)
  return <div className="btn btn-secondary" {...rest}>{color}</div>
  // <div 
  //   className="border p-3 border-red-700 bg-slate-500" {...rest}>{color}</div>
  return <div className="btn btn-outlined" {...rest}>{color}</div>
}

const defaults = {
  colors: 'red,green,blue,yellow,white'.split(',')
}

export function ColorSelector(params) {
  const { colors, onColor, ...rest } = { ...defaults, ...params}
  const [ value, setValue ] = useState('yellow')

  const handleSetColor = (color) => {
    setValue(color)
    console.log(typeof onColor)
    typeof onColor === 'function' ? onColor(color) : {}
  }
  return <div className="flex flex-row gap-1 justify-center flex-wrap">
    { 
      colors.map((color, index) => <ColorOption 
        key={`color-${index}`} 
        value={value}
        onClick={() => handleSetColor(color)}
        color={color} /> )
    }
  </div>
}