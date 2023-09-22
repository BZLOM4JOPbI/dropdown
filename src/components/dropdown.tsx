import { useState } from "react"


export default function DropdownMenu({ children, } : { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClickTrigger = (e: React.MouseEvent) => {
        console.log(e.target)
        setIsOpen(!isOpen)
    }
    return (
        <div className="dropdown">
            <div
                onClick={handleClickTrigger}
            >
                Dropdown
            </div>
            { isOpen && <div>{ children }</div> }
        </div>
    )
}