import { ConfigForm } from '../models';

export const FORM_DATA: ConfigForm =
{
    title: "Hello World",
    formName: "TestForm",
    sections: [
        {
            sectionTitle: "Section Test",
            formGrouping: "Test1",
            sectionStyling: "",
            sectionGridColumns: 4,
            sectionGridRows: "4:3",
            formId: 0,
            cards: [
                {
                    cardTitle: "Card Title",
                    cardStyling: "",
                    columns: 4,
                    rows: 4,
                    cardRows: "4:3",
                    cardColumns: 4,
                    fields: [
                        {
                            controlType: "checkbox",
                            key: "IsWheelchair",
                            label: "Wheelchair",
                            value: "0",
                            order: 1,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            validations: [
                                { validationType: "required", validationValue: true }
                            ]
                        },
                        {
                            controlType: "datetimepicker",
                            key: "StartDate",
                            label: "Start",
                            value: "05/26/1980",
                            order: 3,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            validations: [
                                { validationType: "required", validationValue: true }
                            ]
                        },
                        {
                            controlType: "dropdown",
                            key: "stuStatus",
                            label: "Reg. Status",
                            value: "A",
                            order: 2,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            options: [
                                { key: "A", value: "A" },
                                { key: "C", value: "C" },
                                { key: "I", value: "I" },
                                { key: "+", value: "+" }
                            ],
                            validations: [
                                { validationType: "required", validationValue: true }
                            ]
                        },
                        {
                            controlType: "textbox",
                            key: "stuGradeLevel",
                            label: "Grade Level",
                            value: "Test",
                            order: 4,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            validations: [
                                { validationType: "required", validationValue: true }
                            ]
                        }
                    ]
                },
                {
                    cardTitle: "Card 2",
                    cardStyling: "",
                    columns: 4,
                    rows: 4,
                    cardRows: "4:3",
                    cardColumns: 4,
                    fields: [
                        {
                            controlType: "checkbox",
                            key: "IsChair",
                            label: "Chair",
                            value: 0,
                            order: 1,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            validations: [
                                { validationType: "required", validationValue: true }
                            ]
                        },
                        {
                            controlType: "datetimepicker",
                            key: "EndDate",
                            label: "End",
                            value: "05/26/1980",
                            order: 3,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            validations: [
                                { validationType: "required", validationValue: true }
                            ]
                        },
                        {
                            controlType: "textbox",
                            key: "stuGradeLevel",
                            label: "Grade Level",
                            value: "Test2",
                            order: 4,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            validations: [
                                { validationType: "required", validationValue: true }
                            ]
                        }
                    ]
                }
            ],
        },
        {
            sectionTitle: "Section 2 Test",
            formGrouping: "Test2",
            sectionStyling: "",
            sectionGridColumns: 4,
            sectionGridRows: "4:3",
            formId: 1,
            cards: [
                {
                    cardTitle: "Second Tab Card",
                    cardStyling: "",
                    columns: 4,
                    rows: 4,
                    cardRows: "4:3",
                    cardColumns: 4,
                    fields: [
                        {
                            controlType: "datetimepicker",
                            key: "TestDate",
                            label: "Test",
                            value: "8/8/2018",
                            order: 3,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            validations: [
                                { validationType: "required", validationValue: true }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};