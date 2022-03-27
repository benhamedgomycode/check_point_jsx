
import './App.css';
import imageInSrc from "./imageInSrc.jpg";

function App() {
  return (
    <div className="App">
     

<div style={{border:'solid 1px black' , maxWidth:'100vw'}}>

 <h1 className="title red">Your name here</h1>

 <br/>

 <img src= {imageInSrc} />

 <br/>

 <img src="./imageInPublic.png" />

</div>

<video width="320" height="240" controls>

 <source src="https://www.youtube.com/watch?v=C6dm9JO8hiA" type="video/mp4" / >

</video>



    </div>
  );
}

export default App;
