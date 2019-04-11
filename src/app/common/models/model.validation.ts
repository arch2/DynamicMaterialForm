export class Validation {
    validationType: string;
    validationValue: any;
    validationMessage: string;
    constructor(options:
        {
            validationType?: string;
            validationValue?: any;
            validationMessage?: string;
        } = {}) {
        this.validationType = options.validationType;
        this.validationValue = options.validationValue;
        this.validationMessage = options.validationMessage;
    }
}