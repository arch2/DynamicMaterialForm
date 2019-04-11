import { ConfigForm, Field } from '../models';

export const FORM_DATA: ConfigForm =
{
    title: "Hello World",
    formName: "TestForm",
    // formTheme: "candy-app-theme",
    formTheme: "",
    sections: [
        {
            sectionTitle: "Wheelchair section",
            formGrouping: "Test1",
            sectionStyling: "",
            sectionGridColumns: 4,
            sectionGridRows: "4:3",
            validationMessage: "This Section is Required",
            formId: 0,
            cards: [
                {
                    cardTitle: "Card Title",
                    cardStyling: "",
                    columns: 2,
                    rows: 2,
                    cardRows: "2:1",
                    cardColumns: 4,
                    fields: [
                        {
                            controlType: "checkbox",
                            key: "IsWheelchair",
                            label: "Wheelchair",
                            value: "true",
                            order: 1,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            validations: []
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
                                { validationType: "required", validationValue: true, validationMessage: "This field is required" }
                            ]
                        },
                        {
                            controlType: "dropdown",
                            key: "stuStatus",
                            label: "Reg. Status",
                            value: "",
                            order: 2,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            options: [
                                { key: "A", value: "Approved" },
                                { key: "C", value: "Closed" },
                                { key: "I", value: "Incomplete" },
                                { key: "+", value: "Needs more" }
                            ],
                            validations: [
                                { validationType: "required", validationValue: true, validationMessage: "This field is required" }
                            ]
                        },
                        {
                            controlType: "textbox",
                            key: "email",
                            label: "Email",
                            value: "Test 1",
                            order: 4,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            validations: [
                                { validationType: "required", validationValue: true, validationMessage: "This field is required" },
                                { validationType: "email", validationValue: true, validationMessage: "This is not a valid email" }
                            ]
                        }
                    ]
                },
                {
                    cardTitle: "Card 2",
                    cardStyling: "",
                    columns: 2,
                    rows: 2,
                    cardRows: "2:1",
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
                            validations: []
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
                                { validationType: "required", validationValue: true, validationMessage: "This field is required" }
                            ]
                        },
                        {
                            controlType: "textbox",
                            key: "stuGradeLevel 2",
                            label: "Grade Level",
                            value: "Test 2",
                            order: 4,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            validations: [
                                { validationType: "required", validationValue: true, validationMessage: "This field is required" }
                            ]
                        },
                        new Field({
                            controlType: "button",
                            key: "button",
                            label: "Next Section",
                            value: "next"
                        })
                    ]
                }
            ],
        },
        {
            sectionTitle: "Date Section",
            formGrouping: "Test2",
            sectionStyling: "",
            sectionGridColumns: 4,
            sectionGridRows: "4:3",
            validationMessage: "There is one field missing",
            formId: 1,
            cards: [
                {
                    cardTitle: "Second Tab Card",
                    cardStyling: "",
                    columns: 4,
                    rows: 4,
                    cardRows: "2:1",
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
                                { validationType: "required", validationValue: true, validationMessage: "This field is required" }
                            ]
                        },
                        new Field({
                            controlType: "button",
                            key: "button",
                            label: "Previous Section",
                            value: "previous"
                        }),
                        new Field({
                            controlType: "button",
                            key: "Submit",
                            label: "Submit",
                            value: "submit"
                        })
                    ]
                }
            ]
        }
    ]
};