import Hero from "./components/Hero/Hero";
import Marketing from "./components/Marketing/Marketing";
import Result from "./components/Result/Result";
import Services from "./components/Services/Services";
import Workflow from "./components/workflow/Workflow";


export default function Home() {
  return (
    <main>
      <Hero/>
      <Services/>
      <Result/>
      <Workflow/>
       <Marketing/>
    </main>
  )
}
