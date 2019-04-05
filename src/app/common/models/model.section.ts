import { Card } from './model.card';

export class Section {
    sectionTitle: string;
    formId: number;
    formGrouping: string;
    sectionGridRows: string;
    sectionGridColumns: number;
    sectionStyling: string;
    cards: Card[];
}