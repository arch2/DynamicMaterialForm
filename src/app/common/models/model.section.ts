import { Card } from './model.card';

export class Section {
    sectionTitle: string;
    formId: number;
    formGrouping: string;
    sectionGridRows: string;
    sectionGridColumns: number;
    sectionStyling: string;
    cards: Card[];
    validationMessage: string;

    constructor(options:
        {
            sectionTitle?: string;
            formId?: number;
            formGrouping?: string;
            sectionGridRows?: string;
            sectionGridColumns?: number;
            sectionStyling?: string;
            cards?: Card[];
            validationMessage?: string;
        } = {}) {
        this.sectionTitle = options.sectionTitle;
        this.formId = options.formId;
        this.formGrouping = options.formGrouping;
        this.sectionGridRows = options.sectionGridRows;
        this.sectionGridColumns = options.sectionGridColumns;
        this.sectionStyling = options.sectionStyling;
        this.cards = options.cards || [];
        this.validationMessage = options.validationMessage;
    }
}