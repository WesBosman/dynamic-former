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

  const clickedStartConnectorCircle = (categoryIndex, itemIndex) => {
    console.log("Clicked start connector circle: ", categoryIndex, " item index: ", itemIndex);
  }

  const clickedEndConnectorCircle = (categoryIndex, itemIndex) => {
    console.log("Clicked end connector circle: ", categoryIndex, " item index: ", itemIndex);
  }

  const addItemsToCategory = (index) => {
    console.log("Add Item to Category with Index: ", index)
    let category = categories[index]

    console.log("Category: ", category)
    category.values.push({
      key: '',
      value: '',
      startConnector: '',
      endConnector: ''
    })

    console.log("Category: ", category)

    setCategories(categories.map((item, indx) => {
      return index === indx ? {...item} : item
    }))
  };

  return (
    <div className="App bg-blue-300 overflow-y-none">
      <Formik 
        initialValues={{category: ''}}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Submit: ", values.category)

          setCategories(categories.concat({
            category: values.category,
            values: [],
            prev: null,
            next: null
          }))
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
          <div className="container px-10 pb-4">
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
      
      <div className="w-screen h-screen bg-gray-100 overflow-x-auto">
        <div className="container mx-10">
          <ul className="py-4 flex justify-start gap-8">
            {categories.map((item, index) => {
              console.log("Item: ", item)

              return (
                <div className="w-96 bg-gray-200 rounded">
                  <li key={index} className="flex justify-between items-center bg-blue-500 text-white rounded-t-sm">
                    <span className="px-4">{item.category}</span>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => addItemsToCategory(index)}>
                      Add
                    </button>
                  </li>
                  <ul>
                  {item.values.map((obj, objIndx) => {
                    return <li key={`${item.category}-${index}-${objIndx}`}
                      className="flex m-2 p-2 bg-gray-50 rounded">
                      <div className="bg-gray-300 rounded-full w-1/5 cursor-move"
                        onClick={() => clickedStartConnectorCircle(index, objIndx)}>
                      </div>
                      <div className="w-1/2">Key</div>
                      <div className="w-1/2">Value</div>
                      <div className="bg-gray-300 rounded-full w-1/5 cursor-move" 
                        onClick={() => clickedEndConnectorCircle(index, objIndx)}>
                      </div>
                    </li>
                  })}
                  </ul>
                </div>
              )
            })}
          </ul>
        </div>
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
