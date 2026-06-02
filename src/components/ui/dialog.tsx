import { Dialog as DialogPrimitive } from "radix-ui";
import type * as React from "react"
import {cn}  from "@/lib/utils"


const Dialog  = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogClose = DialogPrimitive.Close;


function DialogOverlay({className, ...props}: React.ComponentProps<typeof DialogPrimitive.Overlay>){
    return(
        <DialogPrimitive.Overlay className={cn("fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className)} {...props} />
    )
}


function DialogContent({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPrimitive.Portal>
      <DialogOverlay />
      <DialogPrimitive.Content
        className={cn(
          "w-[calc(100vw-32px)] max-w-135 rounded-3xl border border-slate-900/10 bg-white p-6 text-slate-900 shadow-2xl dark:border-blue-400/15 dark:bg-[#101827] dark:text-white md:p-8",
          className,
          "fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 outline-none data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        )}
        {...props}
      />
    </DialogPrimitive.Portal>
  );}

  export {Dialog,DialogTrigger,DialogClose,DialogContent}
