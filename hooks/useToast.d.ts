declare const useToast: () => {
    show: (message: string) => string;
    dismiss: (id: string) => void;
};
export default useToast;
