import { useLayoutEffect, useRef, } from "react"


const useIsOverflow = (callback: CallableFunction) => {
    const ref = useRef() as React.MutableRefObject<HTMLDivElement>

    useLayoutEffect(() => {
        const checkOverflow = () => {
            if (ref.current) {

                const elemRect = ref.current.getBoundingClientRect();
                
                callback(elemRect.bottom > window.innerHeight || elemRect.top < 0)
            }
        }

        const handleScroll = () => {
            checkOverflow()
        }

        document.addEventListener('scroll', handleScroll, { passive: true })

        return(() => {
            document.removeEventListener('scroll', handleScroll)
        })

    }, [ref, callback])

    return ref
}

export default useIsOverflow