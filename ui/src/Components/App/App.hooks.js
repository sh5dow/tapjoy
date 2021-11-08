import {useCallback, useState} from "react";

export const useCheckEnabled = (initialState = true) => {
    const [state, setState] = useState(initialState);
    const enabled = useCallback((inData) => setState(state => !inData), []);

    return [state, enabled];
}
