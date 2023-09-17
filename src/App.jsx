import './App.css';
import Card from './components/Card';
import FlipCard from './components/FlipCard';
import Backside from './components/Backside';
const imgUrl = "data:image/png;base64,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"

const App = () =>{
  return(
    <div id='root'>
      <div className="App">
        <div className="Header">
          <img src={imgUrl}/>
          <h1>MVP Baseball</h1>
        </div>
        <div className="container">
          <FlipCard front={
            <Card 
              imgLink={"https://nypost.com/wp-content/uploads/sites/2/2023/09/Mookie-Betts-50-of-the-Los-Angeles-Dodgers-hits-a-three-run-home-run-against-starting-pitcher-Spencer-Strider-.jpg"}
              name={"Mookie Betts"} 
              team={"Los Angeles Dodgers"}
              statsLink={"https://www.baseball-reference.com/players/b/bettsmo01.shtml"}
              />}
              back={<Backside
              name={"Mookie Betts"}
              avg={".310"}
              hrs={39}
              rbi={103}
              ops={"1.009"}
              />
            }
            />
            <FlipCard front={
              <Card 
              imgLink ={
                "https://cdn.vox-cdn.com/thumbor/QmcIWzOzaC3RHydhkBg2aISfgp8=/0x0:3000x2200/1820x1213/filters:focal(1260x860:1740x1340):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72526925/1585418717.0.jpg"} 
                name={"Ronald Acuna Jr."} 
                team={"Atlanta Braves"}
                statsLink={"https://www.baseball-reference.com/players/a/acunaro01.shtml"}
                />
            }

              back={<Backside
              name={"Ronald Acuna Jr."}
              avg={".337"}
              hrs={37}
              rbi={98}
              ops={"1.004"}
              />}
            />
            
            <FlipCard front={
                <Card
                imgLink={"https://www.wvnstv.com/wp-content/uploads/sites/76/2023/06/6498f0332d7d44.33111477.jpeg?strip=1"}
                name={"Freddie Freeman"}
                team={"Los Angeles Dodgers"}
                statsLink={"https://www.baseball-reference.com/players/f/freemfr01.shtml"}
              />
             
            }

              back={<Backside
                name={"Freddie Freeman"}
                avg={".334"}
                hrs={26}
                rbi={93}
                ops={.984}
              />}
            />
             
             <FlipCard front={
               <Card
               imgLink={"https://cdn.vox-cdn.com/thumbor/JhHqJ-jcULGwe_ROR0OCyXqYvPU=/0x0:5223x3585/1200x800/filters:focal(2195x1376:3029x2210)/cdn.vox-cdn.com/uploads/chorus_image/image/72415111/1504438577.0.jpg"}
               name={"Corbin Carrol"}
               team={"Arizona Diamondbacks"}
               statsLink={"https://baseball-reference.com/players/c/carroco02.shtml"}
             />
             
            }

              back={<Backside
                name={"Corbin Carrol"}
                avg={".279"}
                hrs={24}
                rbi={70}
                ops={".860"}
              />}
            />
             
             <FlipCard front={
             <Card
             imgLink={"https://i0.wp.com/www.sportstalkatl.com/wp-content/uploads/2022/04/dkb220409029-cin-vs-atl.jpg?fit=1000%2C667&ssl=1"}
             name={"Matt Olson"}
             team={"Atlanta Braves"}
             statsLink={"https://www.baseball-reference.com/players/o/olsonma02.shtml"}
           />
            }

              back={<Backside
                name={"Matt Olson"}
                avg={".281"}
                hrs={52}
                rbi={129}
                ops={"1.005"}
              />}
            />
             
             <FlipCard front={
                <Card
                imgLink={"https://www.sportsnet.ca/wp-content/uploads/2021/10/Los-Angeles-Angels-Shohei-Ohtani-1040x572.jpg"}
                name={"Shohei Ohtani"}
                team={"Los Angeles Angels of Anaheim"}
                statsLink={"https://www.baseball-reference.com/players/o/ohtansh01.shtml"}
              />
            }

              back={<Backside
                name={"Shohei Ohtani"}
                avg={".304"}
                hrs={44}
                rbi={95}
                ops={
                  "1.066"}
              />}
            />
             
             <FlipCard front={
             
            <Card
            imgLink={"https://media.bleacherreport.com/image/upload/v1661531399/qozdrtwv8vs2oue5zomx.jpg"}
            name={"Julio Rodriguez"}
            team={"Seattle Mariners"}
            statsLink={"https://www.baseball-reference.com/players/r/rodriju01.shtml"}
          />
            }

              back={<Backside
                name={"Julio Rodriguez"}
                avg={".290"}
                hrs={30}
                rbi={99}
                ops={".849"}
              />}
            />
             
             <FlipCard front={
             <Card
             imgLink={"https://imageio.forbes.com/specials-images/imageserve//62a9135aae0a70d45ca13aff/0x0.jpg?format=jpg&width=1200"}
             name={"Corey Seager"}
             team={"Texas Rangers"}
             statsLink={"https://www.baseball-reference.com/players/s/seageco01.shtml"}
           />
            }

              back={<Backside
                name={"Corey Seager"}
                avg={".340"}
                hrs={31}
                rbi={92}
                ops={"1.060"}
              />}
            />
             
             <FlipCard front={
             <Card
             imgLink={"https://s.yimg.com/ny/api/res/1.2/LC7wq8zWGIwBroWmGq7twg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MA--/https://s.yimg.com/os/creatr-uploaded-images/2022-06/1ea7c8e0-e738-11ec-bc1d-72447a69da0a"}
             name={"Marcus Semien"}
             team={"Texas Rangers"}
             statsLink={"https://www.baseball-reference.com/players/s/semiema01.shtml"}
           />
            }

              back={<Backside
                name={"Marcus Semien"}
                avg={".276"}
                hrs={24}
                rbi={89}
                ops={".815"}
              />}
            />
              <FlipCard front={
               <Card
               imgLink={"https://www.usatoday.com/gcdn/presto/2022/03/25/USAT/d6764ee4-c8cc-48aa-8de0-481c7fd39855-Witt_1_.jpg?width=1200&disable=upscale&format=pjpg&auto=webp"}
               name={"Bobby Witt"}
               team={"Kansas City Royals"}
               statsLink={"https://www.baseball-reference.com/players/w/wittbo02.shtml"}
             />
            }

              back={<Backside
                name={"Bobby Witt"}
                avg={".280"}
                hrs={29}
                rbi={90}
                ops={".823"}
              />}
            />
          
           
            
         
            
            
          
            

          
        </div>
      </div>
    </div>
  )
}

export default App
