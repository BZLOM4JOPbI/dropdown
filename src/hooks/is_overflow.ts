import { useLayoutEffect, useRef, } from "react"
import throttle from "../utils/throttle"


const useIsOverflow = (callback: CallableFunction) => {
    const ref = useRef() as React.MutableRefObject<HTMLDivElement>

    useLayoutEffect(() => {
        const checkOverflow = () => {
            if (ref.current) {

                const elemRect = ref.current.getBoundingClientRect();
                
                callback(elemRect.bottom > window.innerHeight || elemRect.top < 0)
            }
        }

        const debouncedHandle = throttle(checkOverflow, 50)

        document.addEventListener('scroll', debouncedHandle, { passive: true })

        return(() => {
            document.removeEventListener('scroll', debouncedHandle)
        })

    }, [ref, callback])

    return ref
}

export default useIsOverflow