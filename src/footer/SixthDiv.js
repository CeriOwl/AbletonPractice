import React, { Component } from 'react'
const countries = require("../countries.json")

export default function SixthDiv() {
  const languages = ["English", "Deutsh", "Français", "日本語", "简体中文"]
    return (
      <div className='sixth-div'>
        <h3>Language and Location</h3>
        <div className='selects'>
          <select name='esto'>
            {languages.map(language => (
              <option value={language}>{language}</option>
            ))}
          </select>
          <select>
            <option>Please choose</option>
            <optgroup label='Common Countries'>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>France</option>
              <option>Germany</option>
              <option>Canada</option>
              <option>Japan</option>
              <option>China</option>
            </optgroup>
            <optgroup label='All Countries/Regions'>
              {
                countries.countries.map(country => (
                  <option value={country.name}>{country.name}</option>
                ))
              }
            </optgroup>
          </select>
          </div>
      </div>
    )
}

const validator = language => {
  console.log(language)
  if(language === "Deutsh") {
    return "selected"
  }
}