export class Validation {
    validationType: string;
    validationValue: any;
    validationMessage: string;
    validationCompare: string;
    constructor(options:
        {
            validationType?: string;
            validationValue?: any;
            validationMessage?: string;
            validationCompare?: string;
        } = {}) {
        this.validationType = options.validationType;
        this.validationValue = options.validationValue;
        this.validationMessage = options.validationMessage;
        this.validationCompare = options.validationCompare;
    }
}