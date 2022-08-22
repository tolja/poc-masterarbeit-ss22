import {Form, Formik} from "formik";
import React, {useRef, useState} from "react";
import ReactSpeedometer from "react-d3-speedometer";

const StepFinal = (props) => {

    const formRef = useRef();

    const handleSubmit = (values) => {

        props.next(values);
    }

    const handleBack = () => {

        props.prev(formRef.current.values);
    }


    // eslint-disable-next-line no-unused-vars
    const [standardData, _] = useState({
        performance: {
            condition_1: {
                percent: 30,
                ssr: 7,
                csr: 3,
                both: 10
            },
            condition_2: {
                percent: 30,
                ssr: 3,
                csr: 7,
                both: 8
            },
            condition_3: {
                percent: 12,
                ssr: 4,
                csr: 8,
                both: 0
            },
            condition_4: {
                percent: 12,
                ssr: 8,
                csr: 3,
                both: 7
            },
            condition_5: {
                percent: 10,
                ssr: 10,
                csr: 6,
                both: 0
            },
            condition_6: {
                percent: 6,
                ssr: 5,
                csr: 8,
                both: 0
            }
        },
        ux: {
            condition_1: {
                percent: 30,
                ssr: 2,
                csr: 8,
                both: 0
            },
            condition_2: {
                percent: 20,
                ssr: 2,
                csr: 10,
                both: 0
            },
            condition_3: {
                percent: 20,
                ssr: 5,
                csr: 7,
                both: 0
            },
            condition_4: {
                percent: 15,
                ssr: 3,
                csr: 10,
                both: 0
            },
            condition_5: {
                percent: 15,
                ssr: 1,
                csr: 8,
                both: 0
            }
        },
        seo: {
            condition_1: {
                percent: 50,
                ssr: 10,
                csr: 6,
                both: 7
            },
            condition_2: {
                percent: 30,
                ssr: 10,
                csr: 6,
                both: 5
            },
            condition_3: {
                percent: 20,
                ssr: 10,
                csr: 4,
                both: 5
            }
        },
        development: {
            condition_1: {
                percent: 60,
                ssr: 10,
                csr: 4,
                both: 1
            },
            condition_2: {
                percent: 40,
                ssr: 10,
                csr: 4,
                both: 1
            }
        },
        maintain: {
            condition_1: {
                percent: 80,
                ssr: 8,
                csr: 4,
                both: 1
            },
            condition_2: {
                percent: 20,
                ssr: 10,
                csr: 6,
                both: 1
            }
        },
        flexibility: {
            condition_1: {
                percent: 40,
                ssr: 10,
                csr: 7,
                both: 0
            },
            condition_2: {
                percent: 30,
                ssr: 3,
                csr: 8,
                both: 0
            },
            condition_3: {
                percent: 20,
                ssr: 1,
                csr: 10,
                both: 0
            },
            condition_4: {
                percent: 10,
                ssr: 1,
                csr: 10,
                both: 0
            }
        },
        availability: {
            condition_1: {
                percent: 30,
                ssr: 3,
                csr: 8,
                both: 8
            },
            condition_2: {
                percent: 30,
                ssr: 10,
                csr: 0,
                both: 5
            },
            condition_3: {
                percent: 25,
                ssr: 10,
                csr: 7,
                both: 7
            },
            condition_4: {
                percent: 15,
                ssr: 2,
                csr: 6,
                both: 6
            }
        },
        reliability: {
            condition_1: {
                percent: 60,
                ssr: 6,
                csr: 4,
                both: 5
            },
            condition_2: {
                percent: 40,
                ssr: 8,
                csr: 4,
                both: 3
            }
        },
        security: {
            condition_1: {
                percent: 34,
                ssr: 7,
                csr: 4,
                both: 3
            },
            condition_2: {
                percent: 33,
                ssr: 10,
                csr: 6,
                both: 5
            },
            condition_3: {
                percent: 33,
                ssr: 10,
                csr: 6,
                both: 5
            }
        },
        extend: {
            condition_1: {
                percent: 50,
                ssr: 10,
                csr: 7,
                both: 5
            },
            condition_2: {
                percent: 50,
                ssr: 9,
                csr: 5,
                both: 0
            }
        },
        resource: {
            condition_1: {
                percent: 50,
                ssr: 3,
                csr: 6,
                both: 7
            },
            condition_2: {
                percent: 50,
                ssr: 10,
                csr: 8,
                both: 5
            }
        },
        customer_req: {
            condition_1: {
                percent: 50,
                ssr: 8,
                csr: 4,
                both: 10
            },
            condition_2: {
                percent: 50,
                ssr: 8,
                csr: 4,
                both: 5
            }
        },
        responsibility: {
            condition_1: {
                percent: 40,
                ssr: 1,
                csr: 6,
                both: 0
            },
            condition_2: {
                percent: 20,
                ssr: 10,
                csr: 8,
                both: 0
            },
            condition_3: {
                percent: 20,
                ssr: 10,
                csr: 1,
                both: 0
            },
            condition_4: {
                percent: 20,
                ssr: 10,
                csr: 3,
                both: 0
            }
        }
    });

    const includesAll = (arr, values) => values.every(v => arr.includes(v));

    // Rules
    //  -	0: Bedingung findet keine Anwendung
    //  -	1: Bedingung ist unwichtig, muss nicht erfüllt werden
    //  -	2-5: Bedingung ist eher unwichtig
    //  -	6-9: Bedingung ist eher wichtig
    //  -	10: Bedingung ist sehr wichtig, muss erfüllt werden


    const convertedPerformanceValues = []
    const convertedUXValues = []
    const convertedSEOValues = []
    const convertedDevValues = []
    const convertedMaintainValues = []
    const convertedFlexValues = []
    const convertedAvailValues = []
    const convertedReliableValues = []
    const convertedSecurityValues = []
    const convertedExtendValues = []
    const convertedResourceValues = []
    const convertedCustomerReqValues = []
    const convertedResponsibilityReqValues = []

    const performanceValues = [
        {condition_1: props.data.performance_condition_1},
        {condition_2: props.data.performance_condition_2},
        {condition_3: props.data.performance_condition_3},
        {condition_4: props.data.performance_condition_4},
        {condition_5: props.data.performance_condition_5},
        {condition_6: props.data.performance_condition_6}
    ]

    const uxValues = [
        {condition_1: props.data.ux_condition_1},
        {condition_2: props.data.ux_condition_2},
        {condition_3: props.data.ux_condition_3},
        {condition_4: props.data.ux_condition_4},
        {condition_5: props.data.ux_condition_5}
    ]

    const seoValues = [
        {condition_1: props.data.seo_condition_1},
        {condition_2: props.data.seo_condition_2},
        {condition_3: props.data.seo_condition_3}
    ]

    const devValues = [
        {condition_1: props.data.development_condition_1},
        {condition_2: props.data.development_condition_2}
    ]

    const maintainValues = [
        {condition_1: props.data.maintain_condition_1},
        {condition_2: props.data.maintain_condition_2}
    ]

    const flexValues = [
        {condition_1: props.data.flexibility_condition_1},
        {condition_2: props.data.flexibility_condition_2},
        {condition_3: props.data.flexibility_condition_3},
        {condition_4: props.data.flexibility_condition_4}
    ]

    const availValues = [
        {condition_1: props.data.availability_condition_1},
        {condition_2: props.data.availability_condition_2},
        {condition_3: props.data.availability_condition_3},
        {condition_4: props.data.availability_condition_4}
    ]

    const reliableValues = [
        {condition_1: props.data.reliable_condition_1},
        {condition_2: props.data.reliable_condition_2}
    ]

    const securityValues = [
        {condition_1: props.data.security_condition_1},
        {condition_2: props.data.security_condition_2},
        {condition_3: props.data.security_condition_3}
    ]

    const extendValues = [
        {condition_1: props.data.extend_condition_1},
        {condition_2: props.data.extend_condition_2}
    ]

    const resourceValues = [
        {condition_1: props.data.resource_condition_1},
        {condition_2: props.data.resource_condition_2}
    ]

    const customerReqValues = [
        {condition_1: props.data.customer_requirements_condition_1},
        {condition_2: props.data.customer_requirements_condition_2}
    ]

    const responsibilityValues = [
        {condition_1: props.data.responsibility_condition_1},
        {condition_2: props.data.responsibility_condition_2},
        {condition_3: props.data.responsibility_condition_3},
        {condition_4: props.data.responsibility_condition_4}
    ]


    // Konvertierung der gewählten Antworten 1-5 in die o.g. Regeln
    performanceValues.forEach((chosenValue) => {

        Object.values(chosenValue).forEach((objectValue, idx) => {
            switch (objectValue) {
                case 1:
                    convertedPerformanceValues.push({[Object.keys(chosenValue)[0]]: [0]});
                    break;
                case 2:
                    convertedPerformanceValues.push({[Object.keys(chosenValue)[0]]: [1]});
                    break;
                case 3:
                    convertedPerformanceValues.push({[Object.keys(chosenValue)[0]]: [2, 3, 4, 5]});
                    break;
                case 4:
                    convertedPerformanceValues.push({[Object.keys(chosenValue)[0]]: [6, 7, 8, 9]});
                    break;
                case 5:
                    convertedPerformanceValues.push({[Object.keys(chosenValue)[0]]: [10]});
                    break;
                default:
                    return;
            }
        })

    });

    uxValues.forEach((chosenValue) => {

        Object.values(chosenValue).forEach((objectValue, idx) => {
            switch (objectValue) {
                case 1:
                    convertedUXValues.push({[Object.keys(chosenValue)[0]]: [0]});
                    break;
                case 2:
                    convertedUXValues.push({[Object.keys(chosenValue)[0]]: [1]});
                    break;
                case 3:
                    convertedUXValues.push({[Object.keys(chosenValue)[0]]: [2, 3, 4, 5]});
                    break;
                case 4:
                    convertedUXValues.push({[Object.keys(chosenValue)[0]]: [6, 7, 8, 9]});
                    break;
                case 5:
                    convertedUXValues.push({[Object.keys(chosenValue)[0]]: [10]});
                    break;
                default:
                    return;
            }
        })

    });

    seoValues.forEach((chosenValue) => {

        Object.values(chosenValue).forEach((objectValue, idx) => {
            switch (objectValue) {
                case 1:
                    convertedSEOValues.push({[Object.keys(chosenValue)[0]]: [0]});
                    break;
                case 2:
                    convertedSEOValues.push({[Object.keys(chosenValue)[0]]: [1]});
                    break;
                case 3:
                    convertedSEOValues.push({[Object.keys(chosenValue)[0]]: [2, 3, 4, 5]});
                    break;
                case 4:
                    convertedSEOValues.push({[Object.keys(chosenValue)[0]]: [6, 7, 8, 9]});
                    break;
                case 5:
                    convertedSEOValues.push({[Object.keys(chosenValue)[0]]: [10]});
                    break;
                default:
                    return;
            }
        })

    });

    devValues.forEach((chosenValue) => {

        Object.values(chosenValue).forEach((objectValue, idx) => {
            switch (objectValue) {
                case 1:
                    convertedDevValues.push({[Object.keys(chosenValue)[0]]: [0]});
                    break;
                case 2:
                    convertedDevValues.push({[Object.keys(chosenValue)[0]]: [1]});
                    break;
                case 3:
                    convertedDevValues.push({[Object.keys(chosenValue)[0]]: [2, 3, 4, 5]});
                    break;
                case 4:
                    convertedDevValues.push({[Object.keys(chosenValue)[0]]: [6, 7, 8, 9]});
                    break;
                case 5:
                    convertedDevValues.push({[Object.keys(chosenValue)[0]]: [10]});
                    break;
                default:
                    return;
            }
        })

    });

    maintainValues.forEach((chosenValue) => {

        Object.values(chosenValue).forEach((objectValue, idx) => {
            switch (objectValue) {
                case 1:
                    convertedMaintainValues.push({[Object.keys(chosenValue)[0]]: [0]});
                    break;
                case 2:
                    convertedMaintainValues.push({[Object.keys(chosenValue)[0]]: [1]});
                    break;
                case 3:
                    convertedMaintainValues.push({[Object.keys(chosenValue)[0]]: [2, 3, 4, 5]});
                    break;
                case 4:
                    convertedMaintainValues.push({[Object.keys(chosenValue)[0]]: [6, 7, 8, 9]});
                    break;
                case 5:
                    convertedMaintainValues.push({[Object.keys(chosenValue)[0]]: [10]});
                    break;
                default:
                    return;
            }
        })

    });

    flexValues.forEach((chosenValue) => {

        Object.values(chosenValue).forEach((objectValue, idx) => {
            switch (objectValue) {
                case 1:
                    convertedFlexValues.push({[Object.keys(chosenValue)[0]]: [0]});
                    break;
                case 2:
                    convertedFlexValues.push({[Object.keys(chosenValue)[0]]: [1]});
                    break;
                case 3:
                    convertedFlexValues.push({[Object.keys(chosenValue)[0]]: [2, 3, 4, 5]});
                    break;
                case 4:
                    convertedFlexValues.push({[Object.keys(chosenValue)[0]]: [6, 7, 8, 9]});
                    break;
                case 5:
                    convertedFlexValues.push({[Object.keys(chosenValue)[0]]: [10]});
                    break;
                default:
                    return;
            }
        })

    });

    availValues.forEach((chosenValue) => {

        Object.values(chosenValue).forEach((objectValue, idx) => {
            switch (objectValue) {
                case 1:
                    convertedAvailValues.push({[Object.keys(chosenValue)[0]]: [0]});
                    break;
                case 2:
                    convertedAvailValues.push({[Object.keys(chosenValue)[0]]: [1]});
                    break;
                case 3:
                    convertedAvailValues.push({[Object.keys(chosenValue)[0]]: [2, 3, 4, 5]});
                    break;
                case 4:
                    convertedAvailValues.push({[Object.keys(chosenValue)[0]]: [6, 7, 8, 9]});
                    break;
                case 5:
                    convertedAvailValues.push({[Object.keys(chosenValue)[0]]: [10]});
                    break;
                default:
                    return;
            }
        })

    });

    reliableValues.forEach((chosenValue) => {

        Object.values(chosenValue).forEach((objectValue, idx) => {
            switch (objectValue) {
                case 1:
                    convertedReliableValues.push({[Object.keys(chosenValue)[0]]: [0]});
                    break;
                case 2:
                    convertedReliableValues.push({[Object.keys(chosenValue)[0]]: [1]});
                    break;
                case 3:
                    convertedReliableValues.push({[Object.keys(chosenValue)[0]]: [2, 3, 4, 5]});
                    break;
                case 4:
                    convertedReliableValues.push({[Object.keys(chosenValue)[0]]: [6, 7, 8, 9]});
                    break;
                case 5:
                    convertedReliableValues.push({[Object.keys(chosenValue)[0]]: [10]});
                    break;
                default:
                    return;
            }
        })

    });

    securityValues.forEach((chosenValue) => {

        Object.values(chosenValue).forEach((objectValue, idx) => {
            switch (objectValue) {
                case 1:
                    convertedSecurityValues.push({[Object.keys(chosenValue)[0]]: [0]});
                    break;
                case 2:
                    convertedSecurityValues.push({[Object.keys(chosenValue)[0]]: [1]});
                    break;
                case 3:
                    convertedSecurityValues.push({[Object.keys(chosenValue)[0]]: [2, 3, 4, 5]});
                    break;
                case 4:
                    convertedSecurityValues.push({[Object.keys(chosenValue)[0]]: [6, 7, 8, 9]});
                    break;
                case 5:
                    convertedSecurityValues.push({[Object.keys(chosenValue)[0]]: [10]});
                    break;
                default:
                    return;
            }
        })

    });

    extendValues.forEach((chosenValue) => {

        Object.values(chosenValue).forEach((objectValue, idx) => {
            switch (objectValue) {
                case 1:
                    convertedExtendValues.push({[Object.keys(chosenValue)[0]]: [0]});
                    break;
                case 2:
                    convertedExtendValues.push({[Object.keys(chosenValue)[0]]: [1]});
                    break;
                case 3:
                    convertedExtendValues.push({[Object.keys(chosenValue)[0]]: [2, 3, 4, 5]});
                    break;
                case 4:
                    convertedExtendValues.push({[Object.keys(chosenValue)[0]]: [6, 7, 8, 9]});
                    break;
                case 5:
                    convertedExtendValues.push({[Object.keys(chosenValue)[0]]: [10]});
                    break;
                default:
                    return;
            }
        })

    });

    resourceValues.forEach((chosenValue) => {

        Object.values(chosenValue).forEach((objectValue, idx) => {
            switch (objectValue) {
                case 1:
                    convertedResourceValues.push({[Object.keys(chosenValue)[0]]: [0]});
                    break;
                case 2:
                    convertedResourceValues.push({[Object.keys(chosenValue)[0]]: [1]});
                    break;
                case 3:
                    convertedResourceValues.push({[Object.keys(chosenValue)[0]]: [2, 3, 4, 5]});
                    break;
                case 4:
                    convertedResourceValues.push({[Object.keys(chosenValue)[0]]: [6, 7, 8, 9]});
                    break;
                case 5:
                    convertedResourceValues.push({[Object.keys(chosenValue)[0]]: [10]});
                    break;
                default:
                    return;
            }
        })

    });

    customerReqValues.forEach((chosenValue) => {

        Object.values(chosenValue).forEach((objectValue, idx) => {
            switch (objectValue) {
                case 1:
                    convertedCustomerReqValues.push({[Object.keys(chosenValue)[0]]: [0]});
                    break;
                case 2:
                    convertedCustomerReqValues.push({[Object.keys(chosenValue)[0]]: [1]});
                    break;
                case 3:
                    convertedCustomerReqValues.push({[Object.keys(chosenValue)[0]]: [2, 3, 4, 5]});
                    break;
                case 4:
                    convertedCustomerReqValues.push({[Object.keys(chosenValue)[0]]: [6, 7, 8, 9]});
                    break;
                case 5:
                    convertedCustomerReqValues.push({[Object.keys(chosenValue)[0]]: [10]});
                    break;
                default:
                    return;
            }
        })

    });

    responsibilityValues.forEach((chosenValue) => {

        Object.values(chosenValue).forEach((objectValue, idx) => {
            switch (objectValue) {
                case 1:
                    convertedResponsibilityReqValues.push({[Object.keys(chosenValue)[0]]: [0]});
                    break;
                case 2:
                    convertedResponsibilityReqValues.push({[Object.keys(chosenValue)[0]]: [1]});
                    break;
                case 3:
                    convertedResponsibilityReqValues.push({[Object.keys(chosenValue)[0]]: [2, 3, 4, 5]});
                    break;
                case 4:
                    convertedResponsibilityReqValues.push({[Object.keys(chosenValue)[0]]: [6, 7, 8, 9]});
                    break;
                case 5:
                    convertedResponsibilityReqValues.push({[Object.keys(chosenValue)[0]]: [10]});
                    break;
                default:
                    return;
            }
        })

    });

    // Variablen für Endergebnisse
    let ssrValue = 0;
    let csrValue = 0;
    let bothValue = 0;

    // Zuordnung gegebene Antwort zu Kriterium & Berechnung des jeweiligen Wertes
    convertedPerformanceValues.forEach(convertedperformanceValue => {

        let ssrFound = false;
        let csrFound = false;
        let bothFound = false;
        if (convertedperformanceValue.condition_1) {
            if (convertedperformanceValue.condition_1.includes(standardData.performance.condition_1.ssr)) {
                ssrValue += standardData.performance.condition_1.ssr * standardData.performance.condition_1.percent
                ssrFound = true
            }
            if (convertedperformanceValue.condition_1.includes(standardData.performance.condition_1.csr)) {
                csrValue += standardData.performance.condition_1.csr * standardData.performance.condition_1.percent
                csrFound = true
            }
            if (convertedperformanceValue.condition_1.includes(standardData.performance.condition_1.both)) {
                bothValue += standardData.performance.condition_1.both * standardData.performance.condition_1.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.performance.condition_1.ssr) !== -1 && (convertedperformanceValue.condition_1.includes(10))) {
                ssrValue += standardData.performance.condition_1.ssr * standardData.performance.condition_1.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.performance.condition_1.ssr) !== -1 && (convertedperformanceValue.condition_1.includes(1))) {
                ssrValue += standardData.performance.condition_1.ssr * standardData.performance.condition_1.percent
                ssrFound = true
            }

            if (!csrFound && !bothFound && includesAll(convertedperformanceValue.condition_1, [6, 7, 8, 9]) && standardData.performance.condition_1.ssr === 10) {
                ssrValue += standardData.performance.condition_1.ssr * standardData.performance.condition_1.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedperformanceValue.condition_1, [2, 3, 4, 5]) && standardData.performance.condition_1.ssr === 1) {
                ssrValue += standardData.performance.condition_1.ssr * standardData.performance.condition_1.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.performance.condition_1.csr) !== -1 && (convertedperformanceValue.condition_1.includes(10))) {
                csrValue += standardData.performance.condition_1.csr * standardData.performance.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.performance.condition_1.csr) !== -1 && (convertedperformanceValue.condition_1.includes(1))) {
                csrValue += standardData.performance.condition_1.csr * standardData.performance.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedperformanceValue.condition_1, [6, 7, 8, 9]) && standardData.performance.condition_1.csr === 10) {
                csrValue += standardData.performance.condition_1.csr * standardData.performance.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedperformanceValue.condition_1, [2, 3, 4, 5]) && standardData.performance.condition_1.csr === 1) {
                csrValue += standardData.performance.condition_1.csr * standardData.performance.condition_1.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.performance.condition_1.both) !== -1 && (convertedperformanceValue.condition_1.includes(10))) {
                bothValue += standardData.performance.condition_1.both * standardData.performance.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.performance.condition_1.both) !== -1 && (convertedperformanceValue.condition_1.includes(1))) {
                bothValue += standardData.performance.condition_1.both * standardData.performance.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedperformanceValue.condition_1, [6, 7, 8, 9]) && standardData.performance.condition_1.both === 10) {
                bothValue += standardData.performance.condition_1.both * standardData.performance.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedperformanceValue.condition_1, [2, 3, 4, 5]) && standardData.performance.condition_1.both === 1) {
                bothValue += standardData.performance.condition_1.both * standardData.performance.condition_1.percent
                bothFound = true
            }
        } else if (convertedperformanceValue.condition_2) {
            if (convertedperformanceValue.condition_2.includes(standardData.performance.condition_2.ssr)) {
                ssrValue += standardData.performance.condition_2.ssr * standardData.performance.condition_2.percent
                ssrFound = true
            }
            if (convertedperformanceValue.condition_2.includes(standardData.performance.condition_2.csr)) {
                csrValue += standardData.performance.condition_2.csr * standardData.performance.condition_2.percent
                csrFound = true
            }
            if (convertedperformanceValue.condition_2.includes(standardData.performance.condition_2.both)) {
                bothValue += standardData.performance.condition_2.both * standardData.performance.condition_2.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.performance.condition_2.ssr) !== -1 && (convertedperformanceValue.condition_2.includes(10))) {
                ssrValue += standardData.performance.condition_2.ssr * standardData.performance.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.performance.condition_2.ssr) !== -1 && (convertedperformanceValue.condition_2.includes(1))) {
                ssrValue += standardData.performance.condition_2.ssr * standardData.performance.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedperformanceValue.condition_2, [6, 7, 8, 9]) && standardData.performance.condition_2.ssr === 10) {
                ssrValue += standardData.performance.condition_2.ssr * standardData.performance.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedperformanceValue.condition_2, [2, 3, 4, 5]) && standardData.performance.condition_2.ssr === 1) {
                ssrValue += standardData.performance.condition_2.ssr * standardData.performance.condition_2.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.performance.condition_2.csr) !== -1 && (convertedperformanceValue.condition_2.includes(10))) {
                csrValue += standardData.performance.condition_2.csr * standardData.performance.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.performance.condition_2.csr) !== -1 && (convertedperformanceValue.condition_2.includes(1))) {
                csrValue += standardData.performance.condition_2.csr * standardData.performance.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedperformanceValue.condition_2, [6, 7, 8, 9]) && standardData.performance.condition_2.csr === 10) {
                csrValue += standardData.performance.condition_2.csr * standardData.performance.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedperformanceValue.condition_2, [2, 3, 4, 5]) && standardData.performance.condition_2.csr === 1) {
                csrValue += standardData.performance.condition_2.csr * standardData.performance.condition_2.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.performance.condition_2.both) !== -1 && (convertedperformanceValue.condition_2.includes(10))) {
                bothValue += standardData.performance.condition_2.both * standardData.performance.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.performance.condition_2.both) !== -1 && (convertedperformanceValue.condition_2.includes(1))) {
                bothValue += standardData.performance.condition_2.both * standardData.performance.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedperformanceValue.condition_2, [6, 7, 8, 9]) && standardData.performance.condition_2.both === 10) {
                bothValue += standardData.performance.condition_2.both * standardData.performance.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedperformanceValue.condition_2, [2, 3, 4, 5]) && standardData.performance.condition_2.both === 1) {
                bothValue += standardData.performance.condition_2.both * standardData.performance.condition_2.percent
                bothFound = true
            }

        } else if (convertedperformanceValue.condition_3) {
            if (convertedperformanceValue.condition_3.includes(standardData.performance.condition_3.ssr)) {
                ssrValue += standardData.performance.condition_3.ssr * standardData.performance.condition_3.percent
                ssrFound = true
            }
            if (convertedperformanceValue.condition_3.includes(standardData.performance.condition_3.csr)) {
                csrValue += standardData.performance.condition_3.csr * standardData.performance.condition_3.percent
                csrFound = true
            }
            if (convertedperformanceValue.condition_3.includes(standardData.performance.condition_3.both)) {
                bothValue += standardData.performance.condition_3.both * standardData.performance.condition_3.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.performance.condition_3.ssr) !== -1 && (convertedperformanceValue.condition_3.includes(10))) {
                ssrValue += standardData.performance.condition_3.ssr * standardData.performance.condition_3.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.performance.condition_3.ssr) !== -1 && (convertedperformanceValue.condition_3.includes(1))) {
                ssrValue += standardData.performance.condition_3.ssr * standardData.performance.condition_3.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedperformanceValue.condition_3, [6, 7, 8, 9]) && standardData.performance.condition_3.ssr === 10) {
                ssrValue += standardData.performance.condition_3.ssr * standardData.performance.condition_3.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedperformanceValue.condition_3, [2, 3, 4, 5]) && standardData.performance.condition_3.ssr === 1) {
                ssrValue += standardData.performance.condition_3.ssr * standardData.performance.condition_3.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.performance.condition_3.csr) !== -1 && (convertedperformanceValue.condition_3.includes(10))) {
                csrValue += standardData.performance.condition_3.csr * standardData.performance.condition_3.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.performance.condition_3.csr) !== -1 && (convertedperformanceValue.condition_3.includes(1))) {
                csrValue += standardData.performance.condition_3.csr * standardData.performance.condition_3.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedperformanceValue.condition_3, [6, 7, 8, 9]) && standardData.performance.condition_3.csr === 10) {
                csrValue += standardData.performance.condition_3.csr * standardData.performance.condition_3.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedperformanceValue.condition_3, [2, 3, 4, 5]) && standardData.performance.condition_3.csr === 1) {
                csrValue += standardData.performance.condition_3.csr * standardData.performance.condition_3.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.performance.condition_3.both) !== -1 && (convertedperformanceValue.condition_3.includes(10))) {
                bothValue += standardData.performance.condition_3.both * standardData.performance.condition_3.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.performance.condition_3.both) !== -1 && (convertedperformanceValue.condition_3.includes(1))) {
                bothValue += standardData.performance.condition_3.both * standardData.performance.condition_3.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedperformanceValue.condition_3, [6, 7, 8, 9]) && standardData.performance.condition_3.both === 10) {
                bothValue += standardData.performance.condition_3.both * standardData.performance.condition_3.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedperformanceValue.condition_3, [2, 3, 4, 5]) && standardData.performance.condition_3.both === 1) {
                bothValue += standardData.performance.condition_3.both * standardData.performance.condition_3.percent
                bothFound = true
            }

        } else if (convertedperformanceValue.condition_4) {
            if (convertedperformanceValue.condition_4.includes(standardData.performance.condition_4.ssr)) {
                ssrValue += standardData.performance.condition_4.ssr * standardData.performance.condition_4.percent
                ssrFound = true
            }
            if (convertedperformanceValue.condition_4.includes(standardData.performance.condition_4.csr)) {
                csrValue += standardData.performance.condition_4.csr * standardData.performance.condition_4.percent
                csrFound = true
            }
            if (convertedperformanceValue.condition_4.includes(standardData.performance.condition_4.both)) {
                bothValue += standardData.performance.condition_4.both * standardData.performance.condition_4.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.performance.condition_4.ssr) !== -1 && (convertedperformanceValue.condition_4.includes(10))) {
                ssrValue += standardData.performance.condition_4.ssr * standardData.performance.condition_4.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.performance.condition_4.ssr) !== -1 && (convertedperformanceValue.condition_4.includes(1))) {
                ssrValue += standardData.performance.condition_4.ssr * standardData.performance.condition_4.percent
                ssrFound = true
            }

            if (!csrFound && !bothFound && includesAll(convertedperformanceValue.condition_4, [6, 7, 8, 9]) && standardData.performance.condition_4.ssr === 10) {
                ssrValue += standardData.performance.condition_4.ssr * standardData.performance.condition_4.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedperformanceValue.condition_4, [2, 3, 4, 5]) && standardData.performance.condition_4.ssr === 1) {
                ssrValue += standardData.performance.condition_4.ssr * standardData.performance.condition_4.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.performance.condition_4.csr) !== -1 && (convertedperformanceValue.condition_4.includes(10))) {
                csrValue += standardData.performance.condition_4.csr * standardData.performance.condition_4.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.performance.condition_4.csr) !== -1 && (convertedperformanceValue.condition_4.includes(1))) {
                csrValue += standardData.performance.condition_4.csr * standardData.performance.condition_4.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedperformanceValue.condition_4, [6, 7, 8, 9]) && standardData.performance.condition_4.csr === 10) {
                csrValue += standardData.performance.condition_4.csr * standardData.performance.condition_4.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedperformanceValue.condition_4, [2, 3, 4, 5]) && standardData.performance.condition_4.csr === 1) {
                csrValue += standardData.performance.condition_4.csr * standardData.performance.condition_4.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.performance.condition_4.both) !== -1 && (convertedperformanceValue.condition_4.includes(10))) {
                bothValue += standardData.performance.condition_4.both * standardData.performance.condition_4.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.performance.condition_4.both) !== -1 && (convertedperformanceValue.condition_4.includes(1))) {
                bothValue += standardData.performance.condition_4.both * standardData.performance.condition_4.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedperformanceValue.condition_4, [6, 7, 8, 9]) && standardData.performance.condition_4.both === 10) {
                bothValue += standardData.performance.condition_4.both * standardData.performance.condition_4.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedperformanceValue.condition_4, [2, 3, 4, 5]) && standardData.performance.condition_4.both === 1) {
                bothValue += standardData.performance.condition_4.both * standardData.performance.condition_4.percent
                bothFound = true
            }

        } else if (convertedperformanceValue.condition_5) {
            if (convertedperformanceValue.condition_5.includes(standardData.performance.condition_5.ssr)) {
                ssrValue += standardData.performance.condition_5.ssr * standardData.performance.condition_5.percent
                ssrFound = true
            }
            if (convertedperformanceValue.condition_5.includes(standardData.performance.condition_5.csr)) {
                csrValue += standardData.performance.condition_5.csr * standardData.performance.condition_5.percent
                csrFound = true
            }
            if (convertedperformanceValue.condition_5.includes(standardData.performance.condition_5.both)) {
                bothValue += standardData.performance.condition_5.both * standardData.performance.condition_5.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.performance.condition_5.ssr) !== -1 && (convertedperformanceValue.condition_5.includes(10))) {
                ssrValue += standardData.performance.condition_5.ssr * standardData.performance.condition_5.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.performance.condition_5.ssr) !== -1 && (convertedperformanceValue.condition_5.includes(1))) {
                ssrValue += standardData.performance.condition_5.ssr * standardData.performance.condition_5.percent
                ssrFound = true
            }

            if (!csrFound && !bothFound && includesAll(convertedperformanceValue.condition_5, [6, 7, 8, 9]) && standardData.performance.condition_5.ssr === 10) {
                ssrValue += standardData.performance.condition_5.ssr * standardData.performance.condition_5.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedperformanceValue.condition_5, [2, 3, 4, 5]) && standardData.performance.condition_5.ssr === 1) {
                ssrValue += standardData.performance.condition_5.ssr * standardData.performance.condition_5.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.performance.condition_5.csr) !== -1 && (convertedperformanceValue.condition_5.includes(10))) {
                csrValue += standardData.performance.condition_5.csr * standardData.performance.condition_5.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.performance.condition_5.csr) !== -1 && (convertedperformanceValue.condition_5.includes(1))) {
                csrValue += standardData.performance.condition_5.csr * standardData.performance.condition_5.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedperformanceValue.condition_5, [6, 7, 8, 9]) && standardData.performance.condition_5.csr === 10) {
                csrValue += standardData.performance.condition_5.csr * standardData.performance.condition_5.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedperformanceValue.condition_5, [2, 3, 4, 5]) && standardData.performance.condition_5.csr === 1) {
                csrValue += standardData.performance.condition_5.csr * standardData.performance.condition_5.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.performance.condition_5.both) !== -1 && (convertedperformanceValue.condition_5.includes(10))) {
                bothValue += standardData.performance.condition_5.both * standardData.performance.condition_5.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.performance.condition_5.both) !== -1 && (convertedperformanceValue.condition_5.includes(1))) {
                bothValue += standardData.performance.condition_5.both * standardData.performance.condition_5.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedperformanceValue.condition_5, [6, 7, 8, 9]) && standardData.performance.condition_5.both === 10) {
                bothValue += standardData.performance.condition_5.both * standardData.performance.condition_3.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedperformanceValue.condition_5, [2, 3, 4, 5]) && standardData.performance.condition_5.both === 1) {
                bothValue += standardData.performance.condition_5.both * standardData.performance.condition_5.percent
                bothFound = true
            }

        } else if (convertedperformanceValue.condition_6) {
            if (convertedperformanceValue.condition_6.includes(standardData.performance.condition_6.ssr)) {
                ssrValue += standardData.performance.condition_6.ssr * standardData.performance.condition_6.percent
                ssrFound = true
            }
            if (convertedperformanceValue.condition_6.includes(standardData.performance.condition_6.csr)) {
                csrValue += standardData.performance.condition_6.csr * standardData.performance.condition_6.percent
                csrFound = true
            }
            if (convertedperformanceValue.condition_6.includes(standardData.performance.condition_6.both)) {
                bothValue += standardData.performance.condition_6.both * standardData.performance.condition_6.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.performance.condition_6.ssr) !== -1 && (convertedperformanceValue.condition_6.includes(10))) {
                ssrValue += standardData.performance.condition_6.ssr * standardData.performance.condition_6.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.performance.condition_6.ssr) !== -1 && (convertedperformanceValue.condition_6.includes(1))) {
                ssrValue += standardData.performance.condition_6.ssr * standardData.performance.condition_6.percent
                ssrFound = true
            }

            if (!csrFound && !bothFound && includesAll(convertedperformanceValue.condition_6, [6, 7, 8, 9]) && standardData.performance.condition_6.ssr === 10) {
                ssrValue += standardData.performance.condition_6.ssr * standardData.performance.condition_6.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedperformanceValue.condition_6, [2, 3, 4, 5]) && standardData.performance.condition_6.ssr === 1) {
                ssrValue += standardData.performance.condition_6.ssr * standardData.performance.condition_6.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.performance.condition_6.csr) !== -1 && (convertedperformanceValue.condition_6.includes(10))) {
                csrValue += standardData.performance.condition_6.csr * standardData.performance.condition_6.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.performance.condition_6.csr) !== -1 && (convertedperformanceValue.condition_6.includes(1))) {
                csrValue += standardData.performance.condition_6.csr * standardData.performance.condition_6.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedperformanceValue.condition_6, [6, 7, 8, 9]) && standardData.performance.condition_6.csr === 10) {
                csrValue += standardData.performance.condition_6.csr * standardData.performance.condition_6.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedperformanceValue.condition_6, [2, 3, 4, 5]) && standardData.performance.condition_6.csr === 1) {
                csrValue += standardData.performance.condition_6.csr * standardData.performance.condition_6.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.performance.condition_6.both) !== -1 && (convertedperformanceValue.condition_6.includes(10))) {
                bothValue += standardData.performance.condition_6.both * standardData.performance.condition_6.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.performance.condition_6.both) !== -1 && (convertedperformanceValue.condition_6.includes(1))) {
                bothValue += standardData.performance.condition_6.both * standardData.performance.condition_6.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedperformanceValue.condition_6, [6, 7, 8, 9]) && standardData.performance.condition_6.both === 10) {
                bothValue += standardData.performance.condition_6.both * standardData.performance.condition_6.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedperformanceValue.condition_6, [2, 3, 4, 5]) && standardData.performance.condition_6.both === 1) {
                bothValue += standardData.performance.condition_6.both * standardData.performance.condition_6.percent
                bothFound = true
            }

        }
    })

    convertedUXValues.forEach(converteduxValue => {

        let ssrFound = false;
        let csrFound = false;
        let bothFound = false;
        if (converteduxValue.condition_1) {
            if (converteduxValue.condition_1.includes(standardData.ux.condition_1.ssr)) {
                ssrValue += standardData.ux.condition_1.ssr * standardData.ux.condition_1.percent
                ssrFound = true
            }
            if (converteduxValue.condition_1.includes(standardData.ux.condition_1.csr)) {
                csrValue += standardData.ux.condition_1.csr * standardData.ux.condition_1.percent
                csrFound = true
            }
            if (converteduxValue.condition_1.includes(standardData.ux.condition_1.both)) {
                bothValue += standardData.ux.condition_1.both * standardData.ux.condition_1.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.ux.condition_1.ssr) !== -1 && (converteduxValue.condition_1.includes(10))) {
                ssrValue += standardData.ux.condition_1.ssr * standardData.ux.condition_1.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.ux.condition_1.ssr) !== -1 && (converteduxValue.condition_1.includes(1))) {
                ssrValue += standardData.ux.condition_1.ssr * standardData.ux.condition_1.percent
                ssrFound = true
            }

            if (!csrFound && !bothFound && includesAll(converteduxValue.condition_1, [6, 7, 8, 9]) && standardData.ux.condition_1.ssr === 10) {
                ssrValue += standardData.ux.condition_1.ssr * standardData.ux.condition_1.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(converteduxValue.condition_1, [2, 3, 4, 5]) && standardData.ux.condition_1.ssr === 1) {
                ssrValue += standardData.ux.condition_1.ssr * standardData.ux.condition_1.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.ux.condition_1.csr) !== -1 && (converteduxValue.condition_1.includes(10))) {
                csrValue += standardData.ux.condition_1.csr * standardData.ux.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.ux.condition_1.csr) !== -1 && (converteduxValue.condition_1.includes(1))) {
                csrValue += standardData.ux.condition_1.csr * standardData.ux.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(converteduxValue.condition_1, [6, 7, 8, 9]) && standardData.ux.condition_1.csr === 10) {
                csrValue += standardData.ux.condition_1.csr * standardData.ux.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(converteduxValue.condition_1, [2, 3, 4, 5]) && standardData.ux.condition_1.csr === 1) {
                csrValue += standardData.ux.condition_1.csr * standardData.ux.condition_1.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.ux.condition_1.both) !== -1 && (converteduxValue.condition_1.includes(10))) {
                bothValue += standardData.ux.condition_1.both * standardData.ux.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.ux.condition_1.both) !== -1 && (converteduxValue.condition_1.includes(1))) {
                bothValue += standardData.ux.condition_1.both * standardData.ux.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(converteduxValue.condition_1, [6, 7, 8, 9]) && standardData.ux.condition_1.both === 10) {
                bothValue += standardData.ux.condition_1.both * standardData.ux.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(converteduxValue.condition_1, [2, 3, 4, 5]) && standardData.ux.condition_1.both === 1) {
                bothValue += standardData.ux.condition_1.both * standardData.ux.condition_1.percent
                bothFound = true
            }
        } else if (converteduxValue.condition_2) {
            if (converteduxValue.condition_2.includes(standardData.ux.condition_2.ssr)) {
                ssrValue += standardData.ux.condition_2.ssr * standardData.ux.condition_2.percent
                ssrFound = true
            }
            if (converteduxValue.condition_2.includes(standardData.ux.condition_2.csr)) {
                csrValue += standardData.ux.condition_2.csr * standardData.ux.condition_2.percent
                csrFound = true
            }
            if (converteduxValue.condition_2.includes(standardData.ux.condition_2.both)) {
                bothValue += standardData.ux.condition_2.both * standardData.ux.condition_2.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.ux.condition_2.ssr) !== -1 && (converteduxValue.condition_2.includes(10))) {
                ssrValue += standardData.ux.condition_2.ssr * standardData.ux.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.ux.condition_2.ssr) !== -1 && (converteduxValue.condition_2.includes(1))) {
                ssrValue += standardData.ux.condition_2.ssr * standardData.ux.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(converteduxValue.condition_2, [6, 7, 8, 9]) && standardData.ux.condition_2.ssr === 10) {
                ssrValue += standardData.ux.condition_2.ssr * standardData.ux.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(converteduxValue.condition_2, [2, 3, 4, 5]) && standardData.ux.condition_2.ssr === 1) {
                ssrValue += standardData.ux.condition_2.ssr * standardData.ux.condition_2.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.ux.condition_2.csr) !== -1 && (converteduxValue.condition_2.includes(10))) {
                csrValue += standardData.ux.condition_2.csr * standardData.ux.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.ux.condition_2.csr) !== -1 && (converteduxValue.condition_2.includes(1))) {
                csrValue += standardData.ux.condition_2.csr * standardData.ux.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(converteduxValue.condition_2, [6, 7, 8, 9]) && standardData.ux.condition_2.csr === 10) {
                csrValue += standardData.ux.condition_2.csr * standardData.ux.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(converteduxValue.condition_2, [2, 3, 4, 5]) && standardData.ux.condition_2.csr === 1) {
                csrValue += standardData.ux.condition_2.csr * standardData.ux.condition_2.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.ux.condition_2.both) !== -1 && (converteduxValue.condition_2.includes(10))) {
                bothValue += standardData.ux.condition_2.both * standardData.ux.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.ux.condition_2.both) !== -1 && (converteduxValue.condition_2.includes(1))) {
                bothValue += standardData.ux.condition_2.both * standardData.ux.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(converteduxValue.condition_2, [6, 7, 8, 9]) && standardData.ux.condition_2.both === 10) {
                bothValue += standardData.ux.condition_2.both * standardData.ux.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(converteduxValue.condition_2, [2, 3, 4, 5]) && standardData.ux.condition_2.both === 1) {
                bothValue += standardData.ux.condition_2.both * standardData.ux.condition_2.percent
                bothFound = true
            }

        } else if (converteduxValue.condition_3) {
            if (converteduxValue.condition_3.includes(standardData.ux.condition_3.ssr)) {
                ssrValue += standardData.ux.condition_3.ssr * standardData.ux.condition_3.percent
                ssrFound = true
            }
            if (converteduxValue.condition_3.includes(standardData.ux.condition_3.csr)) {
                csrValue += standardData.ux.condition_3.csr * standardData.ux.condition_3.percent
                csrFound = true
            }
            if (converteduxValue.condition_3.includes(standardData.ux.condition_3.both)) {
                bothValue += standardData.ux.condition_3.both * standardData.ux.condition_3.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.ux.condition_3.ssr) !== -1 && (converteduxValue.condition_3.includes(10))) {
                ssrValue += standardData.ux.condition_3.ssr * standardData.ux.condition_3.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.ux.condition_3.ssr) !== -1 && (converteduxValue.condition_3.includes(1))) {
                ssrValue += standardData.ux.condition_3.ssr * standardData.ux.condition_3.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(converteduxValue.condition_3, [6, 7, 8, 9]) && standardData.ux.condition_3.ssr === 10) {
                ssrValue += standardData.ux.condition_3.ssr * standardData.ux.condition_3.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(converteduxValue.condition_3, [2, 3, 4, 5]) && standardData.ux.condition_3.ssr === 1) {
                ssrValue += standardData.ux.condition_3.ssr * standardData.ux.condition_3.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.ux.condition_3.csr) !== -1 && (converteduxValue.condition_3.includes(10))) {
                csrValue += standardData.ux.condition_3.csr * standardData.ux.condition_3.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.ux.condition_3.csr) !== -1 && (converteduxValue.condition_3.includes(1))) {
                csrValue += standardData.ux.condition_3.csr * standardData.ux.condition_3.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(converteduxValue.condition_3, [6, 7, 8, 9]) && standardData.ux.condition_3.csr === 10) {
                csrValue += standardData.ux.condition_3.csr * standardData.ux.condition_3.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(converteduxValue.condition_3, [2, 3, 4, 5]) && standardData.ux.condition_3.csr === 1) {
                csrValue += standardData.ux.condition_3.csr * standardData.ux.condition_3.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.ux.condition_3.both) !== -1 && (converteduxValue.condition_3.includes(10))) {
                bothValue += standardData.ux.condition_3.both * standardData.ux.condition_3.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.ux.condition_3.both) !== -1 && (converteduxValue.condition_3.includes(1))) {
                bothValue += standardData.ux.condition_3.both * standardData.ux.condition_3.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(converteduxValue.condition_3, [6, 7, 8, 9]) && standardData.ux.condition_3.both === 10) {
                bothValue += standardData.ux.condition_3.both * standardData.ux.condition_3.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(converteduxValue.condition_3, [2, 3, 4, 5]) && standardData.ux.condition_3.both === 1) {
                bothValue += standardData.ux.condition_3.both * standardData.ux.condition_3.percent
                bothFound = true
            }

        } else if (converteduxValue.condition_4) {
            if (converteduxValue.condition_4.includes(standardData.ux.condition_4.ssr)) {
                ssrValue += standardData.ux.condition_4.ssr * standardData.ux.condition_4.percent
                ssrFound = true
            }
            if (converteduxValue.condition_4.includes(standardData.ux.condition_4.csr)) {
                csrValue += standardData.ux.condition_4.csr * standardData.ux.condition_4.percent
                csrFound = true
            }
            if (converteduxValue.condition_4.includes(standardData.ux.condition_4.both)) {
                bothValue += standardData.ux.condition_4.both * standardData.ux.condition_4.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.ux.condition_4.ssr) !== -1 && (converteduxValue.condition_4.includes(10))) {
                ssrValue += standardData.ux.condition_4.ssr * standardData.ux.condition_4.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.ux.condition_4.ssr) !== -1 && (converteduxValue.condition_4.includes(1))) {
                ssrValue += standardData.ux.condition_4.ssr * standardData.ux.condition_4.percent
                ssrFound = true
            }

            if (!csrFound && !bothFound && includesAll(converteduxValue.condition_4, [6, 7, 8, 9]) && standardData.ux.condition_4.ssr === 10) {
                ssrValue += standardData.ux.condition_4.ssr * standardData.ux.condition_4.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(converteduxValue.condition_4, [2, 3, 4, 5]) && standardData.ux.condition_4.ssr === 1) {
                ssrValue += standardData.ux.condition_4.ssr * standardData.ux.condition_4.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.ux.condition_4.csr) !== -1 && (converteduxValue.condition_4.includes(10))) {
                csrValue += standardData.ux.condition_4.csr * standardData.ux.condition_4.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.ux.condition_4.csr) !== -1 && (converteduxValue.condition_4.includes(1))) {
                csrValue += standardData.ux.condition_4.csr * standardData.ux.condition_4.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(converteduxValue.condition_4, [6, 7, 8, 9]) && standardData.ux.condition_4.csr === 10) {
                csrValue += standardData.ux.condition_4.csr * standardData.ux.condition_4.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(converteduxValue.condition_4, [2, 3, 4, 5]) && standardData.ux.condition_4.csr === 1) {
                csrValue += standardData.ux.condition_4.csr * standardData.ux.condition_4.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.ux.condition_4.both) !== -1 && (converteduxValue.condition_4.includes(10))) {
                bothValue += standardData.ux.condition_4.both * standardData.ux.condition_4.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.ux.condition_4.both) !== -1 && (converteduxValue.condition_4.includes(1))) {
                bothValue += standardData.ux.condition_4.both * standardData.ux.condition_4.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(converteduxValue.condition_4, [6, 7, 8, 9]) && standardData.ux.condition_4.both === 10) {
                bothValue += standardData.ux.condition_4.both * standardData.ux.condition_4.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(converteduxValue.condition_4, [2, 3, 4, 5]) && standardData.ux.condition_4.both === 1) {
                bothValue += standardData.ux.condition_4.both * standardData.ux.condition_4.percent
                bothFound = true
            }

        } else if (converteduxValue.condition_5) {
            if (converteduxValue.condition_5.includes(standardData.ux.condition_5.ssr)) {
                ssrValue += standardData.ux.condition_5.ssr * standardData.ux.condition_5.percent
                ssrFound = true
            }
            if (converteduxValue.condition_5.includes(standardData.ux.condition_5.csr)) {
                csrValue += standardData.ux.condition_5.csr * standardData.ux.condition_5.percent
                csrFound = true
            }
            if (converteduxValue.condition_5.includes(standardData.ux.condition_5.both)) {
                bothValue += standardData.ux.condition_5.both * standardData.ux.condition_5.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.ux.condition_5.ssr) !== -1 && (converteduxValue.condition_5.includes(10))) {
                ssrValue += standardData.ux.condition_5.ssr * standardData.ux.condition_5.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.ux.condition_5.ssr) !== -1 && (converteduxValue.condition_5.includes(1))) {
                ssrValue += standardData.ux.condition_5.ssr * standardData.ux.condition_5.percent
                ssrFound = true
            }

            if (!csrFound && !bothFound && includesAll(converteduxValue.condition_5, [6, 7, 8, 9]) && standardData.ux.condition_5.ssr === 10) {
                ssrValue += standardData.ux.condition_5.ssr * standardData.ux.condition_5.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(converteduxValue.condition_5, [2, 3, 4, 5]) && standardData.ux.condition_5.ssr === 1) {
                ssrValue += standardData.ux.condition_5.ssr * standardData.ux.condition_5.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.ux.condition_5.csr) !== -1 && (converteduxValue.condition_5.includes(10))) {
                csrValue += standardData.ux.condition_5.csr * standardData.ux.condition_5.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.ux.condition_5.csr) !== -1 && (converteduxValue.condition_5.includes(1))) {
                csrValue += standardData.ux.condition_5.csr * standardData.ux.condition_5.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(converteduxValue.condition_5, [6, 7, 8, 9]) && standardData.ux.condition_5.csr === 10) {
                csrValue += standardData.ux.condition_5.csr * standardData.ux.condition_5.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(converteduxValue.condition_5, [2, 3, 4, 5]) && standardData.ux.condition_5.csr === 1) {
                csrValue += standardData.ux.condition_5.csr * standardData.ux.condition_5.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.ux.condition_5.both) !== -1 && (converteduxValue.condition_5.includes(10))) {
                bothValue += standardData.ux.condition_5.both * standardData.ux.condition_5.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.ux.condition_5.both) !== -1 && (converteduxValue.condition_5.includes(1))) {
                bothValue += standardData.ux.condition_5.both * standardData.ux.condition_5.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(converteduxValue.condition_5, [6, 7, 8, 9]) && standardData.ux.condition_5.both === 10) {
                bothValue += standardData.ux.condition_5.both * standardData.ux.condition_3.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(converteduxValue.condition_5, [2, 3, 4, 5]) && standardData.ux.condition_5.both === 1) {
                bothValue += standardData.ux.condition_5.both * standardData.ux.condition_5.percent
                bothFound = true
            }
        }
    })

    convertedSEOValues.forEach(convertedseoValue => {

        let ssrFound = false;
        let csrFound = false;
        let bothFound = false;
        if (convertedseoValue.condition_1) {
            if (convertedseoValue.condition_1.includes(standardData.seo.condition_1.ssr)) {
                ssrValue += standardData.seo.condition_1.ssr * standardData.seo.condition_1.percent
                ssrFound = true
            }
            if (convertedseoValue.condition_1.includes(standardData.seo.condition_1.csr)) {
                csrValue += standardData.seo.condition_1.csr * standardData.seo.condition_1.percent
                csrFound = true
            }
            if (convertedseoValue.condition_1.includes(standardData.seo.condition_1.both)) {
                bothValue += standardData.seo.condition_1.both * standardData.seo.condition_1.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.seo.condition_1.ssr) !== -1 && (convertedseoValue.condition_1.includes(10))) {
                ssrValue += standardData.seo.condition_1.ssr * standardData.seo.condition_1.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.seo.condition_1.ssr) !== -1 && (convertedseoValue.condition_1.includes(1))) {
                ssrValue += standardData.seo.condition_1.ssr * standardData.seo.condition_1.percent
                ssrFound = true
            }

            if (!csrFound && !bothFound && includesAll(convertedseoValue.condition_1, [6, 7, 8, 9]) && standardData.seo.condition_1.ssr === 10) {
                ssrValue += standardData.seo.condition_1.ssr * standardData.seo.condition_1.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedseoValue.condition_1, [2, 3, 4, 5]) && standardData.seo.condition_1.ssr === 1) {
                ssrValue += standardData.seo.condition_1.ssr * standardData.seo.condition_1.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.seo.condition_1.csr) !== -1 && (convertedseoValue.condition_1.includes(10))) {
                csrValue += standardData.seo.condition_1.csr * standardData.seo.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.seo.condition_1.csr) !== -1 && (convertedseoValue.condition_1.includes(1))) {
                csrValue += standardData.seo.condition_1.csr * standardData.seo.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedseoValue.condition_1, [6, 7, 8, 9]) && standardData.seo.condition_1.csr === 10) {
                csrValue += standardData.seo.condition_1.csr * standardData.seo.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedseoValue.condition_1, [2, 3, 4, 5]) && standardData.seo.condition_1.csr === 1) {
                csrValue += standardData.seo.condition_1.csr * standardData.seo.condition_1.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.seo.condition_1.both) !== -1 && (convertedseoValue.condition_1.includes(10))) {
                bothValue += standardData.seo.condition_1.both * standardData.seo.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.seo.condition_1.both) !== -1 && (convertedseoValue.condition_1.includes(1))) {
                bothValue += standardData.seo.condition_1.both * standardData.seo.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedseoValue.condition_1, [6, 7, 8, 9]) && standardData.seo.condition_1.both === 10) {
                bothValue += standardData.seo.condition_1.both * standardData.seo.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedseoValue.condition_1, [2, 3, 4, 5]) && standardData.seo.condition_1.both === 1) {
                bothValue += standardData.seo.condition_1.both * standardData.seo.condition_1.percent
                bothFound = true
            }
        } else if (convertedseoValue.condition_2) {
            if (convertedseoValue.condition_2.includes(standardData.seo.condition_2.ssr)) {
                ssrValue += standardData.seo.condition_2.ssr * standardData.seo.condition_2.percent
                ssrFound = true
            }
            if (convertedseoValue.condition_2.includes(standardData.seo.condition_2.csr)) {
                csrValue += standardData.seo.condition_2.csr * standardData.seo.condition_2.percent
                csrFound = true
            }
            if (convertedseoValue.condition_2.includes(standardData.seo.condition_2.both)) {
                bothValue += standardData.seo.condition_2.both * standardData.seo.condition_2.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.seo.condition_2.ssr) !== -1 && (convertedseoValue.condition_2.includes(10))) {
                ssrValue += standardData.seo.condition_2.ssr * standardData.seo.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.seo.condition_2.ssr) !== -1 && (convertedseoValue.condition_2.includes(1))) {
                ssrValue += standardData.seo.condition_2.ssr * standardData.seo.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedseoValue.condition_2, [6, 7, 8, 9]) && standardData.seo.condition_2.ssr === 10) {
                ssrValue += standardData.seo.condition_2.ssr * standardData.seo.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedseoValue.condition_2, [2, 3, 4, 5]) && standardData.seo.condition_2.ssr === 1) {
                ssrValue += standardData.seo.condition_2.ssr * standardData.seo.condition_2.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.seo.condition_2.csr) !== -1 && (convertedseoValue.condition_2.includes(10))) {
                csrValue += standardData.seo.condition_2.csr * standardData.seo.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.seo.condition_2.csr) !== -1 && (convertedseoValue.condition_2.includes(1))) {
                csrValue += standardData.seo.condition_2.csr * standardData.seo.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedseoValue.condition_2, [6, 7, 8, 9]) && standardData.seo.condition_2.csr === 10) {
                csrValue += standardData.seo.condition_2.csr * standardData.seo.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedseoValue.condition_2, [2, 3, 4, 5]) && standardData.seo.condition_2.csr === 1) {
                csrValue += standardData.seo.condition_2.csr * standardData.seo.condition_2.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.seo.condition_2.both) !== -1 && (convertedseoValue.condition_2.includes(10))) {
                bothValue += standardData.seo.condition_2.both * standardData.seo.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.seo.condition_2.both) !== -1 && (convertedseoValue.condition_2.includes(1))) {
                bothValue += standardData.seo.condition_2.both * standardData.seo.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedseoValue.condition_2, [6, 7, 8, 9]) && standardData.seo.condition_2.both === 10) {
                bothValue += standardData.seo.condition_2.both * standardData.seo.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedseoValue.condition_2, [2, 3, 4, 5]) && standardData.seo.condition_2.both === 1) {
                bothValue += standardData.seo.condition_2.both * standardData.seo.condition_2.percent
                bothFound = true
            }

        } else if (convertedseoValue.condition_3) {
            if (convertedseoValue.condition_3.includes(standardData.seo.condition_3.ssr)) {
                ssrValue += standardData.seo.condition_3.ssr * standardData.seo.condition_3.percent
                ssrFound = true
            }
            if (convertedseoValue.condition_3.includes(standardData.seo.condition_3.csr)) {
                csrValue += standardData.seo.condition_3.csr * standardData.seo.condition_3.percent
                csrFound = true
            }
            if (convertedseoValue.condition_3.includes(standardData.seo.condition_3.both)) {
                bothValue += standardData.seo.condition_3.both * standardData.seo.condition_3.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.seo.condition_3.ssr) !== -1 && (convertedseoValue.condition_3.includes(10))) {
                ssrValue += standardData.seo.condition_3.ssr * standardData.seo.condition_3.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.seo.condition_3.ssr) !== -1 && (convertedseoValue.condition_3.includes(1))) {
                ssrValue += standardData.seo.condition_3.ssr * standardData.seo.condition_3.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedseoValue.condition_3, [6, 7, 8, 9]) && standardData.seo.condition_3.ssr === 10) {
                ssrValue += standardData.seo.condition_3.ssr * standardData.seo.condition_3.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedseoValue.condition_3, [2, 3, 4, 5]) && standardData.seo.condition_3.ssr === 1) {
                ssrValue += standardData.seo.condition_3.ssr * standardData.seo.condition_3.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.seo.condition_3.csr) !== -1 && (convertedseoValue.condition_3.includes(10))) {
                csrValue += standardData.seo.condition_3.csr * standardData.seo.condition_3.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.seo.condition_3.csr) !== -1 && (convertedseoValue.condition_3.includes(1))) {
                csrValue += standardData.seo.condition_3.csr * standardData.seo.condition_3.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedseoValue.condition_3, [6, 7, 8, 9]) && standardData.seo.condition_3.csr === 10) {
                csrValue += standardData.seo.condition_3.csr * standardData.seo.condition_3.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedseoValue.condition_3, [2, 3, 4, 5]) && standardData.seo.condition_3.csr === 1) {
                csrValue += standardData.seo.condition_3.csr * standardData.seo.condition_3.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.seo.condition_3.both) !== -1 && (convertedseoValue.condition_3.includes(10))) {
                bothValue += standardData.seo.condition_3.both * standardData.seo.condition_3.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.seo.condition_3.both) !== -1 && (convertedseoValue.condition_3.includes(1))) {
                bothValue += standardData.seo.condition_3.both * standardData.seo.condition_3.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedseoValue.condition_3, [6, 7, 8, 9]) && standardData.seo.condition_3.both === 10) {
                bothValue += standardData.seo.condition_3.both * standardData.seo.condition_3.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedseoValue.condition_3, [2, 3, 4, 5]) && standardData.seo.condition_3.both === 1) {
                bothValue += standardData.seo.condition_3.both * standardData.seo.condition_3.percent
                bothFound = true
            }

        }
    })

    convertedDevValues.forEach(converteddevelopmentValue => {

        let ssrFound = false;
        let csrFound = false;
        let bothFound = false;
        if (converteddevelopmentValue.condition_1) {
            if (converteddevelopmentValue.condition_1.includes(standardData.development.condition_1.ssr)) {
                ssrValue += standardData.development.condition_1.ssr * standardData.development.condition_1.percent
                ssrFound = true
            }
            if (converteddevelopmentValue.condition_1.includes(standardData.development.condition_1.csr)) {
                csrValue += standardData.development.condition_1.csr * standardData.development.condition_1.percent
                csrFound = true
            }
            if (converteddevelopmentValue.condition_1.includes(standardData.development.condition_1.both)) {
                bothValue += standardData.development.condition_1.both * standardData.development.condition_1.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.development.condition_1.ssr) !== -1 && (converteddevelopmentValue.condition_1.includes(10))) {
                ssrValue += standardData.development.condition_1.ssr * standardData.development.condition_1.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.development.condition_1.ssr) !== -1 && (converteddevelopmentValue.condition_1.includes(1))) {
                ssrValue += standardData.development.condition_1.ssr * standardData.development.condition_1.percent
                ssrFound = true
            }

            if (!csrFound && !bothFound && includesAll(converteddevelopmentValue.condition_1, [6, 7, 8, 9]) && standardData.development.condition_1.ssr === 10) {
                ssrValue += standardData.development.condition_1.ssr * standardData.development.condition_1.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(converteddevelopmentValue.condition_1, [2, 3, 4, 5]) && standardData.development.condition_1.ssr === 1) {
                ssrValue += standardData.development.condition_1.ssr * standardData.development.condition_1.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.development.condition_1.csr) !== -1 && (converteddevelopmentValue.condition_1.includes(10))) {
                csrValue += standardData.development.condition_1.csr * standardData.development.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.development.condition_1.csr) !== -1 && (converteddevelopmentValue.condition_1.includes(1))) {
                csrValue += standardData.development.condition_1.csr * standardData.development.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(converteddevelopmentValue.condition_1, [6, 7, 8, 9]) && standardData.development.condition_1.csr === 10) {
                csrValue += standardData.development.condition_1.csr * standardData.development.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(converteddevelopmentValue.condition_1, [2, 3, 4, 5]) && standardData.development.condition_1.csr === 1) {
                csrValue += standardData.development.condition_1.csr * standardData.development.condition_1.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.development.condition_1.both) !== -1 && (converteddevelopmentValue.condition_1.includes(10))) {
                bothValue += standardData.development.condition_1.both * standardData.development.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.development.condition_1.both) !== -1 && (converteddevelopmentValue.condition_1.includes(1))) {
                bothValue += standardData.development.condition_1.both * standardData.development.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(converteddevelopmentValue.condition_1, [6, 7, 8, 9]) && standardData.development.condition_1.both === 10) {
                bothValue += standardData.development.condition_1.both * standardData.development.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(converteddevelopmentValue.condition_1, [2, 3, 4, 5]) && standardData.development.condition_1.both === 1) {
                bothValue += standardData.development.condition_1.both * standardData.development.condition_1.percent
                bothFound = true
            }
        } else if (converteddevelopmentValue.condition_2) {
            if (converteddevelopmentValue.condition_2.includes(standardData.development.condition_2.ssr)) {
                ssrValue += standardData.development.condition_2.ssr * standardData.development.condition_2.percent
                ssrFound = true
            }
            if (converteddevelopmentValue.condition_2.includes(standardData.development.condition_2.csr)) {
                csrValue += standardData.development.condition_2.csr * standardData.development.condition_2.percent
                csrFound = true
            }
            if (converteddevelopmentValue.condition_2.includes(standardData.development.condition_2.both)) {
                bothValue += standardData.development.condition_2.both * standardData.development.condition_2.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.development.condition_2.ssr) !== -1 && (converteddevelopmentValue.condition_2.includes(10))) {
                ssrValue += standardData.development.condition_2.ssr * standardData.development.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.development.condition_2.ssr) !== -1 && (converteddevelopmentValue.condition_2.includes(1))) {
                ssrValue += standardData.development.condition_2.ssr * standardData.development.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(converteddevelopmentValue.condition_2, [6, 7, 8, 9]) && standardData.development.condition_2.ssr === 10) {
                ssrValue += standardData.development.condition_2.ssr * standardData.development.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(converteddevelopmentValue.condition_2, [2, 3, 4, 5]) && standardData.development.condition_2.ssr === 1) {
                ssrValue += standardData.development.condition_2.ssr * standardData.development.condition_2.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.development.condition_2.csr) !== -1 && (converteddevelopmentValue.condition_2.includes(10))) {
                csrValue += standardData.development.condition_2.csr * standardData.development.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.development.condition_2.csr) !== -1 && (converteddevelopmentValue.condition_2.includes(1))) {
                csrValue += standardData.development.condition_2.csr * standardData.development.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(converteddevelopmentValue.condition_2, [6, 7, 8, 9]) && standardData.development.condition_2.csr === 10) {
                csrValue += standardData.development.condition_2.csr * standardData.development.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(converteddevelopmentValue.condition_2, [2, 3, 4, 5]) && standardData.development.condition_2.csr === 1) {
                csrValue += standardData.development.condition_2.csr * standardData.development.condition_2.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.development.condition_2.both) !== -1 && (converteddevelopmentValue.condition_2.includes(10))) {
                bothValue += standardData.development.condition_2.both * standardData.development.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.development.condition_2.both) !== -1 && (converteddevelopmentValue.condition_2.includes(1))) {
                bothValue += standardData.development.condition_2.both * standardData.development.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(converteddevelopmentValue.condition_2, [6, 7, 8, 9]) && standardData.development.condition_2.both === 10) {
                bothValue += standardData.development.condition_2.both * standardData.development.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(converteddevelopmentValue.condition_2, [2, 3, 4, 5]) && standardData.development.condition_2.both === 1) {
                bothValue += standardData.development.condition_2.both * standardData.development.condition_2.percent
                bothFound = true
            }

        }
    })


    convertedMaintainValues.forEach(convertedmaintainValue => {

        let ssrFound = false;
        let csrFound = false;
        let bothFound = false;
        if (convertedmaintainValue.condition_1) {
            if (convertedmaintainValue.condition_1.includes(standardData.maintain.condition_1.ssr)) {
                ssrValue += standardData.maintain.condition_1.ssr * standardData.maintain.condition_1.percent
                ssrFound = true
            }
            if (convertedmaintainValue.condition_1.includes(standardData.maintain.condition_1.csr)) {
                csrValue += standardData.maintain.condition_1.csr * standardData.maintain.condition_1.percent
                csrFound = true
            }
            if (convertedmaintainValue.condition_1.includes(standardData.maintain.condition_1.both)) {
                bothValue += standardData.maintain.condition_1.both * standardData.maintain.condition_1.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.maintain.condition_1.ssr) !== -1 && (convertedmaintainValue.condition_1.includes(10))) {
                ssrValue += standardData.maintain.condition_1.ssr * standardData.maintain.condition_1.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.maintain.condition_1.ssr) !== -1 && (convertedmaintainValue.condition_1.includes(1))) {
                ssrValue += standardData.maintain.condition_1.ssr * standardData.maintain.condition_1.percent
                ssrFound = true
            }

            if (!csrFound && !bothFound && includesAll(convertedmaintainValue.condition_1, [6, 7, 8, 9]) && standardData.maintain.condition_1.ssr === 10) {
                ssrValue += standardData.maintain.condition_1.ssr * standardData.maintain.condition_1.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedmaintainValue.condition_1, [2, 3, 4, 5]) && standardData.maintain.condition_1.ssr === 1) {
                ssrValue += standardData.maintain.condition_1.ssr * standardData.maintain.condition_1.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.maintain.condition_1.csr) !== -1 && (convertedmaintainValue.condition_1.includes(10))) {
                csrValue += standardData.maintain.condition_1.csr * standardData.maintain.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.maintain.condition_1.csr) !== -1 && (convertedmaintainValue.condition_1.includes(1))) {
                csrValue += standardData.maintain.condition_1.csr * standardData.maintain.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedmaintainValue.condition_1, [6, 7, 8, 9]) && standardData.maintain.condition_1.csr === 10) {
                csrValue += standardData.maintain.condition_1.csr * standardData.maintain.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedmaintainValue.condition_1, [2, 3, 4, 5]) && standardData.maintain.condition_1.csr === 1) {
                csrValue += standardData.maintain.condition_1.csr * standardData.maintain.condition_1.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.maintain.condition_1.both) !== -1 && (convertedmaintainValue.condition_1.includes(10))) {
                bothValue += standardData.maintain.condition_1.both * standardData.maintain.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.maintain.condition_1.both) !== -1 && (convertedmaintainValue.condition_1.includes(1))) {
                bothValue += standardData.maintain.condition_1.both * standardData.maintain.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedmaintainValue.condition_1, [6, 7, 8, 9]) && standardData.maintain.condition_1.both === 10) {
                bothValue += standardData.maintain.condition_1.both * standardData.maintain.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedmaintainValue.condition_1, [2, 3, 4, 5]) && standardData.maintain.condition_1.both === 1) {
                bothValue += standardData.maintain.condition_1.both * standardData.maintain.condition_1.percent
                bothFound = true
            }
        } else if (convertedmaintainValue.condition_2) {
            if (convertedmaintainValue.condition_2.includes(standardData.maintain.condition_2.ssr)) {
                ssrValue += standardData.maintain.condition_2.ssr * standardData.maintain.condition_2.percent
                ssrFound = true
            }
            if (convertedmaintainValue.condition_2.includes(standardData.maintain.condition_2.csr)) {
                csrValue += standardData.maintain.condition_2.csr * standardData.maintain.condition_2.percent
                csrFound = true
            }
            if (convertedmaintainValue.condition_2.includes(standardData.maintain.condition_2.both)) {
                bothValue += standardData.maintain.condition_2.both * standardData.maintain.condition_2.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.maintain.condition_2.ssr) !== -1 && (convertedmaintainValue.condition_2.includes(10))) {
                ssrValue += standardData.maintain.condition_2.ssr * standardData.maintain.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.maintain.condition_2.ssr) !== -1 && (convertedmaintainValue.condition_2.includes(1))) {
                ssrValue += standardData.maintain.condition_2.ssr * standardData.maintain.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedmaintainValue.condition_2, [6, 7, 8, 9]) && standardData.maintain.condition_2.ssr === 10) {
                ssrValue += standardData.maintain.condition_2.ssr * standardData.maintain.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedmaintainValue.condition_2, [2, 3, 4, 5]) && standardData.maintain.condition_2.ssr === 1) {
                ssrValue += standardData.maintain.condition_2.ssr * standardData.maintain.condition_2.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.maintain.condition_2.csr) !== -1 && (convertedmaintainValue.condition_2.includes(10))) {
                csrValue += standardData.maintain.condition_2.csr * standardData.maintain.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.maintain.condition_2.csr) !== -1 && (convertedmaintainValue.condition_2.includes(1))) {
                csrValue += standardData.maintain.condition_2.csr * standardData.maintain.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedmaintainValue.condition_2, [6, 7, 8, 9]) && standardData.maintain.condition_2.csr === 10) {
                csrValue += standardData.maintain.condition_2.csr * standardData.maintain.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedmaintainValue.condition_2, [2, 3, 4, 5]) && standardData.maintain.condition_2.csr === 1) {
                csrValue += standardData.maintain.condition_2.csr * standardData.maintain.condition_2.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.maintain.condition_2.both) !== -1 && (convertedmaintainValue.condition_2.includes(10))) {
                bothValue += standardData.maintain.condition_2.both * standardData.maintain.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.maintain.condition_2.both) !== -1 && (convertedmaintainValue.condition_2.includes(1))) {
                bothValue += standardData.maintain.condition_2.both * standardData.maintain.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedmaintainValue.condition_2, [6, 7, 8, 9]) && standardData.maintain.condition_2.both === 10) {
                bothValue += standardData.maintain.condition_2.both * standardData.maintain.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedmaintainValue.condition_2, [2, 3, 4, 5]) && standardData.maintain.condition_2.both === 1) {
                bothValue += standardData.maintain.condition_2.both * standardData.maintain.condition_2.percent
                bothFound = true
            }

        }
    })


    convertedFlexValues.forEach(convertedflexibilityValue => {

        let ssrFound = false;
        let csrFound = false;
        let bothFound = false;
        if (convertedflexibilityValue.condition_1) {
            if (convertedflexibilityValue.condition_1.includes(standardData.flexibility.condition_1.ssr)) {
                ssrValue += standardData.flexibility.condition_1.ssr * standardData.flexibility.condition_1.percent
                ssrFound = true
            }
            if (convertedflexibilityValue.condition_1.includes(standardData.flexibility.condition_1.csr)) {
                csrValue += standardData.flexibility.condition_1.csr * standardData.flexibility.condition_1.percent
                csrFound = true
            }
            if (convertedflexibilityValue.condition_1.includes(standardData.flexibility.condition_1.both)) {
                bothValue += standardData.flexibility.condition_1.both * standardData.flexibility.condition_1.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.flexibility.condition_1.ssr) !== -1 && (convertedflexibilityValue.condition_1.includes(10))) {
                ssrValue += standardData.flexibility.condition_1.ssr * standardData.flexibility.condition_1.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.flexibility.condition_1.ssr) !== -1 && (convertedflexibilityValue.condition_1.includes(1))) {
                ssrValue += standardData.flexibility.condition_1.ssr * standardData.flexibility.condition_1.percent
                ssrFound = true
            }

            if (!csrFound && !bothFound && includesAll(convertedflexibilityValue.condition_1, [6, 7, 8, 9]) && standardData.flexibility.condition_1.ssr === 10) {
                ssrValue += standardData.flexibility.condition_1.ssr * standardData.flexibility.condition_1.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedflexibilityValue.condition_1, [2, 3, 4, 5]) && standardData.flexibility.condition_1.ssr === 1) {
                ssrValue += standardData.flexibility.condition_1.ssr * standardData.flexibility.condition_1.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.flexibility.condition_1.csr) !== -1 && (convertedflexibilityValue.condition_1.includes(10))) {
                csrValue += standardData.flexibility.condition_1.csr * standardData.flexibility.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.flexibility.condition_1.csr) !== -1 && (convertedflexibilityValue.condition_1.includes(1))) {
                csrValue += standardData.flexibility.condition_1.csr * standardData.flexibility.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedflexibilityValue.condition_1, [6, 7, 8, 9]) && standardData.flexibility.condition_1.csr === 10) {
                csrValue += standardData.flexibility.condition_1.csr * standardData.flexibility.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedflexibilityValue.condition_1, [2, 3, 4, 5]) && standardData.flexibility.condition_1.csr === 1) {
                csrValue += standardData.flexibility.condition_1.csr * standardData.flexibility.condition_1.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.flexibility.condition_1.both) !== -1 && (convertedflexibilityValue.condition_1.includes(10))) {
                bothValue += standardData.flexibility.condition_1.both * standardData.flexibility.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.flexibility.condition_1.both) !== -1 && (convertedflexibilityValue.condition_1.includes(1))) {
                bothValue += standardData.flexibility.condition_1.both * standardData.flexibility.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedflexibilityValue.condition_1, [6, 7, 8, 9]) && standardData.flexibility.condition_1.both === 10) {
                bothValue += standardData.flexibility.condition_1.both * standardData.flexibility.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedflexibilityValue.condition_1, [2, 3, 4, 5]) && standardData.flexibility.condition_1.both === 1) {
                bothValue += standardData.flexibility.condition_1.both * standardData.flexibility.condition_1.percent
                bothFound = true
            }
        } else if (convertedflexibilityValue.condition_2) {
            if (convertedflexibilityValue.condition_2.includes(standardData.flexibility.condition_2.ssr)) {
                ssrValue += standardData.flexibility.condition_2.ssr * standardData.flexibility.condition_2.percent
                ssrFound = true
            }
            if (convertedflexibilityValue.condition_2.includes(standardData.flexibility.condition_2.csr)) {
                csrValue += standardData.flexibility.condition_2.csr * standardData.flexibility.condition_2.percent
                csrFound = true
            }
            if (convertedflexibilityValue.condition_2.includes(standardData.flexibility.condition_2.both)) {
                bothValue += standardData.flexibility.condition_2.both * standardData.flexibility.condition_2.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.flexibility.condition_2.ssr) !== -1 && (convertedflexibilityValue.condition_2.includes(10))) {
                ssrValue += standardData.flexibility.condition_2.ssr * standardData.flexibility.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.flexibility.condition_2.ssr) !== -1 && (convertedflexibilityValue.condition_2.includes(1))) {
                ssrValue += standardData.flexibility.condition_2.ssr * standardData.flexibility.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedflexibilityValue.condition_2, [6, 7, 8, 9]) && standardData.flexibility.condition_2.ssr === 10) {
                ssrValue += standardData.flexibility.condition_2.ssr * standardData.flexibility.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedflexibilityValue.condition_2, [2, 3, 4, 5]) && standardData.flexibility.condition_2.ssr === 1) {
                ssrValue += standardData.flexibility.condition_2.ssr * standardData.flexibility.condition_2.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.flexibility.condition_2.csr) !== -1 && (convertedflexibilityValue.condition_2.includes(10))) {
                csrValue += standardData.flexibility.condition_2.csr * standardData.flexibility.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.flexibility.condition_2.csr) !== -1 && (convertedflexibilityValue.condition_2.includes(1))) {
                csrValue += standardData.flexibility.condition_2.csr * standardData.flexibility.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedflexibilityValue.condition_2, [6, 7, 8, 9]) && standardData.flexibility.condition_2.csr === 10) {
                csrValue += standardData.flexibility.condition_2.csr * standardData.flexibility.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedflexibilityValue.condition_2, [2, 3, 4, 5]) && standardData.flexibility.condition_2.csr === 1) {
                csrValue += standardData.flexibility.condition_2.csr * standardData.flexibility.condition_2.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.flexibility.condition_2.both) !== -1 && (convertedflexibilityValue.condition_2.includes(10))) {
                bothValue += standardData.flexibility.condition_2.both * standardData.flexibility.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.flexibility.condition_2.both) !== -1 && (convertedflexibilityValue.condition_2.includes(1))) {
                bothValue += standardData.flexibility.condition_2.both * standardData.flexibility.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedflexibilityValue.condition_2, [6, 7, 8, 9]) && standardData.flexibility.condition_2.both === 10) {
                bothValue += standardData.flexibility.condition_2.both * standardData.flexibility.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedflexibilityValue.condition_2, [2, 3, 4, 5]) && standardData.flexibility.condition_2.both === 1) {
                bothValue += standardData.flexibility.condition_2.both * standardData.flexibility.condition_2.percent
                bothFound = true
            }

        } else if (convertedflexibilityValue.condition_3) {
            if (convertedflexibilityValue.condition_3.includes(standardData.flexibility.condition_3.ssr)) {
                ssrValue += standardData.flexibility.condition_3.ssr * standardData.flexibility.condition_3.percent
                ssrFound = true
            }
            if (convertedflexibilityValue.condition_3.includes(standardData.flexibility.condition_3.csr)) {
                csrValue += standardData.flexibility.condition_3.csr * standardData.flexibility.condition_3.percent
                csrFound = true
            }
            if (convertedflexibilityValue.condition_3.includes(standardData.flexibility.condition_3.both)) {
                bothValue += standardData.flexibility.condition_3.both * standardData.flexibility.condition_3.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.flexibility.condition_3.ssr) !== -1 && (convertedflexibilityValue.condition_3.includes(10))) {
                ssrValue += standardData.flexibility.condition_3.ssr * standardData.flexibility.condition_3.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.flexibility.condition_3.ssr) !== -1 && (convertedflexibilityValue.condition_3.includes(1))) {
                ssrValue += standardData.flexibility.condition_3.ssr * standardData.flexibility.condition_3.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedflexibilityValue.condition_3, [6, 7, 8, 9]) && standardData.flexibility.condition_3.ssr === 10) {
                ssrValue += standardData.flexibility.condition_3.ssr * standardData.flexibility.condition_3.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedflexibilityValue.condition_3, [2, 3, 4, 5]) && standardData.flexibility.condition_3.ssr === 1) {
                ssrValue += standardData.flexibility.condition_3.ssr * standardData.flexibility.condition_3.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.flexibility.condition_3.csr) !== -1 && (convertedflexibilityValue.condition_3.includes(10))) {
                csrValue += standardData.flexibility.condition_3.csr * standardData.flexibility.condition_3.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.flexibility.condition_3.csr) !== -1 && (convertedflexibilityValue.condition_3.includes(1))) {
                csrValue += standardData.flexibility.condition_3.csr * standardData.flexibility.condition_3.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedflexibilityValue.condition_3, [6, 7, 8, 9]) && standardData.flexibility.condition_3.csr === 10) {
                csrValue += standardData.flexibility.condition_3.csr * standardData.flexibility.condition_3.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedflexibilityValue.condition_3, [2, 3, 4, 5]) && standardData.flexibility.condition_3.csr === 1) {
                csrValue += standardData.flexibility.condition_3.csr * standardData.flexibility.condition_3.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.flexibility.condition_3.both) !== -1 && (convertedflexibilityValue.condition_3.includes(10))) {
                bothValue += standardData.flexibility.condition_3.both * standardData.flexibility.condition_3.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.flexibility.condition_3.both) !== -1 && (convertedflexibilityValue.condition_3.includes(1))) {
                bothValue += standardData.flexibility.condition_3.both * standardData.flexibility.condition_3.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedflexibilityValue.condition_3, [6, 7, 8, 9]) && standardData.flexibility.condition_3.both === 10) {
                bothValue += standardData.flexibility.condition_3.both * standardData.flexibility.condition_3.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedflexibilityValue.condition_3, [2, 3, 4, 5]) && standardData.flexibility.condition_3.both === 1) {
                bothValue += standardData.flexibility.condition_3.both * standardData.flexibility.condition_3.percent
                bothFound = true
            }

        } else if (convertedflexibilityValue.condition_4) {
            if (convertedflexibilityValue.condition_4.includes(standardData.flexibility.condition_4.ssr)) {
                ssrValue += standardData.flexibility.condition_4.ssr * standardData.flexibility.condition_4.percent
                ssrFound = true
            }
            if (convertedflexibilityValue.condition_4.includes(standardData.flexibility.condition_4.csr)) {
                csrValue += standardData.flexibility.condition_4.csr * standardData.flexibility.condition_4.percent
                csrFound = true
            }
            if (convertedflexibilityValue.condition_4.includes(standardData.flexibility.condition_4.both)) {
                bothValue += standardData.flexibility.condition_4.both * standardData.flexibility.condition_4.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.flexibility.condition_4.ssr) !== -1 && (convertedflexibilityValue.condition_4.includes(10))) {
                ssrValue += standardData.flexibility.condition_4.ssr * standardData.flexibility.condition_4.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.flexibility.condition_4.ssr) !== -1 && (convertedflexibilityValue.condition_4.includes(1))) {
                ssrValue += standardData.flexibility.condition_4.ssr * standardData.flexibility.condition_4.percent
                ssrFound = true
            }

            if (!csrFound && !bothFound && includesAll(convertedflexibilityValue.condition_4, [6, 7, 8, 9]) && standardData.flexibility.condition_4.ssr === 10) {
                ssrValue += standardData.flexibility.condition_4.ssr * standardData.flexibility.condition_4.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedflexibilityValue.condition_4, [2, 3, 4, 5]) && standardData.flexibility.condition_4.ssr === 1) {
                ssrValue += standardData.flexibility.condition_4.ssr * standardData.flexibility.condition_4.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.flexibility.condition_4.csr) !== -1 && (convertedflexibilityValue.condition_4.includes(10))) {
                csrValue += standardData.flexibility.condition_4.csr * standardData.flexibility.condition_4.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.flexibility.condition_4.csr) !== -1 && (convertedflexibilityValue.condition_4.includes(1))) {
                csrValue += standardData.flexibility.condition_4.csr * standardData.flexibility.condition_4.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedflexibilityValue.condition_4, [6, 7, 8, 9]) && standardData.flexibility.condition_4.csr === 10) {
                csrValue += standardData.flexibility.condition_4.csr * standardData.flexibility.condition_4.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedflexibilityValue.condition_4, [2, 3, 4, 5]) && standardData.flexibility.condition_4.csr === 1) {
                csrValue += standardData.flexibility.condition_4.csr * standardData.flexibility.condition_4.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.flexibility.condition_4.both) !== -1 && (convertedflexibilityValue.condition_4.includes(10))) {
                bothValue += standardData.flexibility.condition_4.both * standardData.flexibility.condition_4.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.flexibility.condition_4.both) !== -1 && (convertedflexibilityValue.condition_4.includes(1))) {
                bothValue += standardData.flexibility.condition_4.both * standardData.flexibility.condition_4.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedflexibilityValue.condition_4, [6, 7, 8, 9]) && standardData.flexibility.condition_4.both === 10) {
                bothValue += standardData.flexibility.condition_4.both * standardData.flexibility.condition_4.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedflexibilityValue.condition_4, [2, 3, 4, 5]) && standardData.flexibility.condition_4.both === 1) {
                bothValue += standardData.flexibility.condition_4.both * standardData.flexibility.condition_4.percent
                bothFound = true
            }

        }
    })

    convertedAvailValues.forEach(convertedavailabilityValue => {

        let ssrFound = false;
        let csrFound = false;
        let bothFound = false;
        if (convertedavailabilityValue.condition_1) {
            if (convertedavailabilityValue.condition_1.includes(standardData.availability.condition_1.ssr)) {
                ssrValue += standardData.availability.condition_1.ssr * standardData.availability.condition_1.percent
                ssrFound = true
            }
            if (convertedavailabilityValue.condition_1.includes(standardData.availability.condition_1.csr)) {
                csrValue += standardData.availability.condition_1.csr * standardData.availability.condition_1.percent
                csrFound = true
            }
            if (convertedavailabilityValue.condition_1.includes(standardData.availability.condition_1.both)) {
                bothValue += standardData.availability.condition_1.both * standardData.availability.condition_1.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.availability.condition_1.ssr) !== -1 && (convertedavailabilityValue.condition_1.includes(10))) {
                ssrValue += standardData.availability.condition_1.ssr * standardData.availability.condition_1.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.availability.condition_1.ssr) !== -1 && (convertedavailabilityValue.condition_1.includes(1))) {
                ssrValue += standardData.availability.condition_1.ssr * standardData.availability.condition_1.percent
                ssrFound = true
            }

            if (!csrFound && !bothFound && includesAll(convertedavailabilityValue.condition_1, [6, 7, 8, 9]) && standardData.availability.condition_1.ssr === 10) {
                ssrValue += standardData.availability.condition_1.ssr * standardData.availability.condition_1.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedavailabilityValue.condition_1, [2, 3, 4, 5]) && standardData.availability.condition_1.ssr === 1) {
                ssrValue += standardData.availability.condition_1.ssr * standardData.availability.condition_1.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.availability.condition_1.csr) !== -1 && (convertedavailabilityValue.condition_1.includes(10))) {
                csrValue += standardData.availability.condition_1.csr * standardData.availability.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.availability.condition_1.csr) !== -1 && (convertedavailabilityValue.condition_1.includes(1))) {
                csrValue += standardData.availability.condition_1.csr * standardData.availability.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedavailabilityValue.condition_1, [6, 7, 8, 9]) && standardData.availability.condition_1.csr === 10) {
                csrValue += standardData.availability.condition_1.csr * standardData.availability.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedavailabilityValue.condition_1, [2, 3, 4, 5]) && standardData.availability.condition_1.csr === 1) {
                csrValue += standardData.availability.condition_1.csr * standardData.availability.condition_1.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.availability.condition_1.both) !== -1 && (convertedavailabilityValue.condition_1.includes(10))) {
                bothValue += standardData.availability.condition_1.both * standardData.availability.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.availability.condition_1.both) !== -1 && (convertedavailabilityValue.condition_1.includes(1))) {
                bothValue += standardData.availability.condition_1.both * standardData.availability.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedavailabilityValue.condition_1, [6, 7, 8, 9]) && standardData.availability.condition_1.both === 10) {
                bothValue += standardData.availability.condition_1.both * standardData.availability.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedavailabilityValue.condition_1, [2, 3, 4, 5]) && standardData.availability.condition_1.both === 1) {
                bothValue += standardData.availability.condition_1.both * standardData.availability.condition_1.percent
                bothFound = true
            }
        } else if (convertedavailabilityValue.condition_2) {
            if (convertedavailabilityValue.condition_2.includes(standardData.availability.condition_2.ssr)) {
                ssrValue += standardData.availability.condition_2.ssr * standardData.availability.condition_2.percent
                ssrFound = true
            }
            if (convertedavailabilityValue.condition_2.includes(standardData.availability.condition_2.csr)) {
                csrValue += standardData.availability.condition_2.csr * standardData.availability.condition_2.percent
                csrFound = true
            }
            if (convertedavailabilityValue.condition_2.includes(standardData.availability.condition_2.both)) {
                bothValue += standardData.availability.condition_2.both * standardData.availability.condition_2.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.availability.condition_2.ssr) !== -1 && (convertedavailabilityValue.condition_2.includes(10))) {
                ssrValue += standardData.availability.condition_2.ssr * standardData.availability.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.availability.condition_2.ssr) !== -1 && (convertedavailabilityValue.condition_2.includes(1))) {
                ssrValue += standardData.availability.condition_2.ssr * standardData.availability.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedavailabilityValue.condition_2, [6, 7, 8, 9]) && standardData.availability.condition_2.ssr === 10) {
                ssrValue += standardData.availability.condition_2.ssr * standardData.availability.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedavailabilityValue.condition_2, [2, 3, 4, 5]) && standardData.availability.condition_2.ssr === 1) {
                ssrValue += standardData.availability.condition_2.ssr * standardData.availability.condition_2.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.availability.condition_2.csr) !== -1 && (convertedavailabilityValue.condition_2.includes(10))) {
                csrValue += standardData.availability.condition_2.csr * standardData.availability.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.availability.condition_2.csr) !== -1 && (convertedavailabilityValue.condition_2.includes(1))) {
                csrValue += standardData.availability.condition_2.csr * standardData.availability.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedavailabilityValue.condition_2, [6, 7, 8, 9]) && standardData.availability.condition_2.csr === 10) {
                csrValue += standardData.availability.condition_2.csr * standardData.availability.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedavailabilityValue.condition_2, [2, 3, 4, 5]) && standardData.availability.condition_2.csr === 1) {
                csrValue += standardData.availability.condition_2.csr * standardData.availability.condition_2.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.availability.condition_2.both) !== -1 && (convertedavailabilityValue.condition_2.includes(10))) {
                bothValue += standardData.availability.condition_2.both * standardData.availability.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.availability.condition_2.both) !== -1 && (convertedavailabilityValue.condition_2.includes(1))) {
                bothValue += standardData.availability.condition_2.both * standardData.availability.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedavailabilityValue.condition_2, [6, 7, 8, 9]) && standardData.availability.condition_2.both === 10) {
                bothValue += standardData.availability.condition_2.both * standardData.availability.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedavailabilityValue.condition_2, [2, 3, 4, 5]) && standardData.availability.condition_2.both === 1) {
                bothValue += standardData.availability.condition_2.both * standardData.availability.condition_2.percent
                bothFound = true
            }

        } else if (convertedavailabilityValue.condition_3) {
            if (convertedavailabilityValue.condition_3.includes(standardData.availability.condition_3.ssr)) {
                ssrValue += standardData.availability.condition_3.ssr * standardData.availability.condition_3.percent
                ssrFound = true
            }
            if (convertedavailabilityValue.condition_3.includes(standardData.availability.condition_3.csr)) {
                csrValue += standardData.availability.condition_3.csr * standardData.availability.condition_3.percent
                csrFound = true
            }
            if (convertedavailabilityValue.condition_3.includes(standardData.availability.condition_3.both)) {
                bothValue += standardData.availability.condition_3.both * standardData.availability.condition_3.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.availability.condition_3.ssr) !== -1 && (convertedavailabilityValue.condition_3.includes(10))) {
                ssrValue += standardData.availability.condition_3.ssr * standardData.availability.condition_3.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.availability.condition_3.ssr) !== -1 && (convertedavailabilityValue.condition_3.includes(1))) {
                ssrValue += standardData.availability.condition_3.ssr * standardData.availability.condition_3.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedavailabilityValue.condition_3, [6, 7, 8, 9]) && standardData.availability.condition_3.ssr === 10) {
                ssrValue += standardData.availability.condition_3.ssr * standardData.availability.condition_3.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedavailabilityValue.condition_3, [2, 3, 4, 5]) && standardData.availability.condition_3.ssr === 1) {
                ssrValue += standardData.availability.condition_3.ssr * standardData.availability.condition_3.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.availability.condition_3.csr) !== -1 && (convertedavailabilityValue.condition_3.includes(10))) {
                csrValue += standardData.availability.condition_3.csr * standardData.availability.condition_3.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.availability.condition_3.csr) !== -1 && (convertedavailabilityValue.condition_3.includes(1))) {
                csrValue += standardData.availability.condition_3.csr * standardData.availability.condition_3.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedavailabilityValue.condition_3, [6, 7, 8, 9]) && standardData.availability.condition_3.csr === 10) {
                csrValue += standardData.availability.condition_3.csr * standardData.availability.condition_3.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedavailabilityValue.condition_3, [2, 3, 4, 5]) && standardData.availability.condition_3.csr === 1) {
                csrValue += standardData.availability.condition_3.csr * standardData.availability.condition_3.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.availability.condition_3.both) !== -1 && (convertedavailabilityValue.condition_3.includes(10))) {
                bothValue += standardData.availability.condition_3.both * standardData.availability.condition_3.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.availability.condition_3.both) !== -1 && (convertedavailabilityValue.condition_3.includes(1))) {
                bothValue += standardData.availability.condition_3.both * standardData.availability.condition_3.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedavailabilityValue.condition_3, [6, 7, 8, 9]) && standardData.availability.condition_3.both === 10) {
                bothValue += standardData.availability.condition_3.both * standardData.availability.condition_3.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedavailabilityValue.condition_3, [2, 3, 4, 5]) && standardData.availability.condition_3.both === 1) {
                bothValue += standardData.availability.condition_3.both * standardData.availability.condition_3.percent
                bothFound = true
            }

        } else if (convertedavailabilityValue.condition_4) {
            if (convertedavailabilityValue.condition_4.includes(standardData.availability.condition_4.ssr)) {
                ssrValue += standardData.availability.condition_4.ssr * standardData.availability.condition_4.percent
                ssrFound = true
            }
            if (convertedavailabilityValue.condition_4.includes(standardData.availability.condition_4.csr)) {
                csrValue += standardData.availability.condition_4.csr * standardData.availability.condition_4.percent
                csrFound = true
            }
            if (convertedavailabilityValue.condition_4.includes(standardData.availability.condition_4.both)) {
                bothValue += standardData.availability.condition_4.both * standardData.availability.condition_4.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.availability.condition_4.ssr) !== -1 && (convertedavailabilityValue.condition_4.includes(10))) {
                ssrValue += standardData.availability.condition_4.ssr * standardData.availability.condition_4.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.availability.condition_4.ssr) !== -1 && (convertedavailabilityValue.condition_4.includes(1))) {
                ssrValue += standardData.availability.condition_4.ssr * standardData.availability.condition_4.percent
                ssrFound = true
            }

            if (!csrFound && !bothFound && includesAll(convertedavailabilityValue.condition_4, [6, 7, 8, 9]) && standardData.availability.condition_4.ssr === 10) {
                ssrValue += standardData.availability.condition_4.ssr * standardData.availability.condition_4.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedavailabilityValue.condition_4, [2, 3, 4, 5]) && standardData.availability.condition_4.ssr === 1) {
                ssrValue += standardData.availability.condition_4.ssr * standardData.availability.condition_4.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.availability.condition_4.csr) !== -1 && (convertedavailabilityValue.condition_4.includes(10))) {
                csrValue += standardData.availability.condition_4.csr * standardData.availability.condition_4.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.availability.condition_4.csr) !== -1 && (convertedavailabilityValue.condition_4.includes(1))) {
                csrValue += standardData.availability.condition_4.csr * standardData.availability.condition_4.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedavailabilityValue.condition_4, [6, 7, 8, 9]) && standardData.availability.condition_4.csr === 10) {
                csrValue += standardData.availability.condition_4.csr * standardData.availability.condition_4.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedavailabilityValue.condition_4, [2, 3, 4, 5]) && standardData.availability.condition_4.csr === 1) {
                csrValue += standardData.availability.condition_4.csr * standardData.availability.condition_4.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.availability.condition_4.both) !== -1 && (convertedavailabilityValue.condition_4.includes(10))) {
                bothValue += standardData.availability.condition_4.both * standardData.availability.condition_4.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.availability.condition_4.both) !== -1 && (convertedavailabilityValue.condition_4.includes(1))) {
                bothValue += standardData.availability.condition_4.both * standardData.availability.condition_4.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedavailabilityValue.condition_4, [6, 7, 8, 9]) && standardData.availability.condition_4.both === 10) {
                bothValue += standardData.availability.condition_4.both * standardData.availability.condition_4.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedavailabilityValue.condition_4, [2, 3, 4, 5]) && standardData.availability.condition_4.both === 1) {
                bothValue += standardData.availability.condition_4.both * standardData.availability.condition_4.percent
                bothFound = true
            }
        }
    })


    convertedReliableValues.forEach(convertedreliabilityValue => {

        let ssrFound = false;
        let csrFound = false;
        let bothFound = false;
        if (convertedreliabilityValue.condition_1) {
            if (convertedreliabilityValue.condition_1.includes(standardData.reliability.condition_1.ssr)) {
                ssrValue += standardData.reliability.condition_1.ssr * standardData.reliability.condition_1.percent
                ssrFound = true
            }
            if (convertedreliabilityValue.condition_1.includes(standardData.reliability.condition_1.csr)) {
                csrValue += standardData.reliability.condition_1.csr * standardData.reliability.condition_1.percent
                csrFound = true
            }
            if (convertedreliabilityValue.condition_1.includes(standardData.reliability.condition_1.both)) {
                bothValue += standardData.reliability.condition_1.both * standardData.reliability.condition_1.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.reliability.condition_1.ssr) !== -1 && (convertedreliabilityValue.condition_1.includes(10))) {
                ssrValue += standardData.reliability.condition_1.ssr * standardData.reliability.condition_1.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.reliability.condition_1.ssr) !== -1 && (convertedreliabilityValue.condition_1.includes(1))) {
                ssrValue += standardData.reliability.condition_1.ssr * standardData.reliability.condition_1.percent
                ssrFound = true
            }

            if (!csrFound && !bothFound && includesAll(convertedreliabilityValue.condition_1, [6, 7, 8, 9]) && standardData.reliability.condition_1.ssr === 10) {
                ssrValue += standardData.reliability.condition_1.ssr * standardData.reliability.condition_1.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedreliabilityValue.condition_1, [2, 3, 4, 5]) && standardData.reliability.condition_1.ssr === 1) {
                ssrValue += standardData.reliability.condition_1.ssr * standardData.reliability.condition_1.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.reliability.condition_1.csr) !== -1 && (convertedreliabilityValue.condition_1.includes(10))) {
                csrValue += standardData.reliability.condition_1.csr * standardData.reliability.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.reliability.condition_1.csr) !== -1 && (convertedreliabilityValue.condition_1.includes(1))) {
                csrValue += standardData.reliability.condition_1.csr * standardData.reliability.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedreliabilityValue.condition_1, [6, 7, 8, 9]) && standardData.reliability.condition_1.csr === 10) {
                csrValue += standardData.reliability.condition_1.csr * standardData.reliability.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedreliabilityValue.condition_1, [2, 3, 4, 5]) && standardData.reliability.condition_1.csr === 1) {
                csrValue += standardData.reliability.condition_1.csr * standardData.reliability.condition_1.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.reliability.condition_1.both) !== -1 && (convertedreliabilityValue.condition_1.includes(10))) {
                bothValue += standardData.reliability.condition_1.both * standardData.reliability.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.reliability.condition_1.both) !== -1 && (convertedreliabilityValue.condition_1.includes(1))) {
                bothValue += standardData.reliability.condition_1.both * standardData.reliability.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedreliabilityValue.condition_1, [6, 7, 8, 9]) && standardData.reliability.condition_1.both === 10) {
                bothValue += standardData.reliability.condition_1.both * standardData.reliability.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedreliabilityValue.condition_1, [2, 3, 4, 5]) && standardData.reliability.condition_1.both === 1) {
                bothValue += standardData.reliability.condition_1.both * standardData.reliability.condition_1.percent
                bothFound = true
            }
        } else if (convertedreliabilityValue.condition_2) {
            if (convertedreliabilityValue.condition_2.includes(standardData.reliability.condition_2.ssr)) {
                ssrValue += standardData.reliability.condition_2.ssr * standardData.reliability.condition_2.percent
                ssrFound = true
            }
            if (convertedreliabilityValue.condition_2.includes(standardData.reliability.condition_2.csr)) {
                csrValue += standardData.reliability.condition_2.csr * standardData.reliability.condition_2.percent
                csrFound = true
            }
            if (convertedreliabilityValue.condition_2.includes(standardData.reliability.condition_2.both)) {
                bothValue += standardData.reliability.condition_2.both * standardData.reliability.condition_2.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.reliability.condition_2.ssr) !== -1 && (convertedreliabilityValue.condition_2.includes(10))) {
                ssrValue += standardData.reliability.condition_2.ssr * standardData.reliability.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.reliability.condition_2.ssr) !== -1 && (convertedreliabilityValue.condition_2.includes(1))) {
                ssrValue += standardData.reliability.condition_2.ssr * standardData.reliability.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedreliabilityValue.condition_2, [6, 7, 8, 9]) && standardData.reliability.condition_2.ssr === 10) {
                ssrValue += standardData.reliability.condition_2.ssr * standardData.reliability.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedreliabilityValue.condition_2, [2, 3, 4, 5]) && standardData.reliability.condition_2.ssr === 1) {
                ssrValue += standardData.reliability.condition_2.ssr * standardData.reliability.condition_2.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.reliability.condition_2.csr) !== -1 && (convertedreliabilityValue.condition_2.includes(10))) {
                csrValue += standardData.reliability.condition_2.csr * standardData.reliability.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.reliability.condition_2.csr) !== -1 && (convertedreliabilityValue.condition_2.includes(1))) {
                csrValue += standardData.reliability.condition_2.csr * standardData.reliability.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedreliabilityValue.condition_2, [6, 7, 8, 9]) && standardData.reliability.condition_2.csr === 10) {
                csrValue += standardData.reliability.condition_2.csr * standardData.reliability.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedreliabilityValue.condition_2, [2, 3, 4, 5]) && standardData.reliability.condition_2.csr === 1) {
                csrValue += standardData.reliability.condition_2.csr * standardData.reliability.condition_2.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.reliability.condition_2.both) !== -1 && (convertedreliabilityValue.condition_2.includes(10))) {
                bothValue += standardData.reliability.condition_2.both * standardData.reliability.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.reliability.condition_2.both) !== -1 && (convertedreliabilityValue.condition_2.includes(1))) {
                bothValue += standardData.reliability.condition_2.both * standardData.reliability.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedreliabilityValue.condition_2, [6, 7, 8, 9]) && standardData.reliability.condition_2.both === 10) {
                bothValue += standardData.reliability.condition_2.both * standardData.reliability.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedreliabilityValue.condition_2, [2, 3, 4, 5]) && standardData.reliability.condition_2.both === 1) {
                bothValue += standardData.reliability.condition_2.both * standardData.reliability.condition_2.percent
                bothFound = true
            }

        }
    })


    convertedSecurityValues.forEach(convertedsecurityValue => {

        let ssrFound = false;
        let csrFound = false;
        let bothFound = false;
        if (convertedsecurityValue.condition_1) {
            if (convertedsecurityValue.condition_1.includes(standardData.security.condition_1.ssr)) {
                ssrValue += standardData.security.condition_1.ssr * standardData.security.condition_1.percent
                ssrFound = true
            }
            if (convertedsecurityValue.condition_1.includes(standardData.security.condition_1.csr)) {
                csrValue += standardData.security.condition_1.csr * standardData.security.condition_1.percent
                csrFound = true
            }
            if (convertedsecurityValue.condition_1.includes(standardData.security.condition_1.both)) {
                bothValue += standardData.security.condition_1.both * standardData.security.condition_1.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.security.condition_1.ssr) !== -1 && (convertedsecurityValue.condition_1.includes(10))) {
                ssrValue += standardData.security.condition_1.ssr * standardData.security.condition_1.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.security.condition_1.ssr) !== -1 && (convertedsecurityValue.condition_1.includes(1))) {
                ssrValue += standardData.security.condition_1.ssr * standardData.security.condition_1.percent
                ssrFound = true
            }

            if (!csrFound && !bothFound && includesAll(convertedsecurityValue.condition_1, [6, 7, 8, 9]) && standardData.security.condition_1.ssr === 10) {
                ssrValue += standardData.security.condition_1.ssr * standardData.security.condition_1.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedsecurityValue.condition_1, [2, 3, 4, 5]) && standardData.security.condition_1.ssr === 1) {
                ssrValue += standardData.security.condition_1.ssr * standardData.security.condition_1.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.security.condition_1.csr) !== -1 && (convertedsecurityValue.condition_1.includes(10))) {
                csrValue += standardData.security.condition_1.csr * standardData.security.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.security.condition_1.csr) !== -1 && (convertedsecurityValue.condition_1.includes(1))) {
                csrValue += standardData.security.condition_1.csr * standardData.security.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedsecurityValue.condition_1, [6, 7, 8, 9]) && standardData.security.condition_1.csr === 10) {
                csrValue += standardData.security.condition_1.csr * standardData.security.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedsecurityValue.condition_1, [2, 3, 4, 5]) && standardData.security.condition_1.csr === 1) {
                csrValue += standardData.security.condition_1.csr * standardData.security.condition_1.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.security.condition_1.both) !== -1 && (convertedsecurityValue.condition_1.includes(10))) {
                bothValue += standardData.security.condition_1.both * standardData.security.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.security.condition_1.both) !== -1 && (convertedsecurityValue.condition_1.includes(1))) {
                bothValue += standardData.security.condition_1.both * standardData.security.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedsecurityValue.condition_1, [6, 7, 8, 9]) && standardData.security.condition_1.both === 10) {
                bothValue += standardData.security.condition_1.both * standardData.security.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedsecurityValue.condition_1, [2, 3, 4, 5]) && standardData.security.condition_1.both === 1) {
                bothValue += standardData.security.condition_1.both * standardData.security.condition_1.percent
                bothFound = true
            }
        } else if (convertedsecurityValue.condition_2) {
            if (convertedsecurityValue.condition_2.includes(standardData.security.condition_2.ssr)) {
                ssrValue += standardData.security.condition_2.ssr * standardData.security.condition_2.percent
                ssrFound = true
            }
            if (convertedsecurityValue.condition_2.includes(standardData.security.condition_2.csr)) {
                csrValue += standardData.security.condition_2.csr * standardData.security.condition_2.percent
                csrFound = true
            }
            if (convertedsecurityValue.condition_2.includes(standardData.security.condition_2.both)) {
                bothValue += standardData.security.condition_2.both * standardData.security.condition_2.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.security.condition_2.ssr) !== -1 && (convertedsecurityValue.condition_2.includes(10))) {
                ssrValue += standardData.security.condition_2.ssr * standardData.security.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.security.condition_2.ssr) !== -1 && (convertedsecurityValue.condition_2.includes(1))) {
                ssrValue += standardData.security.condition_2.ssr * standardData.security.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedsecurityValue.condition_2, [6, 7, 8, 9]) && standardData.security.condition_2.ssr === 10) {
                ssrValue += standardData.security.condition_2.ssr * standardData.security.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedsecurityValue.condition_2, [2, 3, 4, 5]) && standardData.security.condition_2.ssr === 1) {
                ssrValue += standardData.security.condition_2.ssr * standardData.security.condition_2.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.security.condition_2.csr) !== -1 && (convertedsecurityValue.condition_2.includes(10))) {
                csrValue += standardData.security.condition_2.csr * standardData.security.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.security.condition_2.csr) !== -1 && (convertedsecurityValue.condition_2.includes(1))) {
                csrValue += standardData.security.condition_2.csr * standardData.security.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedsecurityValue.condition_2, [6, 7, 8, 9]) && standardData.security.condition_2.csr === 10) {
                csrValue += standardData.security.condition_2.csr * standardData.security.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedsecurityValue.condition_2, [2, 3, 4, 5]) && standardData.security.condition_2.csr === 1) {
                csrValue += standardData.security.condition_2.csr * standardData.security.condition_2.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.security.condition_2.both) !== -1 && (convertedsecurityValue.condition_2.includes(10))) {
                bothValue += standardData.security.condition_2.both * standardData.security.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.security.condition_2.both) !== -1 && (convertedsecurityValue.condition_2.includes(1))) {
                bothValue += standardData.security.condition_2.both * standardData.security.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedsecurityValue.condition_2, [6, 7, 8, 9]) && standardData.security.condition_2.both === 10) {
                bothValue += standardData.security.condition_2.both * standardData.security.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedsecurityValue.condition_2, [2, 3, 4, 5]) && standardData.security.condition_2.both === 1) {
                bothValue += standardData.security.condition_2.both * standardData.security.condition_2.percent
                bothFound = true
            }

        } else if (convertedsecurityValue.condition_3) {
            if (convertedsecurityValue.condition_3.includes(standardData.security.condition_3.ssr)) {
                ssrValue += standardData.security.condition_3.ssr * standardData.security.condition_3.percent
                ssrFound = true
            }
            if (convertedsecurityValue.condition_3.includes(standardData.security.condition_3.csr)) {
                csrValue += standardData.security.condition_3.csr * standardData.security.condition_3.percent
                csrFound = true
            }
            if (convertedsecurityValue.condition_3.includes(standardData.security.condition_3.both)) {
                bothValue += standardData.security.condition_3.both * standardData.security.condition_3.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.security.condition_3.ssr) !== -1 && (convertedsecurityValue.condition_3.includes(10))) {
                ssrValue += standardData.security.condition_3.ssr * standardData.security.condition_3.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.security.condition_3.ssr) !== -1 && (convertedsecurityValue.condition_3.includes(1))) {
                ssrValue += standardData.security.condition_3.ssr * standardData.security.condition_3.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedsecurityValue.condition_3, [6, 7, 8, 9]) && standardData.security.condition_3.ssr === 10) {
                ssrValue += standardData.security.condition_3.ssr * standardData.security.condition_3.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedsecurityValue.condition_3, [2, 3, 4, 5]) && standardData.security.condition_3.ssr === 1) {
                ssrValue += standardData.security.condition_3.ssr * standardData.security.condition_3.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.security.condition_3.csr) !== -1 && (convertedsecurityValue.condition_3.includes(10))) {
                csrValue += standardData.security.condition_3.csr * standardData.security.condition_3.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.security.condition_3.csr) !== -1 && (convertedsecurityValue.condition_3.includes(1))) {
                csrValue += standardData.security.condition_3.csr * standardData.security.condition_3.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedsecurityValue.condition_3, [6, 7, 8, 9]) && standardData.security.condition_3.csr === 10) {
                csrValue += standardData.security.condition_3.csr * standardData.security.condition_3.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedsecurityValue.condition_3, [2, 3, 4, 5]) && standardData.security.condition_3.csr === 1) {
                csrValue += standardData.security.condition_3.csr * standardData.security.condition_3.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.security.condition_3.both) !== -1 && (convertedsecurityValue.condition_3.includes(10))) {
                bothValue += standardData.security.condition_3.both * standardData.security.condition_3.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.security.condition_3.both) !== -1 && (convertedsecurityValue.condition_3.includes(1))) {
                bothValue += standardData.security.condition_3.both * standardData.security.condition_3.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedsecurityValue.condition_3, [6, 7, 8, 9]) && standardData.security.condition_3.both === 10) {
                bothValue += standardData.security.condition_3.both * standardData.security.condition_3.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedsecurityValue.condition_3, [2, 3, 4, 5]) && standardData.security.condition_3.both === 1) {
                bothValue += standardData.security.condition_3.both * standardData.security.condition_3.percent
                bothFound = true
            }

        }
    })


    convertedExtendValues.forEach(convertedextendValue => {

        let ssrFound = false;
        let csrFound = false;
        let bothFound = false;
        if (convertedextendValue.condition_1) {
            if (convertedextendValue.condition_1.includes(standardData.extend.condition_1.ssr)) {
                ssrValue += standardData.extend.condition_1.ssr * standardData.extend.condition_1.percent
                ssrFound = true
            }
            if (convertedextendValue.condition_1.includes(standardData.extend.condition_1.csr)) {
                csrValue += standardData.extend.condition_1.csr * standardData.extend.condition_1.percent
                csrFound = true
            }
            if (convertedextendValue.condition_1.includes(standardData.extend.condition_1.both)) {
                bothValue += standardData.extend.condition_1.both * standardData.extend.condition_1.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.extend.condition_1.ssr) !== -1 && (convertedextendValue.condition_1.includes(10))) {
                ssrValue += standardData.extend.condition_1.ssr * standardData.extend.condition_1.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.extend.condition_1.ssr) !== -1 && (convertedextendValue.condition_1.includes(1))) {
                ssrValue += standardData.extend.condition_1.ssr * standardData.extend.condition_1.percent
                ssrFound = true
            }

            if (!csrFound && !bothFound && includesAll(convertedextendValue.condition_1, [6, 7, 8, 9]) && standardData.extend.condition_1.ssr === 10) {
                ssrValue += standardData.extend.condition_1.ssr * standardData.extend.condition_1.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedextendValue.condition_1, [2, 3, 4, 5]) && standardData.extend.condition_1.ssr === 1) {
                ssrValue += standardData.extend.condition_1.ssr * standardData.extend.condition_1.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.extend.condition_1.csr) !== -1 && (convertedextendValue.condition_1.includes(10))) {
                csrValue += standardData.extend.condition_1.csr * standardData.extend.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.extend.condition_1.csr) !== -1 && (convertedextendValue.condition_1.includes(1))) {
                csrValue += standardData.extend.condition_1.csr * standardData.extend.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedextendValue.condition_1, [6, 7, 8, 9]) && standardData.extend.condition_1.csr === 10) {
                csrValue += standardData.extend.condition_1.csr * standardData.extend.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedextendValue.condition_1, [2, 3, 4, 5]) && standardData.extend.condition_1.csr === 1) {
                csrValue += standardData.extend.condition_1.csr * standardData.extend.condition_1.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.extend.condition_1.both) !== -1 && (convertedextendValue.condition_1.includes(10))) {
                bothValue += standardData.extend.condition_1.both * standardData.extend.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.extend.condition_1.both) !== -1 && (convertedextendValue.condition_1.includes(1))) {
                bothValue += standardData.extend.condition_1.both * standardData.extend.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedextendValue.condition_1, [6, 7, 8, 9]) && standardData.extend.condition_1.both === 10) {
                bothValue += standardData.extend.condition_1.both * standardData.extend.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedextendValue.condition_1, [2, 3, 4, 5]) && standardData.extend.condition_1.both === 1) {
                bothValue += standardData.extend.condition_1.both * standardData.extend.condition_1.percent
                bothFound = true
            }
        } else if (convertedextendValue.condition_2) {
            if (convertedextendValue.condition_2.includes(standardData.extend.condition_2.ssr)) {
                ssrValue += standardData.extend.condition_2.ssr * standardData.extend.condition_2.percent
                ssrFound = true
            }
            if (convertedextendValue.condition_2.includes(standardData.extend.condition_2.csr)) {
                csrValue += standardData.extend.condition_2.csr * standardData.extend.condition_2.percent
                csrFound = true
            }
            if (convertedextendValue.condition_2.includes(standardData.extend.condition_2.both)) {
                bothValue += standardData.extend.condition_2.both * standardData.extend.condition_2.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.extend.condition_2.ssr) !== -1 && (convertedextendValue.condition_2.includes(10))) {
                ssrValue += standardData.extend.condition_2.ssr * standardData.extend.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.extend.condition_2.ssr) !== -1 && (convertedextendValue.condition_2.includes(1))) {
                ssrValue += standardData.extend.condition_2.ssr * standardData.extend.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedextendValue.condition_2, [6, 7, 8, 9]) && standardData.extend.condition_2.ssr === 10) {
                ssrValue += standardData.extend.condition_2.ssr * standardData.extend.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedextendValue.condition_2, [2, 3, 4, 5]) && standardData.extend.condition_2.ssr === 1) {
                ssrValue += standardData.extend.condition_2.ssr * standardData.extend.condition_2.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.extend.condition_2.csr) !== -1 && (convertedextendValue.condition_2.includes(10))) {
                csrValue += standardData.extend.condition_2.csr * standardData.extend.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.extend.condition_2.csr) !== -1 && (convertedextendValue.condition_2.includes(1))) {
                csrValue += standardData.extend.condition_2.csr * standardData.extend.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedextendValue.condition_2, [6, 7, 8, 9]) && standardData.extend.condition_2.csr === 10) {
                csrValue += standardData.extend.condition_2.csr * standardData.extend.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedextendValue.condition_2, [2, 3, 4, 5]) && standardData.extend.condition_2.csr === 1) {
                csrValue += standardData.extend.condition_2.csr * standardData.extend.condition_2.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.extend.condition_2.both) !== -1 && (convertedextendValue.condition_2.includes(10))) {
                bothValue += standardData.extend.condition_2.both * standardData.extend.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.extend.condition_2.both) !== -1 && (convertedextendValue.condition_2.includes(1))) {
                bothValue += standardData.extend.condition_2.both * standardData.extend.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedextendValue.condition_2, [6, 7, 8, 9]) && standardData.extend.condition_2.both === 10) {
                bothValue += standardData.extend.condition_2.both * standardData.extend.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedextendValue.condition_2, [2, 3, 4, 5]) && standardData.extend.condition_2.both === 1) {
                bothValue += standardData.extend.condition_2.both * standardData.extend.condition_2.percent
                bothFound = true
            }

        }
    })


    convertedResourceValues.forEach(convertedresourceValue => {

        let ssrFound = false;
        let csrFound = false;
        let bothFound = false;
        if (convertedresourceValue.condition_1) {
            if (convertedresourceValue.condition_1.includes(standardData.resource.condition_1.ssr)) {
                ssrValue += standardData.resource.condition_1.ssr * standardData.resource.condition_1.percent
                ssrFound = true
            }
            if (convertedresourceValue.condition_1.includes(standardData.resource.condition_1.csr)) {
                csrValue += standardData.resource.condition_1.csr * standardData.resource.condition_1.percent
                csrFound = true
            }
            if (convertedresourceValue.condition_1.includes(standardData.resource.condition_1.both)) {
                bothValue += standardData.resource.condition_1.both * standardData.resource.condition_1.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.resource.condition_1.ssr) !== -1 && (convertedresourceValue.condition_1.includes(10))) {
                ssrValue += standardData.resource.condition_1.ssr * standardData.resource.condition_1.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.resource.condition_1.ssr) !== -1 && (convertedresourceValue.condition_1.includes(1))) {
                ssrValue += standardData.resource.condition_1.ssr * standardData.resource.condition_1.percent
                ssrFound = true
            }

            if (!csrFound && !bothFound && includesAll(convertedresourceValue.condition_1, [6, 7, 8, 9]) && standardData.resource.condition_1.ssr === 10) {
                ssrValue += standardData.resource.condition_1.ssr * standardData.resource.condition_1.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedresourceValue.condition_1, [2, 3, 4, 5]) && standardData.resource.condition_1.ssr === 1) {
                ssrValue += standardData.resource.condition_1.ssr * standardData.resource.condition_1.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.resource.condition_1.csr) !== -1 && (convertedresourceValue.condition_1.includes(10))) {
                csrValue += standardData.resource.condition_1.csr * standardData.resource.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.resource.condition_1.csr) !== -1 && (convertedresourceValue.condition_1.includes(1))) {
                csrValue += standardData.resource.condition_1.csr * standardData.resource.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedresourceValue.condition_1, [6, 7, 8, 9]) && standardData.resource.condition_1.csr === 10) {
                csrValue += standardData.resource.condition_1.csr * standardData.resource.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedresourceValue.condition_1, [2, 3, 4, 5]) && standardData.resource.condition_1.csr === 1) {
                csrValue += standardData.resource.condition_1.csr * standardData.resource.condition_1.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.resource.condition_1.both) !== -1 && (convertedresourceValue.condition_1.includes(10))) {
                bothValue += standardData.resource.condition_1.both * standardData.resource.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.resource.condition_1.both) !== -1 && (convertedresourceValue.condition_1.includes(1))) {
                bothValue += standardData.resource.condition_1.both * standardData.resource.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedresourceValue.condition_1, [6, 7, 8, 9]) && standardData.resource.condition_1.both === 10) {
                bothValue += standardData.resource.condition_1.both * standardData.resource.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedresourceValue.condition_1, [2, 3, 4, 5]) && standardData.resource.condition_1.both === 1) {
                bothValue += standardData.resource.condition_1.both * standardData.resource.condition_1.percent
                bothFound = true
            }
        } else if (convertedresourceValue.condition_2) {
            if (convertedresourceValue.condition_2.includes(standardData.resource.condition_2.ssr)) {
                ssrValue += standardData.resource.condition_2.ssr * standardData.resource.condition_2.percent
                ssrFound = true
            }
            if (convertedresourceValue.condition_2.includes(standardData.resource.condition_2.csr)) {
                csrValue += standardData.resource.condition_2.csr * standardData.resource.condition_2.percent
                csrFound = true
            }
            if (convertedresourceValue.condition_2.includes(standardData.resource.condition_2.both)) {
                bothValue += standardData.resource.condition_2.both * standardData.resource.condition_2.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.resource.condition_2.ssr) !== -1 && (convertedresourceValue.condition_2.includes(10))) {
                ssrValue += standardData.resource.condition_2.ssr * standardData.resource.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.resource.condition_2.ssr) !== -1 && (convertedresourceValue.condition_2.includes(1))) {
                ssrValue += standardData.resource.condition_2.ssr * standardData.resource.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedresourceValue.condition_2, [6, 7, 8, 9]) && standardData.resource.condition_2.ssr === 10) {
                ssrValue += standardData.resource.condition_2.ssr * standardData.resource.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedresourceValue.condition_2, [2, 3, 4, 5]) && standardData.resource.condition_2.ssr === 1) {
                ssrValue += standardData.resource.condition_2.ssr * standardData.resource.condition_2.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.resource.condition_2.csr) !== -1 && (convertedresourceValue.condition_2.includes(10))) {
                csrValue += standardData.resource.condition_2.csr * standardData.resource.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.resource.condition_2.csr) !== -1 && (convertedresourceValue.condition_2.includes(1))) {
                csrValue += standardData.resource.condition_2.csr * standardData.resource.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedresourceValue.condition_2, [6, 7, 8, 9]) && standardData.resource.condition_2.csr === 10) {
                csrValue += standardData.resource.condition_2.csr * standardData.resource.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedresourceValue.condition_2, [2, 3, 4, 5]) && standardData.resource.condition_2.csr === 1) {
                csrValue += standardData.resource.condition_2.csr * standardData.resource.condition_2.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.resource.condition_2.both) !== -1 && (convertedresourceValue.condition_2.includes(10))) {
                bothValue += standardData.resource.condition_2.both * standardData.resource.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.resource.condition_2.both) !== -1 && (convertedresourceValue.condition_2.includes(1))) {
                bothValue += standardData.resource.condition_2.both * standardData.resource.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedresourceValue.condition_2, [6, 7, 8, 9]) && standardData.resource.condition_2.both === 10) {
                bothValue += standardData.resource.condition_2.both * standardData.resource.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedresourceValue.condition_2, [2, 3, 4, 5]) && standardData.resource.condition_2.both === 1) {
                bothValue += standardData.resource.condition_2.both * standardData.resource.condition_2.percent
                bothFound = true
            }

        }
    })


    convertedCustomerReqValues.forEach(convertedcustomer_reqValue => {

        let ssrFound = false;
        let csrFound = false;
        let bothFound = false;
        if (convertedcustomer_reqValue.condition_1) {
            if (convertedcustomer_reqValue.condition_1.includes(standardData.customer_req.condition_1.ssr)) {
                ssrValue += standardData.customer_req.condition_1.ssr * standardData.customer_req.condition_1.percent
                ssrFound = true
            }
            if (convertedcustomer_reqValue.condition_1.includes(standardData.customer_req.condition_1.csr)) {
                csrValue += standardData.customer_req.condition_1.csr * standardData.customer_req.condition_1.percent
                csrFound = true
            }
            if (convertedcustomer_reqValue.condition_1.includes(standardData.customer_req.condition_1.both)) {
                bothValue += standardData.customer_req.condition_1.both * standardData.customer_req.condition_1.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.customer_req.condition_1.ssr) !== -1 && (convertedcustomer_reqValue.condition_1.includes(10))) {
                ssrValue += standardData.customer_req.condition_1.ssr * standardData.customer_req.condition_1.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.customer_req.condition_1.ssr) !== -1 && (convertedcustomer_reqValue.condition_1.includes(1))) {
                ssrValue += standardData.customer_req.condition_1.ssr * standardData.customer_req.condition_1.percent
                ssrFound = true
            }

            if (!csrFound && !bothFound && includesAll(convertedcustomer_reqValue.condition_1, [6, 7, 8, 9]) && standardData.customer_req.condition_1.ssr === 10) {
                ssrValue += standardData.customer_req.condition_1.ssr * standardData.customer_req.condition_1.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedcustomer_reqValue.condition_1, [2, 3, 4, 5]) && standardData.customer_req.condition_1.ssr === 1) {
                ssrValue += standardData.customer_req.condition_1.ssr * standardData.customer_req.condition_1.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.customer_req.condition_1.csr) !== -1 && (convertedcustomer_reqValue.condition_1.includes(10))) {
                csrValue += standardData.customer_req.condition_1.csr * standardData.customer_req.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.customer_req.condition_1.csr) !== -1 && (convertedcustomer_reqValue.condition_1.includes(1))) {
                csrValue += standardData.customer_req.condition_1.csr * standardData.customer_req.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedcustomer_reqValue.condition_1, [6, 7, 8, 9]) && standardData.customer_req.condition_1.csr === 10) {
                csrValue += standardData.customer_req.condition_1.csr * standardData.customer_req.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedcustomer_reqValue.condition_1, [2, 3, 4, 5]) && standardData.customer_req.condition_1.csr === 1) {
                csrValue += standardData.customer_req.condition_1.csr * standardData.customer_req.condition_1.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.customer_req.condition_1.both) !== -1 && (convertedcustomer_reqValue.condition_1.includes(10))) {
                bothValue += standardData.customer_req.condition_1.both * standardData.customer_req.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.customer_req.condition_1.both) !== -1 && (convertedcustomer_reqValue.condition_1.includes(1))) {
                bothValue += standardData.customer_req.condition_1.both * standardData.customer_req.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedcustomer_reqValue.condition_1, [6, 7, 8, 9]) && standardData.customer_req.condition_1.both === 10) {
                bothValue += standardData.customer_req.condition_1.both * standardData.customer_req.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedcustomer_reqValue.condition_1, [2, 3, 4, 5]) && standardData.customer_req.condition_1.both === 1) {
                bothValue += standardData.customer_req.condition_1.both * standardData.customer_req.condition_1.percent
                bothFound = true
            }
        } else if (convertedcustomer_reqValue.condition_2) {
            if (convertedcustomer_reqValue.condition_2.includes(standardData.customer_req.condition_2.ssr)) {
                ssrValue += standardData.customer_req.condition_2.ssr * standardData.customer_req.condition_2.percent
                ssrFound = true
            }
            if (convertedcustomer_reqValue.condition_2.includes(standardData.customer_req.condition_2.csr)) {
                csrValue += standardData.customer_req.condition_2.csr * standardData.customer_req.condition_2.percent
                csrFound = true
            }
            if (convertedcustomer_reqValue.condition_2.includes(standardData.customer_req.condition_2.both)) {
                bothValue += standardData.customer_req.condition_2.both * standardData.customer_req.condition_2.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.customer_req.condition_2.ssr) !== -1 && (convertedcustomer_reqValue.condition_2.includes(10))) {
                ssrValue += standardData.customer_req.condition_2.ssr * standardData.customer_req.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.customer_req.condition_2.ssr) !== -1 && (convertedcustomer_reqValue.condition_2.includes(1))) {
                ssrValue += standardData.customer_req.condition_2.ssr * standardData.customer_req.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedcustomer_reqValue.condition_2, [6, 7, 8, 9]) && standardData.customer_req.condition_2.ssr === 10) {
                ssrValue += standardData.customer_req.condition_2.ssr * standardData.customer_req.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedcustomer_reqValue.condition_2, [2, 3, 4, 5]) && standardData.customer_req.condition_2.ssr === 1) {
                ssrValue += standardData.customer_req.condition_2.ssr * standardData.customer_req.condition_2.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.customer_req.condition_2.csr) !== -1 && (convertedcustomer_reqValue.condition_2.includes(10))) {
                csrValue += standardData.customer_req.condition_2.csr * standardData.customer_req.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.customer_req.condition_2.csr) !== -1 && (convertedcustomer_reqValue.condition_2.includes(1))) {
                csrValue += standardData.customer_req.condition_2.csr * standardData.customer_req.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedcustomer_reqValue.condition_2, [6, 7, 8, 9]) && standardData.customer_req.condition_2.csr === 10) {
                csrValue += standardData.customer_req.condition_2.csr * standardData.customer_req.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedcustomer_reqValue.condition_2, [2, 3, 4, 5]) && standardData.customer_req.condition_2.csr === 1) {
                csrValue += standardData.customer_req.condition_2.csr * standardData.customer_req.condition_2.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.customer_req.condition_2.both) !== -1 && (convertedcustomer_reqValue.condition_2.includes(10))) {
                bothValue += standardData.customer_req.condition_2.both * standardData.customer_req.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.customer_req.condition_2.both) !== -1 && (convertedcustomer_reqValue.condition_2.includes(1))) {
                bothValue += standardData.customer_req.condition_2.both * standardData.customer_req.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedcustomer_reqValue.condition_2, [6, 7, 8, 9]) && standardData.customer_req.condition_2.both === 10) {
                bothValue += standardData.customer_req.condition_2.both * standardData.customer_req.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedcustomer_reqValue.condition_2, [2, 3, 4, 5]) && standardData.customer_req.condition_2.both === 1) {
                bothValue += standardData.customer_req.condition_2.both * standardData.customer_req.condition_2.percent
                bothFound = true
            }

        }
    })


    convertedResponsibilityReqValues.forEach(convertedresponsibilityValue => {

        let ssrFound = false;
        let csrFound = false;
        let bothFound = false;
        if (convertedresponsibilityValue.condition_1) {
            if (convertedresponsibilityValue.condition_1.includes(standardData.responsibility.condition_1.ssr)) {
                ssrValue += standardData.responsibility.condition_1.ssr * standardData.responsibility.condition_1.percent
                ssrFound = true
            }
            if (convertedresponsibilityValue.condition_1.includes(standardData.responsibility.condition_1.csr)) {
                csrValue += standardData.responsibility.condition_1.csr * standardData.responsibility.condition_1.percent
                csrFound = true
            }
            if (convertedresponsibilityValue.condition_1.includes(standardData.responsibility.condition_1.both)) {
                bothValue += standardData.responsibility.condition_1.both * standardData.responsibility.condition_1.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.responsibility.condition_1.ssr) !== -1 && (convertedresponsibilityValue.condition_1.includes(10))) {
                ssrValue += standardData.responsibility.condition_1.ssr * standardData.responsibility.condition_1.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.responsibility.condition_1.ssr) !== -1 && (convertedresponsibilityValue.condition_1.includes(1))) {
                ssrValue += standardData.responsibility.condition_1.ssr * standardData.responsibility.condition_1.percent
                ssrFound = true
            }

            if (!csrFound && !bothFound && includesAll(convertedresponsibilityValue.condition_1, [6, 7, 8, 9]) && standardData.responsibility.condition_1.ssr === 10) {
                ssrValue += standardData.responsibility.condition_1.ssr * standardData.responsibility.condition_1.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedresponsibilityValue.condition_1, [2, 3, 4, 5]) && standardData.responsibility.condition_1.ssr === 1) {
                ssrValue += standardData.responsibility.condition_1.ssr * standardData.responsibility.condition_1.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.responsibility.condition_1.csr) !== -1 && (convertedresponsibilityValue.condition_1.includes(10))) {
                csrValue += standardData.responsibility.condition_1.csr * standardData.responsibility.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.responsibility.condition_1.csr) !== -1 && (convertedresponsibilityValue.condition_1.includes(1))) {
                csrValue += standardData.responsibility.condition_1.csr * standardData.responsibility.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedresponsibilityValue.condition_1, [6, 7, 8, 9]) && standardData.responsibility.condition_1.csr === 10) {
                csrValue += standardData.responsibility.condition_1.csr * standardData.responsibility.condition_1.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedresponsibilityValue.condition_1, [2, 3, 4, 5]) && standardData.responsibility.condition_1.csr === 1) {
                csrValue += standardData.responsibility.condition_1.csr * standardData.responsibility.condition_1.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.responsibility.condition_1.both) !== -1 && (convertedresponsibilityValue.condition_1.includes(10))) {
                bothValue += standardData.responsibility.condition_1.both * standardData.responsibility.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.responsibility.condition_1.both) !== -1 && (convertedresponsibilityValue.condition_1.includes(1))) {
                bothValue += standardData.responsibility.condition_1.both * standardData.responsibility.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedresponsibilityValue.condition_1, [6, 7, 8, 9]) && standardData.responsibility.condition_1.both === 10) {
                bothValue += standardData.responsibility.condition_1.both * standardData.responsibility.condition_1.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedresponsibilityValue.condition_1, [2, 3, 4, 5]) && standardData.responsibility.condition_1.both === 1) {
                bothValue += standardData.responsibility.condition_1.both * standardData.responsibility.condition_1.percent
                bothFound = true
            }
        } else if (convertedresponsibilityValue.condition_2) {
            if (convertedresponsibilityValue.condition_2.includes(standardData.responsibility.condition_2.ssr)) {
                ssrValue += standardData.responsibility.condition_2.ssr * standardData.responsibility.condition_2.percent
                ssrFound = true
            }
            if (convertedresponsibilityValue.condition_2.includes(standardData.responsibility.condition_2.csr)) {
                csrValue += standardData.responsibility.condition_2.csr * standardData.responsibility.condition_2.percent
                csrFound = true
            }
            if (convertedresponsibilityValue.condition_2.includes(standardData.responsibility.condition_2.both)) {
                bothValue += standardData.responsibility.condition_2.both * standardData.responsibility.condition_2.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.responsibility.condition_2.ssr) !== -1 && (convertedresponsibilityValue.condition_2.includes(10))) {
                ssrValue += standardData.responsibility.condition_2.ssr * standardData.responsibility.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.responsibility.condition_2.ssr) !== -1 && (convertedresponsibilityValue.condition_2.includes(1))) {
                ssrValue += standardData.responsibility.condition_2.ssr * standardData.responsibility.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedresponsibilityValue.condition_2, [6, 7, 8, 9]) && standardData.responsibility.condition_2.ssr === 10) {
                ssrValue += standardData.responsibility.condition_2.ssr * standardData.responsibility.condition_2.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedresponsibilityValue.condition_2, [2, 3, 4, 5]) && standardData.responsibility.condition_2.ssr === 1) {
                ssrValue += standardData.responsibility.condition_2.ssr * standardData.responsibility.condition_2.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.responsibility.condition_2.csr) !== -1 && (convertedresponsibilityValue.condition_2.includes(10))) {
                csrValue += standardData.responsibility.condition_2.csr * standardData.responsibility.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.responsibility.condition_2.csr) !== -1 && (convertedresponsibilityValue.condition_2.includes(1))) {
                csrValue += standardData.responsibility.condition_2.csr * standardData.responsibility.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedresponsibilityValue.condition_2, [6, 7, 8, 9]) && standardData.responsibility.condition_2.csr === 10) {
                csrValue += standardData.responsibility.condition_2.csr * standardData.responsibility.condition_2.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedresponsibilityValue.condition_2, [2, 3, 4, 5]) && standardData.responsibility.condition_2.csr === 1) {
                csrValue += standardData.responsibility.condition_2.csr * standardData.responsibility.condition_2.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.responsibility.condition_2.both) !== -1 && (convertedresponsibilityValue.condition_2.includes(10))) {
                bothValue += standardData.responsibility.condition_2.both * standardData.responsibility.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.responsibility.condition_2.both) !== -1 && (convertedresponsibilityValue.condition_2.includes(1))) {
                bothValue += standardData.responsibility.condition_2.both * standardData.responsibility.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedresponsibilityValue.condition_2, [6, 7, 8, 9]) && standardData.responsibility.condition_2.both === 10) {
                bothValue += standardData.responsibility.condition_2.both * standardData.responsibility.condition_2.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedresponsibilityValue.condition_2, [2, 3, 4, 5]) && standardData.responsibility.condition_2.both === 1) {
                bothValue += standardData.responsibility.condition_2.both * standardData.responsibility.condition_2.percent
                bothFound = true
            }

        } else if (convertedresponsibilityValue.condition_3) {
            if (convertedresponsibilityValue.condition_3.includes(standardData.responsibility.condition_3.ssr)) {
                ssrValue += standardData.responsibility.condition_3.ssr * standardData.responsibility.condition_3.percent
                ssrFound = true
            }
            if (convertedresponsibilityValue.condition_3.includes(standardData.responsibility.condition_3.csr)) {
                csrValue += standardData.responsibility.condition_3.csr * standardData.responsibility.condition_3.percent
                csrFound = true
            }
            if (convertedresponsibilityValue.condition_3.includes(standardData.responsibility.condition_3.both)) {
                bothValue += standardData.responsibility.condition_3.both * standardData.responsibility.condition_3.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.responsibility.condition_3.ssr) !== -1 && (convertedresponsibilityValue.condition_3.includes(10))) {
                ssrValue += standardData.responsibility.condition_3.ssr * standardData.responsibility.condition_3.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.responsibility.condition_3.ssr) !== -1 && (convertedresponsibilityValue.condition_3.includes(1))) {
                ssrValue += standardData.responsibility.condition_3.ssr * standardData.responsibility.condition_3.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedresponsibilityValue.condition_3, [6, 7, 8, 9]) && standardData.responsibility.condition_3.ssr === 10) {
                ssrValue += standardData.responsibility.condition_3.ssr * standardData.responsibility.condition_3.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedresponsibilityValue.condition_3, [2, 3, 4, 5]) && standardData.responsibility.condition_3.ssr === 1) {
                ssrValue += standardData.responsibility.condition_3.ssr * standardData.responsibility.condition_3.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.responsibility.condition_3.csr) !== -1 && (convertedresponsibilityValue.condition_3.includes(10))) {
                csrValue += standardData.responsibility.condition_3.csr * standardData.responsibility.condition_3.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.responsibility.condition_3.csr) !== -1 && (convertedresponsibilityValue.condition_3.includes(1))) {
                csrValue += standardData.responsibility.condition_3.csr * standardData.responsibility.condition_3.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedresponsibilityValue.condition_3, [6, 7, 8, 9]) && standardData.responsibility.condition_3.csr === 10) {
                csrValue += standardData.responsibility.condition_3.csr * standardData.responsibility.condition_3.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedresponsibilityValue.condition_3, [2, 3, 4, 5]) && standardData.responsibility.condition_3.csr === 1) {
                csrValue += standardData.responsibility.condition_3.csr * standardData.responsibility.condition_3.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.responsibility.condition_3.both) !== -1 && (convertedresponsibilityValue.condition_3.includes(10))) {
                bothValue += standardData.responsibility.condition_3.both * standardData.responsibility.condition_3.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.responsibility.condition_3.both) !== -1 && (convertedresponsibilityValue.condition_3.includes(1))) {
                bothValue += standardData.responsibility.condition_3.both * standardData.responsibility.condition_3.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedresponsibilityValue.condition_3, [6, 7, 8, 9]) && standardData.responsibility.condition_3.both === 10) {
                bothValue += standardData.responsibility.condition_3.both * standardData.responsibility.condition_3.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedresponsibilityValue.condition_3, [2, 3, 4, 5]) && standardData.responsibility.condition_3.both === 1) {
                bothValue += standardData.responsibility.condition_3.both * standardData.responsibility.condition_3.percent
                bothFound = true
            }

        } else if (convertedresponsibilityValue.condition_4) {
            if (convertedresponsibilityValue.condition_4.includes(standardData.responsibility.condition_4.ssr)) {
                ssrValue += standardData.responsibility.condition_4.ssr * standardData.responsibility.condition_4.percent
                ssrFound = true
            }
            if (convertedresponsibilityValue.condition_4.includes(standardData.responsibility.condition_4.csr)) {
                csrValue += standardData.responsibility.condition_4.csr * standardData.responsibility.condition_4.percent
                csrFound = true
            }
            if (convertedresponsibilityValue.condition_4.includes(standardData.responsibility.condition_4.both)) {
                bothValue += standardData.responsibility.condition_4.both * standardData.responsibility.condition_4.percent
                bothFound = true
            }

            if (!csrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.responsibility.condition_4.ssr) !== -1 && (convertedresponsibilityValue.condition_4.includes(10))) {
                ssrValue += standardData.responsibility.condition_4.ssr * standardData.responsibility.condition_4.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.responsibility.condition_4.ssr) !== -1 && (convertedresponsibilityValue.condition_4.includes(1))) {
                ssrValue += standardData.responsibility.condition_4.ssr * standardData.responsibility.condition_4.percent
                ssrFound = true
            }

            if (!csrFound && !bothFound && includesAll(convertedresponsibilityValue.condition_4, [6, 7, 8, 9]) && standardData.responsibility.condition_4.ssr === 10) {
                ssrValue += standardData.responsibility.condition_4.ssr * standardData.responsibility.condition_4.percent
                ssrFound = true
            }
            if (!csrFound && !bothFound && includesAll(convertedresponsibilityValue.condition_4, [2, 3, 4, 5]) && standardData.responsibility.condition_4.ssr === 1) {
                ssrValue += standardData.responsibility.condition_4.ssr * standardData.responsibility.condition_4.percent
                ssrFound = true
            }

            if (!ssrFound && !bothFound && [6, 7, 8, 9].indexOf(standardData.responsibility.condition_4.csr) !== -1 && (convertedresponsibilityValue.condition_4.includes(10))) {
                csrValue += standardData.responsibility.condition_4.csr * standardData.responsibility.condition_4.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && [2, 3, 4, 5].indexOf(standardData.responsibility.condition_4.csr) !== -1 && (convertedresponsibilityValue.condition_4.includes(1))) {
                csrValue += standardData.responsibility.condition_4.csr * standardData.responsibility.condition_4.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedresponsibilityValue.condition_4, [6, 7, 8, 9]) && standardData.responsibility.condition_4.csr === 10) {
                csrValue += standardData.responsibility.condition_4.csr * standardData.responsibility.condition_4.percent
                csrFound = true
            }
            if (!ssrFound && !bothFound && includesAll(convertedresponsibilityValue.condition_4, [2, 3, 4, 5]) && standardData.responsibility.condition_4.csr === 1) {
                csrValue += standardData.responsibility.condition_4.csr * standardData.responsibility.condition_4.percent
                csrFound = true
            }

            if (!csrFound && !ssrFound && [6, 7, 8, 9].indexOf(standardData.responsibility.condition_4.both) !== -1 && (convertedresponsibilityValue.condition_4.includes(10))) {
                bothValue += standardData.responsibility.condition_4.both * standardData.responsibility.condition_4.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && [2, 3, 4, 5].indexOf(standardData.responsibility.condition_4.both) !== -1 && (convertedresponsibilityValue.condition_4.includes(1))) {
                bothValue += standardData.responsibility.condition_4.both * standardData.responsibility.condition_4.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedresponsibilityValue.condition_4, [6, 7, 8, 9]) && standardData.responsibility.condition_4.both === 10) {
                bothValue += standardData.responsibility.condition_4.both * standardData.responsibility.condition_4.percent
                bothFound = true
            }
            if (!csrFound && !ssrFound && includesAll(convertedresponsibilityValue.condition_4, [2, 3, 4, 5]) && standardData.responsibility.condition_4.both === 1) {
                bothValue += standardData.responsibility.condition_4.both * standardData.responsibility.condition_4.percent
                bothFound = true
            }

        }
    })


    const ssrString = ssrValue.toString()
    const csrString = csrValue.toString()
    const bothString = bothValue.toString()


    const arrayMax = Function.prototype.apply.bind(Math.max, null);
    const arrayMin = Function.prototype.apply.bind(Math.min, null);

    const max = arrayMax([ssrValue, csrValue]);
    const min = arrayMin([ssrValue, csrValue]);

    const chosenValueNumber = ssrValue > csrValue ? ssrValue : csrValue;

    return (
        <Formik
            initialValues={props.data}
            onSubmit={handleSubmit}
            innerRef={formRef}
        >
            {() => (
                <Form
                    className="base-form">

                    <div className="title-container">
                        <span>Auswertung</span>
                    </div>

                    <ReactSpeedometer
                        needleHeightRatio={0.7}
                        maxSegmentLabels={3}
                        segments={4}
                        customSegmentStops={[0, ssrValue, csrValue, max]}
                        segmentColors={['firebrick', 'limegreen']}
                        maxValue={max}
                        customSegmentLabels={[
                            {
                                text: `${min} (${(min / max * 100).toFixed(0)} %)`,
                                position: 'OUTSIDE',
                                color: '#000',
                            }, {
                                text: '',
                                position: 'INSIDE',
                                color: '#000',
                            }, {
                                text: `${max} (100 %)`,
                                position: 'OUTSIDE',
                                color: '#000',
                            }]}
                        value={chosenValueNumber}
                        textColor="#000"
                    />

                    <div className="stats-container">
                        {ssrValue > csrValue ? (
                            <>
                                <div className="stats-item">Empfehlung: <strong>server-side rendering</strong></div>
                                <div
                                    className="stats-item">SSR: <strong>{ssrString} ({(ssrValue / max * 100).toFixed(0)} %)</strong>
                                </div>
                                <div
                                    className="stats-item">CSR: <strong>{csrString} ({(csrValue / max * 100).toFixed(0)} %)</strong>
                                </div>
                                <div className="stats-item">Kombi
                                    SSR-CSR: <strong>{bothString} ({(bothValue / max * 100).toFixed(0)} %)</strong>
                                </div>
                            </>
                        ) : csrValue > ssrValue ? (
                            <>
                                <div className="stats-item">Empfehlung: <strong>client-side rendering</strong></div>
                                <div
                                    className="stats-item">CSR: <strong>{csrString} ({(csrValue / max * 100).toFixed(0)} %)</strong>
                                </div>
                                <div
                                    className="stats-item">SSR: <strong>{ssrString} ({(ssrValue / max * 100).toFixed(0)} %)</strong>
                                </div>
                                <div className="stats-item">Kombi
                                    SSR-CSR: <strong>{bothString} ({(bothValue / max * 100).toFixed(0)} %)</strong>
                                </div>
                            </>) : (
                            <>
                                <div className="stats-item">Empfehlung: <strong>Kombination client-side rendering &
                                    server-side rendering</strong></div>
                                <div className="stats-item">Kombi
                                    SSR-CSR: <strong>{bothString} ({(bothValue / max * 100).toFixed(0)} %)</strong>
                                </div>
                                <div
                                    className="stats-item">CSR: <strong>{ssrString} ({(ssrValue / max * 100).toFixed(0)} %)</strong>
                                </div>
                                <div
                                    className="stats-item">SSR: <strong>{csrString} ({(csrValue / max * 100).toFixed(0)} %)</strong>
                                </div>
                            </>)}

                    </div>

                    <div className="button-container">
                        <button type="button" name="back"
                                className="back" onClick={handleBack}>Zurück
                        </button>
                        <button type="submit" name="submit"
                                className="submit">Neue Eingaben tätigen
                        </button>
                    </div>


                </Form>
            )}
        </Formik>
    )
}

export default StepFinal
