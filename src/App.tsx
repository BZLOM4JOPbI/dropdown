import DropdownMenu from './components/dropdown'
import style from './App.module.sass'


function App() {
    return (
        <div className={style.wrap}>
            <div className={`${style.wrap__element} ${style['wrap__element_top-left']}`}>
                <DropdownMenu>
                    <ul className={style.list}>
                        <li className={style.list__element}>Element 1</li>
                        <li className={style.list__element}>Element 2</li>
                        <li className={style.list__element}>Element 3</li>
                    </ul>
                </DropdownMenu>
            </div>
            <div className={`${style.wrap__element} ${style['wrap__element_top-right']}`}>
                <DropdownMenu>
                    <ul className={style.list}>
                        <li className={style.list__element}>Element 1</li>
                        <li className={style.list__element}>Element 2</li>
                        <li className={style.list__element}>Element 3</li>
                    </ul>
                </DropdownMenu>
            </div>
            <div className={`${style.wrap__element} ${style['wrap__element_bottom-right']}`}>
                <DropdownMenu>
                    <ul className={style.list}>
                        <li className={style.list__element}>Element 1</li>
                        <li className={style.list__element}>Element 2</li>
                        <li className={style.list__element}>Element 3</li>
                    </ul>
                </DropdownMenu>
            </div>
            <div className={`${style.wrap__element} ${style['wrap__element_bottom-left']}`}>
                <DropdownMenu>
                    <ul className={style.list}>
                        <li className={style.list__element}>Element 1</li>
                        <li className={style.list__element}>Element 2</li>
                        <li className={style.list__element}>Element 3</li>
                    </ul>
                </DropdownMenu>
            </div>
        </div>
  )
}

export default App
