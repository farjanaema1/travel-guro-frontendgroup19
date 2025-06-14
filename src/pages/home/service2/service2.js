import { faAmericanSignLanguageInterpreting, faCar, faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Service2 = () => {
    return (
      <section className="grid grid-cols-3 mt-16 w-4/5 mx-auto mb-16">
        <div style={{
            backgroundColor:'#e22937',
            color:'white'
        }} className="p-14">
        <FontAwesomeIcon  style={{
            height:30,
            width:30
        }} icon={faCar} />
            
      <h1  className="text-2xl font-bold mb-4 mt-4 font-link">New Adventure</h1>
     <p className="para-link">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, fuga.</p>
          </div>
        <div style={{
            backgroundColor:'#052046',
            color:'white'
        }} className="p-14">
     <FontAwesomeIcon  style={{
            height:30,
            width:30
        }} icon={faAmericanSignLanguageInterpreting} />
      <h1  className="text-2xl font-bold mb-4 mt-4 font-link">
      Spend your time</h1>
<p className="para-link">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, repellendus.</p>
          </div>
        <div style={{
           
          backgroundColor:'#11181e',
            color:'white'
        }} className="p-14">
      <FontAwesomeIcon  style={{
            height:30,
            width:30
        }} icon={faCopyright} />
     
            
      <h1 className="text-2xl font-bold mb-4 mt-4 font-link">
      Find favourite places</h1>
<p className="para-link">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, dolores.
</p>
          </div>
      
      </section>
    )
}
export default Service2;