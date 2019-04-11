export class Option {
    key: string;
    value: string;
    constructor(options:
        {
            key?: string;
            value?: any;
        } = {}) {
        this.key = options.key;
        this.value = options.value;
    }
}