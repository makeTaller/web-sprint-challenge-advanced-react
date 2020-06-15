// write your custom hook here to control your checkout form
import  React, {useState} from "react";

import { useLocalStorage } from "./useLocalStorage";

    export const useForm = ( initialValues ) => {

            const [showSuccessMessage, setShowSuccessMessage] = useState(false);
            const [values, setValues] = useState(initialValues);

            const handleSubmit = (e) => {
                 e.preventDefault();
                 setShowSuccessMessage(true);
             }; 

            const handleChanges = (e) => {
                setValues({ ...values, [e.target.name]: e.target.value });
            };

        /* const [setValues, values] = useLocalStorage(key,initialValues);

         * const handleChanges = e => {
         *     console.log(e.target.name);
         *     setValues({
         *         ...values,
         *         [e.target.name]: e.target.values
         * })
           }

         * const handleSubmit = e => {

         *     if(e) e.preventDefault();
         *     cb();
         * };

         * const clearForm = e => {
         *     e.preventDefault();
         *     setValues(initialValues);
         * } */

        return [ values, showSuccessMessage, handleSubmit, handleChanges ]

}
