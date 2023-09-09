import './App.css';
import Card from './components/Card';
const imgUrl = "data:image/png;base64,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"

const App = () =>{
  return(
    <div>
      <img src={imgUrl}/>
      <h1>MVP Baseball Cards: 2023</h1>
      <Card imgLink={"https://nypost.com/wp-content/uploads/sites/2/2023/09/Mookie-Betts-50-of-the-Los-Angeles-Dodgers-hits-a-three-run-home-run-against-starting-pitcher-Spencer-Strider-.jpg"} name={"Mookie Betts"} team={"Los Angeles Dodgers"}/>
      <Card imgLink ={
        "https://cdn.vox-cdn.com/thumbor/QmcIWzOzaC3RHydhkBg2aISfgp8=/0x0:3000x2200/1820x1213/filters:focal(1260x860:1740x1340):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72526925/1585418717.0.jpg"} name={"Ronald Acuna Jr."} team={"Atlanta Braves"}/>
    </div>
  )
}

export default App
