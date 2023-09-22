import { useState } from "react"


export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClickTrigger = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="dropdown">
            <div
                onClick={handleClickTrigger}
            >
                Dropdown
            </div>
            { isOpen && <div>Is open</div> }
        </div>
    )
}