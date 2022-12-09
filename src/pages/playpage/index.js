import React, { useEffect } from "react";
import "./playpage.css";
import request from '.../api/codeninja.js'

const request = 

const SearchResultContainer = () => {
  // Declare a new state variable, "results"
  const [results, setResults] = useState([]);

const searchApiNinja = async (model) => {
  const response = await request(model);
  setResults(response.data.data);
};
useEffect(() => {
  searchApiNinja('camry')
} );
return (
   <div>{}
     <ResultList results={results} />
   </div>
)
}
export default SearchResultContainer;

<input>search model here!</input>

 export default function Playpage() {
   return (
     <div>
       Play Page
      
       <div> </div>
       <div className="imagebox"></div>
       <div className="table">
         <div className="column">asdfasdfdfdsfafsadasdfasdfaf
         <div className="column1">asdfasdfdfdsfafsadasdfasdfaf</div>
         <div className="column1">asdfasdfdfdsfafsadasdfasdfaf</div>
         <div className="column1">asdfasdfdfdsfafsadasdfasdfaf</div>
         <div className="column1">asdfasdfdfdsfafsadasdfasdfaf</div>
         </div>
         <div className="column">asdfasdfdfdsfafsadasdfasdfaf
        <div className="column1">asdfasdfdfdsfafsadasdfasdfaf</div>
         <div className="column1">asdfasdfdfdsfafsadasdfasdfaf</div>
         <div className="column1">asdfasdfdfdsfafsadasdfasdfaf</div>
         <div className="column1">asdfasdfdfdsfafsadasdfasdfaf</div>
         </div>
         <div className="column">asdfasdfdfdsfafsadasdfasdfaf
         <div className="column1">asdfasdfdfdsfafsadasdfasdfaf</div>
         <div className="column1">asdfasdfdfdsfafsadasdfasdfaf</div>
         <div className="column1">asdfasdfdfdsfafsadasdfasdfaf</div>
         <div className="column1">asdfasdfdfdsfafsadasdfasdfaf</div>
         </div>
       </div>
     </div>
   );
 }
