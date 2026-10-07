"use client"

import * as React from "react"

export type ToastActionElement = React.ReactElement

export interface ToastProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      open = true,
      onOpenChange,
      title,
      description,
      action,
      className,
      ...props
    },
    ref
  ) => {
    if (!open) return null

    return (
      <div
        ref={ref}
        role="status"
        className={[
          "pointer-events-auto relative flex w-full items-start gap-4 overflow-hidden rounded-2xl border border-[#dce3f3] bg-white p-5 shadow-xl",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        <div className="grid flex-1 gap-1">
          {title && (
            <div className="font-semibold text-[#070f32]">
              {title}
            </div>
          )}

          {description && (
            <div className="text-sm text-[#53607f]">
              {description}
            </div>
          )}
        </div>

        {action}

        <button
          type="button"
          aria-label="Tutup"
          onClick={() => onOpenChange?.(false)}
          className="shrink-0 rounded-lg px-2 py-1 text-sm font-medium text-[#53607f] transition hover:bg-[#f7f9ff] hover:text-[#070f32]"
        >
          ×
        </button>
      </div>
    )
  }
)

Toast.displayName = "Toast"

const ToastViewport = React.forwardRef<
  HTMLOListElement,
  React.HTMLAttributes<HTMLOListElement>
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={[
      "fixed right-4 top-4 z-[100] flex w-[380px] max-w-[calc(100vw-2rem)] flex-col gap-3",
      className,
    ]
      .filter(Boolean)
      .join(" ")}
    {...props}
  />
))

ToastViewport.displayName = "ToastViewport"

const ToastTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={["font-semibold text-[#070f32]", className]
      .filter(Boolean)
      .join(" ")}
    {...props}
  />
))

ToastTitle.displayName = "ToastTitle"

const ToastDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={["text-sm text-[#53607f]", className]
      .filter(Boolean)
      .join(" ")}
    {...props}
  />
))

ToastDescription.displayName = "ToastDescription"

const ToastClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children = "×", ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    aria-label="Tutup"
    className={[
      "shrink-0 rounded-lg px-2 py-1 text-sm text-[#53607f] hover:bg-[#f7f9ff]",
      className,
    ]
      .filter(Boolean)
      .join(" ")}
    {...props}
  >
    {children}
  </button>
))

ToastClose.displayName = "ToastClose"

export {
  Toast,
  ToastViewport,
  ToastTitle,
  ToastDescription,
  ToastClose,
}