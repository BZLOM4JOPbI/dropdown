import { useEffect, useRef, useState } from "react"
import style from './dropdown.module.sass'
import useOutsideClick from "../hooks/outside_click";
import useIsOverflow from "../hooks/is_overflow";


export default function DropdownMenu({ children, } : { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClickOutside = (e: MouseEvent) => {
        if (!ref.current) return
        if (!e.target) return
        if ((ref.current as HTMLElement).classList.contains('dropdown_open')) {
            if (!(e.target as HTMLElement).closest('.dropdown_open')) {
                setIsOpen(false)
            }
        }
    }
    const ref = useOutsideClick(handleClickOutside)


    const handleClickTrigger = async () => { 
        if (isOpen) {
            setIsOpen(false)
        } else {
            setTimeout(() => {
                setIsOpen(true)
            })
        }
    }

    const handleScroll = (isOverflow: boolean) => {
        setBodyOverflow(isOverflow)
        if (isOverflow) {
            checkDirection()
        }
    }

    const dropdownTrigger = useRef() as React.MutableRefObject<HTMLButtonElement>
    const dropdownBody = useIsOverflow(handleScroll)


    const [bodyOverflow, setBodyOverflow] = useState<boolean>();
    const [isTop, setIsTop] = useState<boolean>();
    const [isLeft, setIsLeft] = useState<boolean>();

    const checkDirection = () => {
        const bodyRect = dropdownBody.current.getBoundingClientRect()
        const triggerRect = dropdownTrigger.current.getBoundingClientRect()

        // setIsTop(triggerRect.top > bodyRect.height)
        // setIsLeft(triggerRect.left > bodyRect.width)

        if (triggerRect.top > (window.innerHeight - triggerRect.bottom) && triggerRect.top > bodyRect.height) {
            // console.log('top')
            setIsTop(true)
        } else if (triggerRect.top < (window.innerHeight - triggerRect.bottom) && window.innerHeight - triggerRect.bottom > bodyRect.height) {
            // console.log('bottom')
            setIsTop(false)
        } else {
            setIsOpen(false)
        }

        if (triggerRect.left > (window.innerWidth - triggerRect.right) && triggerRect.left > bodyRect.width) {
            setIsLeft(true)
        } else if (triggerRect.left < (window.innerWidth - triggerRect.right) && (window.innerWidth - triggerRect.right) > bodyRect.width) {
            setIsLeft(false)
        } else {
            setIsOpen(false)
        }
    }


    useEffect(() => {
        if (isOpen) {
            handleScroll(false)
            checkDirection()
        }
    }, [isOpen])


    return (
        <>
            <div 
                className={`${style.dropdown} ${isOpen ? 'dropdown_open' : 'dropdown'}`} 
                ref={ref}
            >
                <button
                    className={style.dropdown__trigger}
                    onClick={handleClickTrigger}
                    ref={dropdownTrigger}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 128 512"
                    >
                        <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                    </svg>
                </button>
                { isOpen && 
                    <div 
                        className={`
                            ${style.dropdown__body} 
                            ${isTop ? style.dropdown__body_top : style.dropdown__body_bottom}
                            ${isLeft ? style.dropdown__body_left : style.dropdown__body_right}
                            ${bodyOverflow  && style.dropdown__body_hidden}
                        `}
                        ref={dropdownBody}
                    >
                        { children }
                    </div> 
                }
            </div>
        </>
    )
}