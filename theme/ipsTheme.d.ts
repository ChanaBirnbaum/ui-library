export declare const ipsTheme: {
    readonly colors: {
        readonly white: "#FFFFFF";
        readonly black: "#000000";
        readonly gray100: "#F7FAFC";
        readonly gray500: "#6B7280";
        readonly gray900: "#111827";
        readonly primary: "#2563EB";
        readonly primaryDark: "#1D4ED8";
        readonly success: "#16A34A";
        readonly danger: "#DC2626";
    };
    readonly typography: {
        readonly fonts: {
            readonly body: "Inter, system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial";
            readonly heading: "Inter, system-ui, -apple-system, \"Segoe UI\"";
        };
        readonly sizes: {
            readonly xs: "12px";
            readonly sm: "14px";
            readonly md: "16px";
            readonly lg: "20px";
            readonly xl: "24px";
        };
        readonly weights: {
            readonly regular: 400;
            readonly medium: 500;
            readonly bold: 700;
        };
    };
    readonly spacing: {
        readonly xs: "4px";
        readonly sm: "8px";
        readonly md: "16px";
        readonly lg: "24px";
        readonly xl: "32px";
    };
    readonly borderRadius: "6px";
};
export type IpsTheme = typeof ipsTheme;
export default ipsTheme;
