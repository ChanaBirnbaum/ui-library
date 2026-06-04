import { default as React } from 'react';
import { EditableConfig } from '../IpsDataTable.types';

export interface EditableCellProps {
    config?: EditableConfig;
    value: unknown;
    onChange: (v: unknown) => void;
    onCommit?: () => void;
    onCancel?: () => void;
}
export declare function EditableCell({ config, value, onChange, onCommit, onCancel }: EditableCellProps): React.JSX.Element;
