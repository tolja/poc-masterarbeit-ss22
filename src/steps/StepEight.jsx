import * as Yup from "yup";
import {Form, Formik} from "formik";
import React, {useRef} from "react";

const StepEight = (props) => {

    const formRef = useRef();

    const reliabilitySchema = Yup.object().shape({
        reliable_condition_1: Yup.number().required('Bitte bei 8.1 eine Eingabe tätigen').nullable(true),
        reliable_condition_2: Yup.number().required('Bitte bei 8.2 eine Eingabe tätigen').nullable(true)
    });

    const handleSubmit = (values) => {

        props.next(values);
    }

    const handleBack = () => {

        props.prev(formRef.current.values);
    }

    return (
        <Formik
            initialValues={props.data}
            onSubmit={handleSubmit}
            innerRef={formRef}
            validationSchema={reliabilitySchema}
        >
            {formik => (
                <Form
                    className="base-form">

                    <div className="title-container">
                        <span>8/13 | Zuverlässigkeit</span>
                    </div>

                    <div className="question-container">

                        <label className="question-label">8.1 Ausfallsicherheit</label>

                        <div className="options-container">

                            <input id="radio-1"
                                   type="radio"
                                   name="radio-group1"
                                   className="radio-custom"
                                   value="1"
                                   checked={formik.values.reliable_condition_1 === 1}
                                   onChange={() => formik.setFieldValue("reliable_condition_1", 1)}/>
                            <label htmlFor="radio-1" className="radio-custom-label">nicht relevant</label>
                            <input id="radio-2"
                                   type="radio"
                                   name="radio-group1"
                                   value="2"
                                   className="radio-custom"
                                   checked={formik.values.reliable_condition_1 === 2}
                                   onChange={() => formik.setFieldValue("reliable_condition_1", 2)}/>
                            <label htmlFor="radio-2" className="radio-custom-label">unwichtig</label>
                            <input id="radio-3"
                                   type="radio"
                                   name="radio-group1"
                                   value="3"
                                   className="radio-custom"
                                   checked={formik.values.reliable_condition_1 === 3}
                                   onChange={() => formik.setFieldValue("reliable_condition_1", 3)}/>
                            <label htmlFor="radio-3" className="radio-custom-label">eher unwichtig</label>
                            <input id="radio-4"
                                   type="radio"
                                   name="radio-group1"
                                   value="4"
                                   className="radio-custom"
                                   checked={formik.values.reliable_condition_1 === 4}
                                   onChange={() => formik.setFieldValue("reliable_condition_1", 4)}/>
                            <label htmlFor="radio-4" className="radio-custom-label">eher wichtig</label>
                            <input id="radio-5"
                                   type="radio"
                                   name="radio-group1"
                                   value="5"
                                   className="radio-custom"
                                   checked={formik.values.reliable_condition_1 === 5}
                                   onChange={() => formik.setFieldValue("reliable_condition_1", 5)}/>
                            <label htmlFor="radio-5" className="radio-custom-label">sehr wichtig</label>

                        </div>

                        <div className="separator"/>
                    </div>

                    <div className="question-container">

                        <label className="question-label">8.2 Verhinderung von Unbenutzbarkeit der Webseite</label>

                        <div className="options-container">

                            <input id="radio-6"
                                   type="radio"
                                   name="radio-group2"
                                   className="radio-custom"
                                   value="1"
                                   checked={formik.values.reliable_condition_2 === 1}
                                   onChange={() => formik.setFieldValue("reliable_condition_2", 1)}/>
                            <label htmlFor="radio-6" className="radio-custom-label">nicht relevant</label>
                            <input id="radio-7"
                                   type="radio"
                                   name="radio-group2"
                                   value="2"
                                   className="radio-custom"
                                   checked={formik.values.reliable_condition_2 === 2}
                                   onChange={() => formik.setFieldValue("reliable_condition_2", 2)}/>
                            <label htmlFor="radio-7" className="radio-custom-label">unwichtig</label>
                            <input id="radio-8"
                                   type="radio"
                                   name="radio-group2"
                                   value="3"
                                   className="radio-custom"
                                   checked={formik.values.reliable_condition_2 === 3}
                                   onChange={() => formik.setFieldValue("reliable_condition_2", 3)}/>
                            <label htmlFor="radio-8" className="radio-custom-label">eher unwichtig</label>
                            <input id="radio-9"
                                   type="radio"
                                   name="radio-group2"
                                   value="4"
                                   className="radio-custom"
                                   checked={formik.values.reliable_condition_2 === 4}
                                   onChange={() => formik.setFieldValue("reliable_condition_2", 4)}/>
                            <label htmlFor="radio-9" className="radio-custom-label">eher wichtig</label>
                            <input id="radio-10"
                                   type="radio"
                                   name="radio-group2"
                                   value="5"
                                   className="radio-custom"
                                   checked={formik.values.reliable_condition_2 === 5}
                                   onChange={() => formik.setFieldValue("reliable_condition_2", 5)}/>
                            <label htmlFor="radio-10" className="radio-custom-label">sehr wichtig</label>

                        </div>
                        <div className="separator"/>
                    </div>

                    <div className="error_container">

                        {formik.errors.reliable_condition_1 && formik.touched.reliable_condition_1 ? (
                            <div
                                className="error_element">

                                <span
                                    className="error">{formik.errors.reliable_condition_1}</span>

                            </div>
                        ) : null}

                        {formik.errors.reliable_condition_2 && formik.touched.reliable_condition_2 ? (
                            <div
                                className="error_element">

                                <span
                                    className="error">{formik.errors.reliable_condition_2}</span>

                            </div>
                        ) : null}


                    </div>

                    <div className="button-container">
                        <button type="button" name="back"
                                className="back" onClick={handleBack}>Zurück
                        </button>
                        <button type="submit" name="submit"
                                className="submit" disabled={!formik.isValid}>Nächstes Kriterium
                        </button>
                    </div>


                </Form>
            )}
        </Formik>
    )
}

export default StepEight
