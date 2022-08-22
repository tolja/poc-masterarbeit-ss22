import * as Yup from "yup";
import {Form, Formik} from "formik";
import {useRef} from "react";

const StepSeven = (props) => {

    const formRef = useRef();

    const availabilitySchema = Yup.object().shape({
        availability_condition_1: Yup.number().required('Bitte bei 7.1 eine Eingabe tätigen').nullable(true),
        availability_condition_2: Yup.number().required('Bitte bei 7.2 eine Eingabe tätigen').nullable(true),
        availability_condition_3: Yup.number().required('Bitte bei 7.3 eine Eingabe tätigen').nullable(true),
        availability_condition_4: Yup.number().required('Bitte bei 7.4 eine Eingabe tätigen').nullable(true)
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
            validationSchema={availabilitySchema}
        >
            {formik => (
                <Form
                    className="base-form">

                    <div className="title-container">
                        <span>7/13 | Verfügbarkeit</span>
                    </div>

                    <div className="question-container">

                        <label className="question-label">7.1 Caching von Daten für bessere Verfügbarkeit</label>

                        <div className="options-container">

                            <input id="radio-1"
                                   type="radio"
                                   name="radio-group1"
                                   className="radio-custom"
                                   value="1"
                                   checked={formik.values.availability_condition_1 === 1}
                                   onChange={() => formik.setFieldValue("availability_condition_1", 1)}/>
                            <label htmlFor="radio-1" className="radio-custom-label">nicht relevant</label>
                            <input id="radio-2"
                                   type="radio"
                                   name="radio-group1"
                                   value="2"
                                   className="radio-custom"
                                   checked={formik.values.availability_condition_1 === 2}
                                   onChange={() => formik.setFieldValue("availability_condition_1", 2)}/>
                            <label htmlFor="radio-2" className="radio-custom-label">unwichtig</label>
                            <input id="radio-3"
                                   type="radio"
                                   name="radio-group1"
                                   value="3"
                                   className="radio-custom"
                                   checked={formik.values.availability_condition_1 === 3}
                                   onChange={() => formik.setFieldValue("availability_condition_1", 3)}/>
                            <label htmlFor="radio-3" className="radio-custom-label">eher unwichtig</label>
                            <input id="radio-4"
                                   type="radio"
                                   name="radio-group1"
                                   value="4"
                                   className="radio-custom"
                                   checked={formik.values.availability_condition_1 === 4}
                                   onChange={() => formik.setFieldValue("availability_condition_1", 4)}/>
                            <label htmlFor="radio-4" className="radio-custom-label">eher wichtig</label>
                            <input id="radio-5"
                                   type="radio"
                                   name="radio-group1"
                                   value="5"
                                   className="radio-custom"
                                   checked={formik.values.availability_condition_1 === 5}
                                   onChange={() => formik.setFieldValue("availability_condition_1", 5)}/>
                            <label htmlFor="radio-5" className="radio-custom-label">sehr wichtig</label>

                        </div>

                        <div className="separator"/>
                    </div>

                    <div className="question-container">

                        <label className="question-label">7.2 Auslagerung von Unterseiten auf externe Server</label>

                        <div className="options-container">

                            <input id="radio-6"
                                   type="radio"
                                   name="radio-group2"
                                   className="radio-custom"
                                   value="1"
                                   checked={formik.values.availability_condition_2 === 1}
                                   onChange={() => formik.setFieldValue("availability_condition_2", 1)}/>
                            <label htmlFor="radio-6" className="radio-custom-label">nicht relevant</label>
                            <input id="radio-7"
                                   type="radio"
                                   name="radio-group2"
                                   value="2"
                                   className="radio-custom"
                                   checked={formik.values.availability_condition_2 === 2}
                                   onChange={() => formik.setFieldValue("availability_condition_2", 2)}/>
                            <label htmlFor="radio-7" className="radio-custom-label">unwichtig</label>
                            <input id="radio-8"
                                   type="radio"
                                   name="radio-group2"
                                   value="3"
                                   className="radio-custom"
                                   checked={formik.values.availability_condition_2 === 3}
                                   onChange={() => formik.setFieldValue("availability_condition_2", 3)}/>
                            <label htmlFor="radio-8" className="radio-custom-label">eher unwichtig</label>
                            <input id="radio-9"
                                   type="radio"
                                   name="radio-group2"
                                   value="4"
                                   className="radio-custom"
                                   checked={formik.values.availability_condition_2 === 4}
                                   onChange={() => formik.setFieldValue("availability_condition_2", 4)}/>
                            <label htmlFor="radio-9" className="radio-custom-label">eher wichtig</label>
                            <input id="radio-10"
                                   type="radio"
                                   name="radio-group2"
                                   value="5"
                                   className="radio-custom"
                                   checked={formik.values.availability_condition_2 === 5}
                                   onChange={() => formik.setFieldValue("availability_condition_2", 5)}/>
                            <label htmlFor="radio-10" className="radio-custom-label">sehr wichtig</label>

                        </div>
                        <div className="separator"/>
                    </div>

                    <div className="question-container">

                        <label className="question-label">7.3 Keine spezifische Browser oder Einstellungen für Nutzung
                            der Webseite</label>

                        <div className="options-container">

                            <input id="radio-11"
                                   type="radio"
                                   name="radio-group3"
                                   className="radio-custom"
                                   value="1"
                                   checked={formik.values.availability_condition_3 === 1}
                                   onChange={() => formik.setFieldValue("availability_condition_3", 1)}/>
                            <label htmlFor="radio-11" className="radio-custom-label">nicht relevant</label>
                            <input id="radio-12"
                                   type="radio"
                                   name="radio-group3"
                                   value="2"
                                   className="radio-custom"
                                   checked={formik.values.availability_condition_3 === 2}
                                   onChange={() => formik.setFieldValue("availability_condition_3", 2)}/>
                            <label htmlFor="radio-12" className="radio-custom-label">unwichtig</label>
                            <input id="radio-13"
                                   type="radio"
                                   name="radio-group3"
                                   value="3"
                                   className="radio-custom"
                                   checked={formik.values.availability_condition_3 === 3}
                                   onChange={() => formik.setFieldValue("availability_condition_3", 3)}/>
                            <label htmlFor="radio-13" className="radio-custom-label">eher unwichtig</label>
                            <input id="radio-14"
                                   type="radio"
                                   name="radio-group3"
                                   value="4"
                                   className="radio-custom"
                                   checked={formik.values.availability_condition_3 === 4}
                                   onChange={() => formik.setFieldValue("availability_condition_3", 4)}/>
                            <label htmlFor="radio-14" className="radio-custom-label">eher wichtig</label>
                            <input id="radio-15"
                                   type="radio"
                                   name="radio-group3"
                                   value="5"
                                   className="radio-custom"
                                   checked={formik.values.availability_condition_3 === 5}
                                   onChange={() => formik.setFieldValue("availability_condition_3", 5)}/>
                            <label htmlFor="radio-15" className="radio-custom-label">sehr wichtig</label>

                        </div>
                        <div className="separator"/>
                    </div>

                    <div className="question-container">

                        <label className="question-label">7.4 Offline-Verfügbarkeit</label>

                        <div className="options-container">

                            <input id="radio-16"
                                   type="radio"
                                   name="radio-group4"
                                   className="radio-custom"
                                   value="1"
                                   checked={formik.values.availability_condition_4 === 1}
                                   onChange={() => formik.setFieldValue("availability_condition_4", 1)}/>
                            <label htmlFor="radio-16" className="radio-custom-label">nicht relevant</label>
                            <input id="radio-17"
                                   type="radio"
                                   name="radio-group4"
                                   value="2"
                                   className="radio-custom"
                                   checked={formik.values.availability_condition_4 === 2}
                                   onChange={() => formik.setFieldValue("availability_condition_4", 2)}/>
                            <label htmlFor="radio-17" className="radio-custom-label">unwichtig</label>
                            <input id="radio-18"
                                   type="radio"
                                   name="radio-group4"
                                   value="3"
                                   className="radio-custom"
                                   checked={formik.values.availability_condition_4 === 3}
                                   onChange={() => formik.setFieldValue("availability_condition_4", 3)}/>
                            <label htmlFor="radio-18" className="radio-custom-label">eher unwichtig</label>
                            <input id="radio-19"
                                   type="radio"
                                   name="radio-group4"
                                   value="4"
                                   className="radio-custom"
                                   checked={formik.values.availability_condition_4 === 4}
                                   onChange={() => formik.setFieldValue("availability_condition_4", 4)}/>
                            <label htmlFor="radio-19" className="radio-custom-label">eher wichtig</label>
                            <input id="radio-20"
                                   type="radio"
                                   name="radio-group4"
                                   value="5"
                                   className="radio-custom"
                                   checked={formik.values.availability_condition_4 === 5}
                                   onChange={() => formik.setFieldValue("availability_condition_4", 5)}/>
                            <label htmlFor="radio-20" className="radio-custom-label">sehr wichtig</label>

                        </div>
                        <div className="separator"/>
                    </div>


                    <div className="error_container">

                        {formik.errors.availability_condition_1 && formik.touched.availability_condition_1 ? (
                            <div
                                className="error_element">

                                <span
                                    className="error">{formik.errors.availability_condition_1}</span>

                            </div>
                        ) : null}

                        {formik.errors.availability_condition_2 && formik.touched.availability_condition_2 ? (
                            <div
                                className="error_element">

                                <span
                                    className="error">{formik.errors.availability_condition_2}</span>

                            </div>
                        ) : null}

                        {formik.errors.availability_condition_3 && formik.touched.availability_condition_3 ? (
                            <div
                                className="error_element">

                                <span
                                    className="error">{formik.errors.availability_condition_3}</span>

                            </div>
                        ) : null}

                        {formik.errors.availability_condition_4 && formik.touched.availability_condition_4 ? (
                            <div
                                className="error_element">

                                <span
                                    className="error">{formik.errors.availability_condition_4}</span>

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
export default StepSeven
