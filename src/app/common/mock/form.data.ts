import { ConfigForm, Field, Validation, Card, Section } from '../models';
import { Option } from '../models/model.option';


const exampleCard: Card = new Card({
    cardTitle: "Card Title",
    cardStyling: "",
    columns: 1,
    rows: 1,
    cardRows: "2:1",
    cardColumns: 4,
    fields: [
        new Field({
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
        }),
        new Field({
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
                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
            ]
        }),
        new Field({
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
                new Option({ key: "A", value: "Approved" }),
                new Option({ key: "C", value: "Closed" }),
                new Option({ key: "I", value: "Incomplete" }),
                new Option({ key: "+", value: "Needs more" })
            ],
            validations: [
                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
            ]
        }),
        new Field({
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
                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" }),
                new Validation({ validationType: "email", validationValue: true, validationMessage: "This is not a valid email" })
            ]
        })
    ]
});



export const FORM_DATA: ConfigForm =
{
    title: "Hello World",
    formName: "TestForm",
    // formTheme: "candy-app-theme",
    formTheme: "",
    sections: [
        new Section({
            sectionTitle: "Wheelchair section",
            formGrouping: "Test1",
            sectionStyling: "",
            sectionGridColumns: 4,
            sectionGridRows: "4:3",
            validationMessage: "This Section is Required",
            formId: 0,
            cards: [
                exampleCard,
                new Card({
                    cardTitle: "Longo Cardo",
                    cardStyling: "",
                    columns: 2,
                    rows: 2,
                    cardRows: "2:1",
                    cardColumns: 4,
                    fields: [
                        new Field({
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
                        }),
                        new Field({
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
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                        new Field({
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
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                        new Field({
                            controlType: "textbox",
                            key: "tester",
                            label: "Space tester",
                            value: "Vabuuuu",
                            order: 4,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                        new Field({
                            controlType: "textbox",
                            key: "tester2",
                            label: "Space tester2",
                            value: "Yabuuuu",
                            order: 4,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                        new Field({
                            controlType: "textbox",
                            key: "tester3",
                            label: "Space tester3",
                            value: "Agoooooo",
                            order: 4,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                        new Field({
                            controlType: "textbox",
                            key: "tester4",
                            label: "Space tester4",
                            value: "tatooooo",
                            order: 4,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                        new Field({
                            controlType: "button",
                            key: "button",
                            label: "Next Section",
                            value: "next"
                        })
                    ]
                }),
                exampleCard,
                exampleCard
            ],
        }),
        new Section({
            sectionTitle: "Date Section",
            formGrouping: "Test2",
            sectionStyling: "",
            sectionGridColumns: 4,
            sectionGridRows: "4:3",
            validationMessage: "There is one field missing",
            formId: 1,
            cards: [
                new Card({
                    cardTitle: "Second Tab Card",
                    cardStyling: "",
                    columns: 2,
                    rows: 1,
                    cardRows: "2:1",
                    cardColumns: 4,
                    fields: [
                        new Field({
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
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
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
                })
            ]
        })
    ]
};