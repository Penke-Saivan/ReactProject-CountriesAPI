import React from 'react'
import { Link } from 'react-router-dom'

export default function CountryCard({name,src,population,region, capital,data}) {
  return (
    <Link to={`./${name}`} className="country-card" state={data} >
      <img src={src} alt="flag"/>
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p><b>Population: </b> {population}</p>
        <p><b>Region: </b> {region}</p>
        <p><b>Capital: </b>{capital}</p>
      </div></Link>
  )
}
