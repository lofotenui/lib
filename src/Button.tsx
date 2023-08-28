import React from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  children: React.ReactNode
  className?: string
} & JSX.IntrinsicElements["button"]

export default function Button({ children, className, ...props }: Props) {
  return (
    <button
      className={twMerge(
        "font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

function PrimaryButton({ children, className, ...props }: Props) {
  return (
    <Button
      className={twMerge(
        "focus:ring-4 focus:ring-polarnight-300 dark:focus:ring-polarnight-500 bg-polarnight-500 dark:bg-polarnight-600 text-polarnight-50 hover:bg-polarnight-600 dark:hover:bg-polarnight-500",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  )
}
Button.Primary = PrimaryButton

function SecondaryButton({ children, className, ...props }: Props) {
  return (
    <Button
      className={twMerge(
        "focus:ring-4 focus:ring-polarnight-300 dark:focus:ring-polarnight-600 text-polarnight-900 dark:text-polarnight-50 border border-polarnight-900 dark:border-polarnight-600 hover:bg-polarnight-50 dark:hover:bg-polarnight-700",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  )
}
Button.Secondary = SecondaryButton

function ButtonSuccess({ children, className, ...props }: Props) {
  return (
    <Button
      className={twMerge(
        "focus:ring-4 focus:ring-forest-300 dark:focus:ring-forest-600 bg-forest-500 dark:bg-forest-600 text-forest-50 hover:bg-forest-600 dark:hover:bg-forest-500",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  )
}
Button.Success = ButtonSuccess

function ButtonWarning({ children, className, ...props }: Props) {
  return (
    <Button
      className={twMerge(
        "focus:ring-4 focus:ring-dawn-300 dark:focus:ring-dawn-600 bg-dawn-500 dark:bg-dawn-600 text-dawn-50 hover:bg-dawn-600 dark:hover:bg-dawn-500",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  )
}
Button.Warning = ButtonWarning

function ButtonDanger({ children, className, ...props }: Props) {
  return (
    <Button
      className={twMerge(
        "focus:ring-4 focus:ring-dahlia-300 dark:focus:ring-dahlia-600 bg-dahlia-500 dark:bg-dahlia-600 text-dahlia-50 hover:bg-dahlia-600 dark:hover:bg-dahlia-500",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  )
}
Button.Danger = ButtonDanger
