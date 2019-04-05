import { Validation } from './model.validation';

export class Field {
    label: string;
    key: string;
    controlType: string;
    value: any;
    order: number;
    disabled: boolean;
    visible: boolean;
    columns: number;
    rows: number;
    options?: any[];
    validations: Validation[];
}