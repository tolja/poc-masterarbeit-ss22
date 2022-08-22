import React, {useState} from "react";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";
import StepFive from "./steps/StepFive";
import StepSix from "./steps/StepSix";
import StepSeven from "./steps/StepSeven";
import StepEight from "./steps/StepEight";
import StepNine from "./steps/StepNine";
import StepTen from "./steps/StepTen";
import StepEleven from "./steps/StepEleven";
import StepTwelve from "./steps/StepTwelve";
import StepThirteen from "./steps/StepThirteen";
import StepFinal from "./steps/StepFinal";

export default function StepForm() {

    const [data, setData] = useState({
        performance_condition_1: null,
        performance_condition_2: null,
        performance_condition_3: null,
        performance_condition_4: null,
        performance_condition_5: null,
        performance_condition_6: null,
        ux_condition_1: null,
        ux_condition_2: null,
        ux_condition_3: null,
        ux_condition_4: null,
        ux_condition_5: null,
        seo_condition_1: null,
        seo_condition_2: null,
        seo_condition_3: null,
        development_condition_1: null,
        development_condition_2: null,
        maintain_condition_1: null,
        maintain_condition_2: null,
        flexibility_condition_1: null,
        flexibility_condition_2: null,
        flexibility_condition_3: null,
        flexibility_condition_4: null,
        availability_condition_1: null,
        availability_condition_2: null,
        availability_condition_3: null,
        availability_condition_4: null,
        reliable_condition_1: null,
        reliable_condition_2: null,
        security_condition_1: null,
        security_condition_2: null,
        security_condition_3: null,
        extend_condition_1: null,
        extend_condition_2: null,
        resource_condition_1: null,
        resource_condition_2: null,
        customer_requirements_condition_1: null,
        customer_requirements_condition_2: null,
        responsibility_condition_1: null,
        responsibility_condition_2: null,
        responsibility_condition_3: null,
        responsibility_condition_4: null
    });


    const handleNextStep = (newData) => {

        setData((prev) => ({...prev, ...newData}));

        setCurrentStep((prev) => prev + 1);
    };

    const handlePrevStep = (newData) => {

        setData((prev) => ({...prev, ...newData}));
        setCurrentStep((prev) => prev - 1);
    };

    const handleFirstStep = (newData) => {

        const newObj = Object.keys(newData).reduce((accumulator, key) => {
            return {...accumulator, [key]: null};
        }, {});

        setData((prev) => ({...prev, ...newObj}));
        setCurrentStep(() => 0);
    };

    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        <StepOne next={handleNextStep} data={data}/>,
        <StepTwo next={handleNextStep} prev={handlePrevStep} data={data}/>,
        <StepThree next={handleNextStep} prev={handlePrevStep} data={data}/>,
        <StepFour next={handleNextStep} prev={handlePrevStep} data={data}/>,
        <StepFive next={handleNextStep} prev={handlePrevStep} data={data}/>,
        <StepSix next={handleNextStep} prev={handlePrevStep} data={data}/>,
        <StepSeven next={handleNextStep} prev={handlePrevStep} data={data}/>,
        <StepEight next={handleNextStep} prev={handlePrevStep} data={data}/>,
        <StepNine next={handleNextStep} prev={handlePrevStep} data={data}/>,
        <StepTen next={handleNextStep} prev={handlePrevStep} data={data}/>,
        <StepEleven next={handleNextStep} prev={handlePrevStep} data={data}/>,
        <StepTwelve next={handleNextStep} prev={handlePrevStep} data={data}/>,
        <StepThirteen next={handleNextStep} prev={handlePrevStep} data={data}/>,
        <StepFinal prev={handlePrevStep} next={handleFirstStep} data={data}/>
    ];


    return <div className="App">{steps[currentStep]}</div>;
}

