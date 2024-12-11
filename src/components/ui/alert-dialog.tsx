import React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cn } from "@/lib/utils";

interface AlertDialogProps extends AlertDialogPrimitive.AlertDialogProps {
  className?: string;
  children?: React.ReactNode;
}

export const AlertDialog: React.FC<AlertDialogProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <AlertDialogPrimitive.Root {...props}>{children}</AlertDialogPrimitive.Root>
  );
};
export const AlertDialogTrigger: React.FC<
  AlertDialogPrimitive.AlertDialogTriggerProps
> = ({ children, ...props }) => {
  return (
    <AlertDialogPrimitive.Trigger asChild {...props}>
      {children}
    </AlertDialogPrimitive.Trigger>
  );
};

export const AlertDialogContent: React.FC<
  AlertDialogPrimitive.AlertDialogContentProps
> = ({ children, className, ...props }) => {
  return (
    <AlertDialogPrimitive.Portal>
      <AlertDialogPrimitive.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
      <AlertDialogPrimitive.Content
        className={cn(
          "fixed top-1/2 left-1/2 w-96 max-w-full bg-white rounded-md shadow-lg transform -translate-x-1/2 -translate-y-1/2 p-6",
          className
        )}
        {...props}>
        {children}
      </AlertDialogPrimitive.Content>
    </AlertDialogPrimitive.Portal>
  );
};

export const AlertDialogTitle: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <AlertDialogPrimitive.Title className="text-lg font-semibold">
      {children}
    </AlertDialogPrimitive.Title>
  );
};

export const AlertDialogDescription: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return (
    <AlertDialogPrimitive.Description className="mt-2 text-sm text-muted-foreground">
      {children}
    </AlertDialogPrimitive.Description>
  );
};

export const AlertDialogCancel: React.FC<
  AlertDialogPrimitive.AlertDialogCancelProps
> = ({ children, className, ...props }) => {
  return (
    <AlertDialogPrimitive.Cancel asChild {...props}>
      <button
        className={cn(
          "px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300",
          className
        )}>
        {children}
      </button>
    </AlertDialogPrimitive.Cancel>
  );
};

export const AlertDialogAction: React.FC<
  AlertDialogPrimitive.AlertDialogActionProps
> = ({ children, className, ...props }) => {
  return (
    <AlertDialogPrimitive.Action asChild {...props}>
      <button
        className={cn(
          "px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600",
          className
        )}>
        {children}
      </button>
    </AlertDialogPrimitive.Action>
  );
};
