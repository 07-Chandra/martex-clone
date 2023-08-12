import Hero from "./components/Hero/Hero";
import Marketing from "./components/Marketing/Marketing";
import Progress from "./components/Progress/Progress";
import Result from "./components/Result/Result";
import Services from "./components/Services/Services";
import Strategies from "./components/Strategies/Strategies";
import Tools from "./components/Tools/Tools";
import Workflow from "./components/workflow/Workflow";
import Success from "./components/Success/Success";
import Solution from "./components/Solution/Solution";
import Integrate from "./components/Integrate/Integrate";
import Datadriven from "./components/Datadriven/Datadriven";
import Productivity from "./components/Productivity/Productivity";
import Automate from "./components/Automate/Automate";
import Article from "./components/Article/Article";
import Testomonial from "../app/components/Testomonial/Testomonial";

export default function Home() {
    return (
        <main
            style={{ display: "flex", flexDirection: "column", rowGap: "40px" }}
        >
            <Hero />
            <Services />
            <Result />
            <Workflow />
            <Marketing />
            <Tools />
            <Strategies />
            <Progress />
            <Success />
            <Solution />
            <Integrate />
            <Datadriven />
            <Productivity />
            <Testomonial />
            <Automate />
            <Article />
        </main>
    );
}
