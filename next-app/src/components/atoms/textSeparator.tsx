import React from 'react'

interface ITextSeperatorProps {
  text: string
}
function TextSeparator({ text }: ITextSeperatorProps) {
  return (
    <div className="relative w-full flex items-center justify-center text-gray-400 my-7">
      <div className="w-full h-[1px] bg-gray-300 absolute"></div>
      <p className="bg-white px-7 z-20">{text}</p>
    </div>
  )
}

export default TextSeparator
