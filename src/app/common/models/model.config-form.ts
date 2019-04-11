import { Section } from './model.section';

export class ConfigForm {
    title: string;
    formName: string;
    sections: Section[];
    formTheme: string;

    constructor(options:
        {
            title?: string;
            formName?: string;
            sections?: Section[];
            formTheme?: string;
        } = {}) {
        this.title = options.title;
        this.formName = options.formName;
        this.sections = options.sections || [];
        this.formTheme = options.formTheme;
    }
}
