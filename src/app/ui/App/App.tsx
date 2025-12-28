import {Routing} from "@/common/routing";
import {Header} from "@/common/components";
import s from "./App.module.css"

function App() {

  return (
    <>
      <Header />
      <div className={s.container}>
        <Routing />
      </div>
    </>
  )
}

export default App
