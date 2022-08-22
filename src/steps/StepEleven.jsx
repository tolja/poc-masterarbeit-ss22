import * as Yup from "yup";
import {Form, Formik} from "formik";
import React, {useRef} from "react";

const StepEleven = (props) => {

    const formRef = useRef();

    const resourceSchema = Yup.object().shape({
        resource_condition_1: Yup.number().required('Error resource').nullable(true),
        resource_condition_2: Yup.number().required('Error resource 2').nullable(true)
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
            validationSchema={resourceSchema}
        >
            {formik => (
                <Form
                    className="base-form">

                    <div className="title-container">
                        <span>11/13 | Ressourcenverbrauch</span>
                    </div>

                    <div className="question-container">

                        <label className="question-label">11.1 Physisch: Niedrige Last auf lokalem Server</label>

                        <div className="options-container">

                            <input id="radio-1"
                                   type="radio"
                                   name="radio-group1"
                                   className="radio-custom"
                                   value="1"
                                   checked={formik.values.resource_condition_1 === 1}
                                   onChange={() => formik.setFieldValue("resource_condition_1", 1)}/>
                            <label htmlFor="radio-1" className="radio-custom-label">nicht relevant</label>
                            <input id="radio-2"
                                   type="radio"
                                   name="radio-group1"
                                   value="2"
                                   className="radio-custom"
                                   checked={formik.values.resource_condition_1 === 2}
                                   onChange={() => formik.setFieldValue("resource_condition_1", 2)}/>
                            <label htmlFor="radio-2" className="radio-custom-label">unwichtig</label>
                            <input id="radio-3"
                                   type="radio"
                                   name="radio-group1"
                                   value="3"
                                   className="radio-custom"
                                   checked={formik.values.resource_condition_1 === 3}
                                   onChange={() => formik.setFieldValue("resource_condition_1", 3)}/>
                            <label htmlFor="radio-3" className="radio-custom-label">eher unwichtig</label>
                            <input id="radio-4"
                                   type="radio"
                                   name="radio-group1"
                                   value="4"
                                   className="radio-custom"
                                   checked={formik.values.resource_condition_1 === 4}
                                   onChange={() => formik.setFieldValue("resource_condition_1", 4)}/>
                            <label htmlFor="radio-4" className="radio-custom-label">eher wichtig</label>
                            <input id="radio-5"
                                   type="radio"
                                   name="radio-group1"
                                   value="5"
                                   className="radio-custom"
                                   checked={formik.values.resource_condition_1 === 5}
                                   onChange={() => formik.setFieldValue("resource_condition_1", 5)}/>
                            <label htmlFor="radio-5" className="radio-custom-label">sehr wichtig</label>

                        </div>

                        <div className="separator"/>
                    </div>

                    <div className="question-container">

                        <label className="question-label">11.2 Global & lokal: Internet-Bandbreite, Serverlast, Trafic
                            niedrig</label>

                        <div className="options-container">

                            <input id="radio-6"
                                   type="radio"
                                   name="radio-group2"
                                   className="radio-custom"
                                   value="1"
                                   checked={formik.values.resource_condition_2 === 1}
                                   onChange={() => formik.setFieldValue("resource_condition_2", 1)}/>
                            <label htmlFor="radio-6" className="radio-custom-label">nicht relevant</label>
                            <input id="radio-7"
                                   type="radio"
                                   name="radio-group2"
                                   value="2"
                                   className="radio-custom"
                                   checked={formik.values.resource_condition_2 === 2}
                                   onChange={() => formik.setFieldValue("resource_condition_2", 2)}/>
                            <label htmlFor="radio-7" className="radio-custom-label">unwichtig</label>
                            <input id="radio-8"
                                   type="radio"
                                   name="radio-group2"
                                   value="3"
                                   className="radio-custom"
                                   checked={formik.values.resource_condition_2 === 3}
                                   onChange={() => formik.setFieldValue("resource_condition_2", 3)}/>
                            <label htmlFor="radio-8" className="radio-custom-label">eher unwichtig</label>
                            <input id="radio-9"
                                   type="radio"
                                   name="radio-group2"
                                   value="4"
                                   className="radio-custom"
                                   checked={formik.values.resource_condition_2 === 4}
                                   onChange={() => formik.setFieldValue("resource_condition_2", 4)}/>
                            <label htmlFor="radio-9" className="radio-custom-label">eher wichtig</label>
                            <input id="radio-10"
                                   type="radio"
                                   name="radio-group2"
                                   value="5"
                                   className="radio-custom"
                                   checked={formik.values.resource_condition_2 === 5}
                                   onChange={() => formik.setFieldValue("resource_condition_2", 5)}/>
                            <label htmlFor="radio-10" className="radio-custom-label">sehr wichtig</label>

                        </div>
                        <div className="separator"/>
                    </div>

                    <div className="error_container">

                        {formik.errors.resource_condition_1 && formik.touched.resource_condition_1 ? (
                            <div
                                className="error_element">

                                <strong>resource: </strong>
                                <span
                                    className="error">{formik.errors.resource_condition_1}</span>

                            </div>
                        ) : null}

                        {formik.errors.resource_condition_2 && formik.touched.resource_condition_2 ? (
                            <div
                                className="error_element">

                                <strong>resource 2: </strong>
                                <span
                                    className="error">{formik.errors.resource_condition_2}</span>

                            </div>
                        ) : null}

                    </div>

                    <div className="button-container">
                        <button type="button" name="back"
                                className="back" onClick={handleBack}>Zurück
                        </button>
                        <button type="submit" name="submit"
                                className="submit">Nächstes Kriterium
                        </button>
                    </div>


                </Form>
            )}
        </Formik>
    )
}

export default StepEleven
