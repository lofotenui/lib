import React from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className }: Props) {
  return (
    <div
      className={twMerge(
        "bg-white dark:bg-polarnight-800 rounded-lg shadow-lg p-4 flex items-center gap-4",
        className
      )}
    >
      {children}
    </div>
  )
}
