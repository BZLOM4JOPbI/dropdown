import { useEffect, useRef } from "react"


const useOutsideClick = (callback: CallableFunction) => {
    const ref = useRef()

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const handleClick = (e: MouseEvent) => {
            callback()
        }

        document.addEventListener('click', handleClick)

        return(() => {
            document.removeEventListener('click', handleClick)
        })

    }, [ref])

    return ref
}

export default useOutsideClick