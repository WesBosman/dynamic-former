/* global fetch */
import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import logo from './logo.svg';
import './App.css';
import Viewbox from './components/Viewbox.js';
import Circle from './components/Circle.js';
import Rectangle from './components/Rectangle.js';

const App = () => {
  const [categories, setCategories] = useState([]);
  
  // const [message, setMessage] = useState('...loading')

  // useEffect(() => {
  //   async function fetchData () {
  //     try {
  //       let data = await (await fetch('/api')).json()
  //       setMessage(data.message)
  //     } catch (err) {
  //       setMessage(err.message)
  //     }
  //   }
  //   fetchData()
  // })

  return (
    <div className="App">
      <Formik 
        initialValues={{category: ''}}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Submit: ", values.category)

          setCategories(categories.concat(values.category))
          setSubmitting(false)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <div className="container mx-auto">
          <form onSubmit={handleSubmit} 
            className="flex justify-items-start items-end">
            <div>
              <label
                className="py-2 block text-sm text-left font-medium text-gray-700">
                Category Name
              </label>
              <input 
                className="py-2 px-4 focus:ring-blue-500 focus:border-blue-500 border-gray-400 bg-blue-gray-400"
                type="text"
                name="category"
                placeholder="Ex. Category 1"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.category}
              />
            </div>
            <button 
              type="submit"
              className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
              disabled={isSubmitting}>
              Submit
            </button>
          </form>
          </div>
        )}
      </Formik>
      
      <div className="container mx-auto">
        <ul className="my-4 flex justify-between">
          {categories.map((category, index) => {
            console.log("Category: ", category)
            return (
              <li key={index} className="flex justify-between items-center bg-blue-500 text-white w-1/2 gap-4">
                <span className="px-4">{category}</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      {/* <Viewbox>
        <Circle fill="hotpink" 
          cx="30" 
          cy="30" 
          radius="30"
        />
        <Rectangle 
          fill="transparent"
          stroke="green"
          strokeWidth="5"
          x="50"
          height="50"
          width="100"
          radius="10"
        />
      </Viewbox> */}
    </div>
  );
}

export default App;
