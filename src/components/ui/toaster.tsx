import { useToast } from "@/hooks/use-toast";
import { Toast, ToastPrimitive } from "@/components/ui/toast";
const { ToastProvider, ToastTitle, ToastDescription } = ToastPrimitive;

export const toast = ToastPrimitive.Toast;

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action && <div>{action}</div>}
          </Toast>
        );
      })}
    </ToastProvider>
  );
}

ToastProvider.displayName = "ToastProvider";
ToastTitle.displayName = "ToastTitle";
ToastDescription.displayName = "ToastDescription";
