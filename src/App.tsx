import DropdownMenu from './components/dropdown'
import style from './App.module.sass'


function App() {
    console.log(style)
    return (
        <>
            <DropdownMenu>
                <div className={style.red}>
                    dropdown element
                </div>
            </DropdownMenu>
        </>
  )
}

export default App
