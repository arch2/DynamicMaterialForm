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



export const MPEV_CONFIG: ConfigForm =
{
    title: "Motive Power & Equipment Violation F6180.109",
    formName: "MPEVForm",
    formTheme: "dark-theme",
    sections: [
        new Section({
            sectionTitle: "1-19",
            formGrouping: "TBD",
            sectionStyling: "",
            sectionGridColumns: 6,
            sectionGridRows: "2:1",
            validationMessage: "1-19 has errors",
            formId: 1,
            cards: [
                new Card({
                    cardTitle: "Violation",
                    cardStyling: "",
                    columns: 3,
                    rows: 2,
                    cardRows: "2:1",
                    cardColumns: 4,
                    fields: [
                        new Field({
                            controlType: "textbox",
                            key: "subject",
                            label: "1. Subject:",
                            value: "Test Subject",
                            order: 0,
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
                            key: "violationOf",
                            label: "2. Violation Of:",
                            value: "40",
                            order: 1,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            options: [
                                new Option({ key: "40", value: "40 CFR" }),
                                new Option({ key: "49", value: "49 CFR" }),
                                new Option({ key: "S", value: "Statute" })
                            ],
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        })
                    ]
                }),
                new Card({
                    cardTitle: "Violation cont.",
                    cardStyling: "",
                    columns: 3,
                    rows: 2,
                    cardRows: "2:1",
                    cardColumns: 4,
                    fields: [
                        new Field({
                            controlType: "textbox",
                            key: "cfr",
                            label: "CFR:",
                            value: "215",
                            order: 2,
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
                            key: "cfrRule",
                            label: "Rule:",
                            value: "103",
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
                            key: "cfrSubRule",
                            label: "Subrule:",
                            value: "A1",
                            order: 4,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        })
                    ]
                }),
                new Card({
                    cardTitle: "Report",
                    cardStyling: "",
                    columns: 3,
                    rows: 2,
                    cardRows: "2:1",
                    cardColumns: 4,
                    fields: [
                        new Field({
                            controlType: "textbox",
                            key: "reportNo",
                            label: "3. Report Number:",
                            value: "0003",
                            order: 5,
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
                            key: "relatedViolationReportNo",
                            label: "4. Related Violation Report Number:",
                            value: "123456",
                            order: 6,
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
                            key: "inspectionReportNo",
                            label: "5. Inspection Report Number:",
                            value: "123456",
                            order: 7,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                        new Field({
                            controlType: "datetimepicker",
                            key: "inspectionReportDate",
                            label: "Inspection Report Date:",
                            value: "06/26/2016",
                            order: 8,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        })
                    ]
                }),
                new Card({
                    cardTitle: "6. Additional Regulations Violated",
                    cardStyling: "",
                    columns: 3,
                    rows: 2,
                    cardRows: "2:1",
                    cardColumns: 4,
                    fields: [
                        new Field({
                            controlType: "textbox",
                            key: "addViolation1",
                            label: "Regulation Violated 1:",
                            value: "123456",
                            order: 9,
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
                            key: "addViolation2",
                            label: "Regulation Violated 2:",
                            value: "123456",
                            order: 10,
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
                            key: "addViolation3",
                            label: "Regulation Violated 3:",
                            value: "123456",
                            order: 11,
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
                            key: "addViolation4",
                            label: "Regulation Violated 4:",
                            value: "123456",
                            order: 12,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),

                    ]
                }),
                new Card({
                    cardTitle: "Railroad",
                    cardStyling: "",
                    columns: 3,
                    rows: 2,
                    cardRows: "2:1",
                    cardColumns: 4,
                    fields: [
                        new Field({
                            controlType: "dropdown",
                            key: "operatingRR",
                            label: "7. Operating Railroad:",
                            value: "NF",
                            order: 1,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            options: [
                                new Option({ key: "NF", value: "NORFOLK SOUTHERN CORP." }),
                                new Option({ key: "49", value: "49 CFR" }),
                                new Option({ key: "S", value: "Statute" })
                            ],
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                        new Field({
                            controlType: "textbox",
                            key: "rrInitials",
                            label: "8. Railroad Initials",
                            value: "AF",
                            order: 2,
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
                            key: "rrDivision",
                            label: "9. Railroad Division:",
                            value: "East",
                            order: 2,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                    ]
                }),
                new Card({
                    cardTitle: "10. Name of Inspector(s)",
                    cardStyling: "",
                    columns: 3,
                    rows: 2,
                    cardRows: "2:1",
                    cardColumns: 4,
                    fields: [
                        new Field({
                            controlType: "textbox",
                            key: "inspector1",
                            label: "Inspector 1",
                            value: "I1",
                            order: 1,
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
                            key: "inspector2",
                            label: "Inspector 2",
                            value: "I2",
                            order: 2,
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
                            key: "inspector3",
                            label: "Inspector 3",
                            value: "I3",
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
                            key: "inspector1ID",
                            label: "11. ID Number",
                            value: "1234",
                            order: 4,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                    ]
                }),
                new Card({
                    cardTitle: "Date/Time",
                    cardStyling: "",
                    columns: 3,
                    rows: 1,
                    cardRows: "2:1",
                    cardColumns: 4,
                    fields: [
                        new Field({
                            controlType: "datetimepicker",
                            key: "violationDate",
                            label: "12. Date(s) of Violation",
                            value: "06/26/2015",
                            order: 1,
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
                            key: "violationTime",
                            label: "13. Time of Violation",
                            value: "03:00",
                            order: 2,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                    ]
                }),
                new Card({
                    cardTitle: "Inspection",
                    cardStyling: "",
                    columns: 3,
                    rows: 1,
                    cardRows: "2:1",
                    cardColumns: 4,
                    fields: [
                        new Field({
                            controlType: "textbox",
                            key: "inspectionPoint",
                            label: "14. Inspection Point:",
                            value: "Tree",
                            order: 1,
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
                            key: "trackName",
                            label: "15. Track Number/Name:",
                            value: "42",
                            order: 2,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                    ]
                }),
                new Card({
                    cardTitle: "16. Location of Inspection",
                    cardStyling: "",
                    columns: 2,
                    rows: 2,
                    cardRows: "2:1",
                    cardColumns: 4,
                    fields: [
                        new Field({
                            controlType: "dropdown",
                            key: "inspectionState",
                            label: "State:",
                            value: "VA",
                            order: 1,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            options: [
                                new Option({ key: "VA", value: "Virginia" }),
                                new Option({ key: "MD", value: "Maryland" })
                            ],
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                        new Field({
                            controlType: "dropdown",
                            key: "inspectionCounty",
                            label: "County:",
                            value: "FF",
                            order: 2,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            options: [
                                new Option({ key: "FF", value: "Fairfax" }),
                                new Option({ key: "AR", value: "Arlington" })
                            ],
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                        new Field({
                            controlType: "dropdown",
                            key: "inspectionCity",
                            label: "City:",
                            value: "VI",
                            order: 3,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            options: [
                                new Option({ key: "VI", value: "Vienna" }),
                                new Option({ key: "MC", value: "McLean" })
                            ],
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                    ]
                }),
                new Card({
                    cardTitle: "17. Location of Violation",
                    cardStyling: "",
                    columns: 2,
                    rows: 2,
                    cardRows: "2:1",
                    cardColumns: 4,
                    fields: [
                        new Field({
                            controlType: "dropdown",
                            key: "violationState",
                            label: "State:",
                            value: "VA",
                            order: 1,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            options: [
                                new Option({ key: "VA", value: "Virginia" }),
                                new Option({ key: "MD", value: "Maryland" })
                            ],
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                        new Field({
                            controlType: "dropdown",
                            key: "violationCounty",
                            label: "County:",
                            value: "FF",
                            order: 2,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            options: [
                                new Option({ key: "FF", value: "Fairfax" }),
                                new Option({ key: "AR", value: "Arlington" })
                            ],
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                        new Field({
                            controlType: "dropdown",
                            key: "violationCity",
                            label: "City:",
                            value: "VI",
                            order: 3,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            options: [
                                new Option({ key: "VI", value: "Vienna" }),
                                new Option({ key: "MC", value: "McLean" })
                            ],
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                    ]
                }),
                new Card({
                    cardTitle: "18. Location of Equipment Origin",
                    cardStyling: "",
                    columns: 2,
                    rows: 2,
                    cardRows: "2:1",
                    cardColumns: 4,
                    fields: [
                        new Field({
                            controlType: "dropdown",
                            key: "equipmentState",
                            label: "State:",
                            value: "VA",
                            order: 1,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            options: [
                                new Option({ key: "VA", value: "Virginia" }),
                                new Option({ key: "MD", value: "Maryland" })
                            ],
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                        new Field({
                            controlType: "dropdown",
                            key: "equipmentCounty",
                            label: "County:",
                            value: "FF",
                            order: 2,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            options: [
                                new Option({ key: "FF", value: "Fairfax" }),
                                new Option({ key: "AR", value: "Arlington" })
                            ],
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                        new Field({
                            controlType: "dropdown",
                            key: "equipmentCity",
                            label: "City:",
                            value: "VI",
                            order: 3,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            options: [
                                new Option({ key: "VI", value: "Vienna" }),
                                new Option({ key: "MC", value: "McLean" })
                            ],
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                    ]
                }),
                new Card({
                    cardTitle: "19. Location where locomotives are maintained",
                    cardStyling: "",
                    columns: 2,
                    rows: 2,
                    cardRows: "2:1",
                    cardColumns: 4,
                    fields: [
                        new Field({
                            controlType: "dropdown",
                            key: "locomotiveState",
                            label: "State:",
                            value: "VA",
                            order: 1,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            options: [
                                new Option({ key: "VA", value: "Virginia" }),
                                new Option({ key: "MD", value: "Maryland" })
                            ],
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                        new Field({
                            controlType: "dropdown",
                            key: "locomotiveCounty",
                            label: "County:",
                            value: "FF",
                            order: 2,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            options: [
                                new Option({ key: "FF", value: "Fairfax" }),
                                new Option({ key: "AR", value: "Arlington" })
                            ],
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                        new Field({
                            controlType: "dropdown",
                            key: "locomotiveCity",
                            label: "City:",
                            value: "VI",
                            order: 3,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            options: [
                                new Option({ key: "VI", value: "Vienna" }),
                                new Option({ key: "MC", value: "McLean" })
                            ],
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                        new Field({
                            controlType: "button",
                            key: "button",
                            label: "Next Section",
                            value: "next"
                        }),
                    ]
                }),
                new Card({
                    cardTitle: "19. Previous periodic inspection Information",
                    cardStyling: "",
                    columns: 2,
                    rows: 2,
                    cardRows: "2:1",
                    cardColumns: 4,
                    fields: [
                        new Field({
                            controlType: "datetimepicker",
                            key: "periodicDate",
                            label: "Periodic Inspection Date:",
                            value: "06/26/2016",
                            order: 1,
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
                            key: "periodicState",
                            label: "Periodic Inspection State:",
                            value: "VA",
                            order: 1,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            options: [
                                new Option({ key: "VA", value: "Virginia" }),
                                new Option({ key: "MD", value: "Maryland" })
                            ],
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                        new Field({
                            controlType: "dropdown",
                            key: "periodicCounty",
                            label: "Periodic Inspection County:",
                            value: "FF",
                            order: 2,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            options: [
                                new Option({ key: "FF", value: "Fairfax" }),
                                new Option({ key: "AR", value: "Arlington" })
                            ],
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                        new Field({
                            controlType: "dropdown",
                            key: "periodicCity",
                            label: "Periodic Inspection City:",
                            value: "VI",
                            order: 3,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            options: [
                                new Option({ key: "VI", value: "Vienna" }),
                                new Option({ key: "MC", value: "McLean" })
                            ],
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                    ]
                }),
                new Card({
                    cardTitle: "19. Previous daily inspection Information",
                    cardStyling: "",
                    columns: 2,
                    rows: 2,
                    cardRows: "2:1",
                    cardColumns: 4,
                    fields: [
                        new Field({
                            controlType: "datetimepicker",
                            key: "dailyDate",
                            label: "Daily Inspection Date:",
                            value: "06/26/2016",
                            order: 1,
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
                            key: "dailyState",
                            label: "Daily Inspection State:",
                            value: "VA",
                            order: 1,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            options: [
                                new Option({ key: "VA", value: "Virginia" }),
                                new Option({ key: "MD", value: "Maryland" })
                            ],
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                        new Field({
                            controlType: "dropdown",
                            key: "dailyCounty",
                            label: "Daily Inspection County:",
                            value: "FF",
                            order: 2,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            options: [
                                new Option({ key: "FF", value: "Fairfax" }),
                                new Option({ key: "AR", value: "Arlington" })
                            ],
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                        new Field({
                            controlType: "dropdown",
                            key: "dailyCity",
                            label: "Daily Inspection City:",
                            value: "VI",
                            order: 3,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            options: [
                                new Option({ key: "VI", value: "Vienna" }),
                                new Option({ key: "MC", value: "McLean" })
                            ],
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                    ]
                })
            ]
        }),
        new Section({
            sectionTitle: "20-38",
            formGrouping: "TBD",
            sectionStyling: "",
            sectionGridColumns: 6,
            sectionGridRows: "2:1",
            validationMessage: "20-38 has errors",
            formId: 2,
            cards: [
                new Card({
                    cardTitle: "Line Items",
                    cardStyling: "",
                    columns: 6,
                    rows: 8,
                    cardRows: "2:1",
                    cardColumns: 4,
                    fields: [
                        new Field({
                            controlType: "textbox",
                            key: "lineItem",
                            label: "20. Line Item:",
                            value: "13",
                            order: 1,
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
                            key: "equipmentInitials",
                            label: "21. Equipment Initials & Number:",
                            value: "NS 1234",
                            order: 2,
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
                            key: "equipmentDescription",
                            label: "22. Equipment Description:",
                            value: "C",
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
                            key: "trainId",
                            label: "23. Train Id:",
                            value: "123",
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
                            key: "typeOfService",
                            label: "24 Type of Service:",
                            value: "P",
                            order: 1,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            options: [
                                new Option({ key: "P", value: "Passenger" }),
                                new Option({ key: "F", value: "Freight" })
                            ],
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                        new Field({
                            controlType: "textbox",
                            key: "defectiveComponentName",
                            label: "25. Name of Defective Component:",
                            value: "Froot Loops",
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
                            key: "defectiveComponentLocation",
                            label: "26. Location of Defective Component:",
                            value: "At the start",
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
                            key: "equipmentStatus",
                            label: "27. Equipment Status:",
                            value: "Brookeded",
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
                            key: "equipmentPosition",
                            label: "28. Position of Equipment and/or Train w/Relation to some fixed object at time of Inspection and/or violation:",
                            value: "in space",
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
                            key: "defect",
                            label: "29. Defect is:",
                            value: "O",
                            order: 1,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            options: [
                                new Option({ key: "O", value: "Old" }),
                                new Option({ key: "N", value: "New" }),
                                new Option({ key: "A", value: "N/A" })
                            ],
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                        new Field({
                            controlType: "textbox",
                            key: "equipmentDuration",
                            label: "30. How long had equipment been at place of violation:",
                            value: "15 years",
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
                            key: "markedForRepairs",
                            label: "31. Equipment marked for Repairs:",
                            value: "Y",
                            order: 1,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            options: [
                                new Option({ key: "Y", value: "Yes" }),
                                new Option({ key: "N", value: "No" }),
                                new Option({ key: "A", value: "N/A" })
                            ],
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                        new Field({
                            controlType: "dropdown",
                            key: "airBreakTest",
                            label: "32. Failure to perform Air Brake Test:",
                            value: "Y",
                            order: 1,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            options: [
                                new Option({ key: "Y", value: "Yes" }),
                                new Option({ key: "N", value: "No" })
                            ],
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                        new Field({
                            controlType: "dropdown",
                            key: "airBreakTestRequired",
                            label: "33. Type of Air Brake Test Required:",
                            value: "Y",
                            order: 1,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            options: [
                                new Option({ key: "Y", value: "Aiery" }),
                                new Option({ key: "N", value: "Flaty" })
                            ],
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                        new Field({
                            controlType: "dropdown",
                            key: "airBreakTestPeriodic",
                            label: "34. Breaks overdue for Periodic attention:",
                            value: "Y",
                            order: 1,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            options: [
                                new Option({ key: "Y", value: "Yes" }),
                                new Option({ key: "N", value: "No" })
                            ],
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                        new Field({
                            controlType: "dropdown",
                            key: "airBreakTestCar",
                            label: "35. Breaks overdue for single car test:",
                            value: "Y",
                            order: 1,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            options: [
                                new Option({ key: "Y", value: "Yes" }),
                                new Option({ key: "N", value: "No" })
                            ],
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                        new Field({
                            controlType: "dropdown",
                            key: "SCTDevice",
                            label: "36. SCT Device available:",
                            value: "Y",
                            order: 1,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            options: [
                                new Option({ key: "Y", value: "Yes" }),
                                new Option({ key: "N", value: "No" })
                            ],
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                    ]
                }),
                new Card({
                    cardTitle: "37. Time",
                    cardStyling: "",
                    columns: 6,
                    rows: 2,
                    cardRows: "2:1",
                    cardColumns: 4,
                    fields: [
                        new Field({
                            controlType: "textbox",
                            key: "locosOn",
                            label: "Locos/Air on:",
                            value: "Yes",
                            order: 1,
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
                            key: "breaksApplied",
                            label: "Breaks Applied:",
                            value: "Maybe?",
                            order: 1,
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
                            key: "breaksReleased",
                            label: "Breaks Released:",
                            value: "Maybe?",
                            order: 1,
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
                            key: "trainDeparted",
                            label: "Train Departed:",
                            value: "Noon",
                            order: 1,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                    ]
                }),
                new Card({
                    cardTitle: "38. Train Consist - Locomotives - Cars - Operative Brakes",
                    cardStyling: "",
                    columns: 6,
                    rows: 4,
                    cardRows: "2:1",
                    cardColumns: 4,
                    fields: [
                        new Field({
                            controlType: "textbox",
                            key: "locoInitials",
                            label: "Controlling Locomotive Initials & No.:",
                            value: "123",
                            order: 1,
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
                            key: "locosInTrain",
                            label: "Number of Locomotovies in Train:",
                            value: "42",
                            order: 2,
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
                            key: "carsInTrain",
                            label: "Number of Cars in Train:",
                            value: "42",
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
                            key: "operativeBrakes",
                            label: "Number of Operative Brakes:",
                            value: "42",
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
                            key: "cutBrakes",
                            label: "Number of non-air /Inop/cut-out brakes:",
                            value: "42",
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
                            key: "brakesPercent",
                            label: "Percentage of Operative Brakes:",
                            value: "42",
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
                            key: "button",
                            label: "Next Section",
                            value: "next"
                        }),
                    ]
                })
            ]
        }),
        new Section({
            sectionTitle: "39-47",
            formGrouping: "TBD",
            sectionStyling: "",
            sectionGridColumns: 6,
            sectionGridRows: "2:1",
            validationMessage: "39-47 has errors",
            formId: 3,
            cards: [
                new Card({
                    cardTitle: "Etc",
                    cardStyling: "",
                    columns: 6,
                    rows: 3,
                    cardRows: "2:1",
                    cardColumns: 4,
                    fields: [
                        new Field({
                            controlType: "textbox",
                            key: "airBrakeStatement",
                            label: "39. State Facts which Determine Type of Air Brake Test Required:",
                            value: "Fishsticks",
                            order: 1,
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
                            key: "violationDescription",
                            label: "40. Description of Use, Movement or Events Constituting Violation:",
                            value: "Big boom",
                            order: 2,
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
                            key: "repairFacilitiesDescription",
                            label: "41. Describe Repair Facilities:",
                            value: "Gross",
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
                            key: "complianceDescription",
                            label: "42. Description of Non-Compliance:",
                            value: "Sticky icky",
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
                            key: "complianceDescription",
                            label: "43. Railroad Response or Remedial Action Taken in Response to Violation:",
                            value: "Did nothing ",
                            order: 5,
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
                            key: "violationNarrative",
                            label: "44. Violation Narrative:",
                            value: "It went boom",
                            order: 6,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                        new Field({
                            controlType: "datetimepicker",
                            key: "dateOfReport",
                            label: "45. Date of Report:",
                            value: "04/12/2019",
                            order: 3,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                    ]
                }),
                new Card({
                    cardTitle: "47. Railroad Notification",
                    cardStyling: "",
                    columns: 6,
                    rows: 3,
                    cardRows: "2:1",
                    cardColumns: 4,
                    fields: [
                        new Field({
                            controlType: "textbox",
                            key: "notificationTime",
                            label: "Time:",
                            value: "07:00",
                            order: 1,
                            visible: true,
                            disabled: false,
                            rows: 1,
                            columns: 1,
                            validations: [
                                new Validation({ validationType: "required", validationValue: true, validationMessage: "This field is required" })
                            ]
                        }),
                        new Field({
                            controlType: "datetimepicker",
                            key: "notificationDate",
                            label: "Date:",
                            value: "04/12/2019",
                            order: 2,
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
                            key: "notificationName",
                            label: "Name:",
                            value: "Georgee",
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
                            key: "notificationTitle",
                            label: "Title:",
                            value: "General",
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
export const VIOLATION_DATA: ConfigForm =
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
                    columns: 4,
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
                })

            ],
        })
    ]
};