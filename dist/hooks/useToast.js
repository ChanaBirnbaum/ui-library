import { useCallback } from 'react';
const useToast = () => {
    const show = useCallback((message) => {
        const t = { id: Date.now().toString(), message };
        // placeholder: integrate with a toast system or context
        // For now, log to console
        console.log('toast:', t);
        return t.id;
    }, []);
    const dismiss = useCallback((id) => {
        // placeholder
        console.log('dismiss toast', id);
    }, []);
    return { show, dismiss };
};
export default useToast;
