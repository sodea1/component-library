import { useEffect, useRef } from "react";

// populates state on initial render of component
// takes in URL to make GET request & setState function
export const useFetch = (url, setStateCallback) => {
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setStateCallback([...data]))
            // .then(data => console.log(data))
            .catch(err => console.log(err))
    }, [])
}

export const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback])

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay])
};