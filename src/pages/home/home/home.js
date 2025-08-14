
import Banner from "../banner/banner";
import Places from "../places/places";
import Feedback from "../feedback/feedback";
import GetTouch from "../getTouch/getTouch";
import Offer from "../offer/offer";
import Service1 from "../service1/service1";
import Service2 from "../service2/service2";
import Service3 from "../service3/service3";
import Service4 from "../service4/service4";
import Destination from "../../destinition/destination";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Service1></Service1>
           <Service2></Service2>
           <Service3></Service3>
           <Service4></Service4>
          
           <Places></Places>
           <Destination></Destination>
           <Feedback></Feedback>
           <Offer></Offer>
           <GetTouch></GetTouch>
        </div>
    )
}
export default Home;