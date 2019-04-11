import { Field } from './model.field';

export class Card {
    cardTitle: string;
    cardStyling: string;
    columns: number;
    rows: number;
    cardColumns: number;
    cardRows: string;
    fields: Field[];

    constructor(options:
        {
            cardTitle?: string;
            cardStyling?: string;
            columns?: number;
            rows?: number;
            cardColumns?: number;
            cardRows?: string;
            fields?: Field[];
        } = {}) {
        this.cardTitle = options.cardTitle;
        this.cardStyling = options.cardStyling;
        this.columns = options.columns;
        this.rows = options.rows;
        this.cardColumns = options.cardColumns;
        this.cardRows = options.cardRows;
        this.fields = options.fields || [];
    }
}