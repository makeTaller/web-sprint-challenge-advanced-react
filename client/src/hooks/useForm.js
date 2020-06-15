// write your custom hook here to control your checkout form

import { useLocalStorage } from "./useLocalStorage";

    export const useForm = {key, initialValues, cb } => {

        const [setValues, values] = useLocalStorage(key,initialValues);

        const handleChanges = e => {
            console.log(e.target.name);
            setValues({
                ...values,
                [e.target.name]: e.target.values
        })
    }

        const handleSubmit = e => {

            if(e) e.preventDefault();
            cb();
        };

        const clearForm = e => {
            e.preventDefault();
            setValues(initialValues);
        }

        return [ values, clearForm, handleSubmit, handleChanges ]

}
