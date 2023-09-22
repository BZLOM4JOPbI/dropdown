import { useEffect, useRef } from "react"


const useOutsideClick = (callback: CallableFunction) => {
    const ref = useRef() as React.MutableRefObject<HTMLDivElement>

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            callback(e)
        }

        document.addEventListener('click', handleClick)

        return(() => {
            document.removeEventListener('click', handleClick)
        })

    }, [ref])

    return ref
}

export default useOutsideClick