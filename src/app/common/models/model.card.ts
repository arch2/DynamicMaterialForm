import { Field } from './model.field';

export class Card {
    cardTitle: string;
    cardStyling: string;
    columns: number;
    rows: number;
    cardColumns: number;
    cardRows: string;
    fields: Field[];
}