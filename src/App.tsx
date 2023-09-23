import DropdownMenu from './components/dropdown'
import style from './App.module.sass'
import { DropdownStyle } from './types/dropdown'


function App() {

    const styleDropdownMenu: DropdownStyle = {
        height: '40px',
        width: '40px',
        backgroundColor: 'rgb(255 255 255)',
        borderRadius: '6px',
    }


    return (
        <div className={style.wrap}>
            <div className={`${style.wrap__element} ${style['wrap__element_top-left']}`}>
                <DropdownMenu styleDropdown={styleDropdownMenu}>
                    <ul className={style.list}>
                        <li className={style.list__element}>Element 1<span>&#128513;</span></li>
                        <li className={style.list__element}>Element 23 32 21<span>&#128513;</span></li>
                        <li className={style.list__element}>Element 33213 3213 3213 12 3123<span>&#128513;</span></li>
                    </ul>
                </DropdownMenu>
            </div>
            <div className={`${style.wrap__element} ${style['wrap__element_top-right']}`}>
                <DropdownMenu styleDropdown={styleDropdownMenu}>
                <ul className={style.list}>
                    <li className={style.list__element}>Element 1<span>&#128513;</span></li>
                    <li className={style.list__element}>Element 23 32 21<span>&#128513;</span></li>
                    <li className={style.list__element}>Element 33213 3213 3213 12 3123<span>&#128513;</span></li>
                </ul>
                </DropdownMenu>
            </div>
            <div className={`${style.wrap__element} ${style['wrap__element_bottom-right']}`}>
                <DropdownMenu styleDropdown={styleDropdownMenu}>
                <ul className={style.list}>
                    <li className={style.list__element}>Element 1<span>&#128513;</span></li>
                    <li className={style.list__element}>Element 23 32 21<span>&#128513;</span></li>
                    <li className={style.list__element}>Element 33213 3213 3213 12 3123<span>&#128513;</span></li>
                </ul>
                </DropdownMenu>
            </div>
            <div className={`${style.wrap__element} ${style['wrap__element_bottom-left']}`}>
                <DropdownMenu styleDropdown={styleDropdownMenu}>
                <ul className={style.list}>
                    <li className={style.list__element}>Element 1<span>&#128513;</span></li>
                    <li className={style.list__element}>Element 23 32 21<span>&#128513;</span></li>
                    <li className={style.list__element}>Element 33213 3213 3213 12 3123<span>&#128513;</span></li>
                </ul>
                </DropdownMenu>
            </div>
        </div>
  )
}

export default App
