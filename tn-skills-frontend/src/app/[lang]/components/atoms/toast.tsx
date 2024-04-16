import { toast, ToastContent, ToastOptions, Slide, Id } from "react-toastify"

import { useTheme } from "@/src/context/Theme"

export const defaultToastOptions: ToastOptions = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Slide,
};

type ToastType = "success" | "error" | "info" | "warning" | "default";

export const ShowToast = (
    type: ToastType,
    content: ToastContent,
    options: Partial<ToastOptions> = {},
): Id => {

    const { theme } = useTheme();

    const optionsToApply = { ...defaultToastOptions, ...options, theme: theme };

    console.log("Ho")

    switch (type) {
        case "success":
            console.log(optionsToApply)
            return toast.success(content, optionsToApply);
        case "error":
            return toast.error(content, optionsToApply);
        case "info":
            return toast.info(content, optionsToApply);
        case "warning":
            return toast.warn(content, optionsToApply);
        case "default":
            return toast(content, optionsToApply);
        default:
            return toast(content, optionsToApply);
    }
};