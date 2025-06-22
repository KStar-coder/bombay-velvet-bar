import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
    return (
        <div className="h-[100vh] flex-center">App</div>
    )
}

export default App;