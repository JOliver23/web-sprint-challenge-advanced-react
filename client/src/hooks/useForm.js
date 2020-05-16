// write your custom hook here to control your checkout form
import { useEffect } from 'react';

export const useForm = (initialState, key) => {
    const [value, setValue] = useState(initialState, key);
    useEffect(() => {
        if (value) {
            document.querySelector("body")
        }
    }, [value])
}