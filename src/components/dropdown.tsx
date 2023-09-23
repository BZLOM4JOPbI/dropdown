import { useEffect, useRef, useState } from "react"
import style from './dropdown.module.sass'
import useOutsideClick from "../hooks/outside_click";


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
        // const activeDropdown = document.querySelector('.dropdown_open')
        // if (!activeDropdown) {
        //     e.stopPropagation()
        // }
        if (isOpen) {
            setIsOpen(false)
        } else {
            setTimeout(() => {
                setIsOpen(true)
            })
        }
    }

    const dropdownTrigger = useRef() as React.MutableRefObject<HTMLButtonElement>
    const dropdownBody = useRef() as React.MutableRefObject<HTMLDivElement>

    const [isTop, setIsTop] = useState<boolean>();
    const [isLeft, setIsLeft] = useState<boolean>();

    useEffect(() => {
        if (isOpen) {

            const bodyRect = dropdownBody.current.getBoundingClientRect()
            const triggerRect = dropdownTrigger.current.getBoundingClientRect()

            setIsTop(triggerRect.top > bodyRect.height)
            setIsLeft(triggerRect.left > bodyRect.width)
        }
    }, [isOpen])

    // const handleClickBody = (e: React.MouseEvent) => {
        // e.stopPropagation()
    // }


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
                        `}
                        // onClick={handleClickBody}
                        ref={dropdownBody}
                    >
                        { children }
                    </div> 
                }
            </div>
        </>
    )
}