import {useState} from 'react'

const useInput = (validateValue)=>{
    const [value, setValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const validValue = validateValue(value);
    const invalidInput = !validValue && isTouched;

    const valueChangeHandler = (e) => {
        setValue(e.target.value)
    }

    const isTouchedHandler = () => {
        setIsTouched(true)
        
    }

    const submit = ()=> {
        setIsTouched(true)
    }

    const reset = ()=> {
        setIsTouched(false);
        setValue('');
    }

    return {
        value,
        invalidInput,
        validValue,
        valueChangeHandler,
        isTouchedHandler,
        submit,
        reset
    }
}

export default useInput;