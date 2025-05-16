import Nabvar from "../layouts/Navbar";
import Banner from "../layouts/Banner";
import Logro from "../layouts/Achievements"
import Plans from "../layouts/Plans"
import Facilities from "../layouts/Facilities";
import Location from "../layouts/Location";
import Contactme from "../layouts/Contact";
import Footer from "../layouts/footer";

const Home = () => {

    return (
        <div>
            <Nabvar/>
            <Banner/>
            <Logro/>
            <Plans/>
            <Facilities/>
            <Location/>
            <Contactme/>
            <Footer/>
        </div>
    )
}
export default Home