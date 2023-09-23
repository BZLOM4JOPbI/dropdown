import { useState } from "react"
import style from './dropdown.module.sass'
import useOutsideClick from "../hooks/outside_click";


export default function DropdownMenu({ children, } : { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClickOutside = () => {
        if (!ref.current) return
        if ((ref.current as HTMLElement).classList.contains('dropdown_open')) {
            setIsOpen(false)
        }
    }
    const ref = useOutsideClick(handleClickOutside)

    const handleClickTrigger = async (e: React.MouseEvent) => { 
        const activeDropdown = document.querySelector('.dropdown_open')
        if (!activeDropdown) {
            e.stopPropagation()
        }
        if (!isOpen) {
            setTimeout(() => {
                setIsOpen(true)
            })
        }
    }
    return (
        <>
            <div 
                className={`${style.dropdown} ${isOpen ? 'dropdown_open' : 'dropdown'}`} 
                ref={ref}
            >
                <button
                    className={style.dropdown__trigger}
                    onClick={handleClickTrigger}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 128 512"
                    >
                        <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                    </svg>
                </button>
                { isOpen && 
                    <div className={style.dropdown__body}>{ children }</div> 
                }
            </div>
        </>
    )
}