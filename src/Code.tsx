import React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { nord } from "react-syntax-highlighter/dist/cjs/styles/hljs"
import { twMerge } from "tailwind-merge"

type Props = {
  children: string | string[]
  className?: string
}

export default function Code({ children, className }: Props) {
  return (
    <div
      className={twMerge(
        "w-full max-h-72 max-w-5xl overflow-scroll border border-polarnight-900 dark:border-polarnight-600 rounded-lg",
        className
      )}
    >
      <SyntaxHighlighter
        language="typescript"
        style={nord}
        showLineNumbers={true}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  )
}
