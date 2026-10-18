export interface OptionSection<TOption> {
    /** null = the options without a group, shown first */
    group: string | null;
    options: TOption[];
}
/** Ungrouped options first, then one section per distinct group, in order of first appearance */
export declare function groupOptions<TOption extends {
    group?: string;
}>(options: TOption[]): OptionSection<TOption>[];
