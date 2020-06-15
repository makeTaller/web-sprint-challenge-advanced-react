// write your custom hook here to control your checkout form
import   {useState} from "react";

/* import { useLocalStorage } from "./useLocalStorage"; */

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

        return [ values, showSuccessMessage, handleSubmit, handleChanges ];
}
