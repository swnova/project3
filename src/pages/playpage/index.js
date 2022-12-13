// import React, { useEffect } from "react";
// import { useState, useEffect } from 'react';
import "./playpage.css";
// import request from '.../api/codeninja.js'
// import API from "../../utils/API";
// import { getSearchParamsForLocation } from "react-router-dom/dist/dom";
import SearchResultContainer from "./search";
import Modal from "react-modal";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// const SearchResultContainer = () => {
//   // Declare a new state variable, "results"
//   const [results, setResults] = useState([]);
//   const [search, setSearch] = useState('');

//   const searchCar = (query) =>
//   API.search(query)
//   .then((res) => setResult(res.data))
//   .catch()

// const searchApiNinja = async (model) => {
//   const response = await request(model);
//   setResults(response.data.data);
// };
// useEffect(() => {
//   searchApiNinja('camry')
// } );
// return (
//    <div>{}
//      <ResultList results={results} />
//    </div>
// )
// }
// export default SearchResultContainer;

// <input
// type="text"
// className="search"
// placeholder="Search for car model here"></input>

export default function Playpage({ currentPage, handlePageChange }) {
  const [isOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function CloseModal() {
    setIsOpen(false);
  }

  return (
    // <Router>
    <div>
        
      <div className="imagebox"></div>
      <div className="table">
        <div className="column">
          asdfasdfdfdsfafsadasdfasdfaf
          <div className="column1">asdfasdfdfdsfafsadasdfasdfaf</div>
          <div className="column1">asdfasdfdfdsfafsadasdfasdfaf</div>
          <div className="column1">asdfasdfdfdsfafsadasdfasdfaf</div>
          <div className="column1">asdfasdfdfdsfafsadasdfasdfaf</div>
        </div>
        <div className="column">
          asdfasdfdfdsfafsadasdfasdfaf
          <div className="column1">asdfasdfdfdsfafsadasdfasdfaf</div>
          <div className="column1">asdfasdfdfdsfafsadasdfasdfaf</div>
          <div className="column1">asdfasdfdfdsfafsadasdfasdfaf</div>
          <div className="column1">asdfasdfdfdsfafsadasdfasdfaf</div>
        </div>
        <div className="column">
          asdfasdfdfdsfafsadasdfasdfaf
          <div className="column1">asdfasdfdfdsfafsadasdfasdfaf</div>
          <div className="column1">asdfasdfdfdsfafsadasdfasdfaf</div>
          <div className="column1">asdfasdfdfdsfafsadasdfasdfaf</div>
          <div className="column1">asdfasdfdfdsfafsadasdfasdfaf</div>
        </div>
      </div>
      <Link to="/finalscore" className="link-btn">
        Finished Playing?
      </Link>
      
      <Modal isOpen={isOpen}>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                  Additional Car Information
                </h3>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  return
                </p>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={CloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </Modal>
      {/* const infoContainer = () => {
        const [results, setResults] = useState([]);

        const searchApi = async (query) => {
            const response = await search(query);
            setResults(response.data.data);
        };

        useEffect(() => {
            searchApi('');
        },[]); */}
      {/* return (
            <div>
                {}
                <InfoModal results={results} />
            </div>
        ) */}
      {/* } */}
    </div>
    /* //     </Router> */
  );
}
