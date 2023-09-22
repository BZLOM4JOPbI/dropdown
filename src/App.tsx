import DropdownMenu from './components/dropdown'
import style from './App.module.sass'


function App() {
    return (
        <div className={style.wrap}>
            <DropdownMenu>
                <ul className={style.list}>
                    <li className={style.list__element}>Element 1</li>
                    <li className={style.list__element}>Element 2</li>
                    <li className={style.list__element}>Element 3</li>
                </ul>
            </DropdownMenu>
            <DropdownMenu>
                <ul className={style.list}>
                    <li className={style.list__element}>Element 1</li>
                    <li className={style.list__element}>Element 2</li>
                    <li className={style.list__element}>Element 3</li>
                </ul>
            </DropdownMenu>
        </div>
  )
}

export default App
