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

    constructor(options:
        {
            label?: string,
            key?: string,
            controlType?: string,
            value?: any,
            order?: number,
            disabled?: boolean,
            visible?: boolean,
            columns?: number,
            rows?: number,
            options?: any[],
            validations?: Validation[]
        } = {}) {
        this.label = options.label;
        this.key = options.key;
        this.controlType = options.controlType;
        this.value = options.value;
        this.order = options.order === undefined ? 1 : options.order;
        this.disabled = options.disabled;
        this.visible = options.visible;
        this.columns = options.columns === undefined ? 1 : options.columns;
        this.rows = options.rows === undefined ? 1 : options.rows;
        this.options = options.options || [];
        this.validations = options.validations || [];
    }
}