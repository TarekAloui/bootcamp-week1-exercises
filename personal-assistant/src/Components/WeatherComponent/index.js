import React, { useEffect, useState } from 'react'
import { geolocated, geoPropTypes } from 'react-geolocated'
import {
  WeatherContainer, Greeting, DateComp, WeatherImg,
} from './styles'

const GreetingComponent = () => {
  const date = new Date()
  let message = 'Hi'
  if (date.getHours() > 12) message = 'Good afternoon!'
  else if (date.getHours() < 12) message = 'Good morning!'
  else message = "It's Lunch time !"
  return (
    <div>
      <DateComp>{date.toLocaleTimeString()}</DateComp>
      <Greeting>{message}</Greeting>
    </div>
  )
}

const WeatherComponent = props => {
  const { isGeolocationAvailable, isGeolocationEnabled, coords } = props
  const [weatherData, setWeatherData] = useState('')
  const [weatherImgUrl, setWeatherImgUrl] = useState('')
  if (coords) console.log(`coordinates are: ${coords.latitude} ${coords.longitude}`)
  useEffect(() => {
    const editWeather = async () => {
      if (coords) {
        const lat = coords.latitude
        const lon = coords.longitude
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=db5bbba816b58757082ce2230c7754a6&units=imperial`)
        const d = await res.json()
        const { weather } = d
        const API_KEY = '19986185-5fe52ab65837b6afc7efa08eb'
        const res_img = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${weather[0].main}&image_type=photo`)
        const res_img_json = await res_img.json()
        const url = res_img_json.hits[0].webformatURL
        console.log(`Url ${url}`)
        setWeatherImgUrl(url)
        console.log(weather[0])
        setWeatherData(weather[0])
      }
    }
    try {
      editWeather()
    } catch (error) {
      console.log(error.message)
    }
  }, [coords])
  return (
    <WeatherContainer>
      {weatherImgUrl
        && <WeatherImg src={weatherImgUrl} alt={weatherData.main} />}
      <GreetingComponent />
      {!isGeolocationAvailable ? (!isGeolocationEnabled ? <p>Please enable your geolocation</p>
        : <p>Weather Information Unavailable</p>)
        : (
          <p>
            {weatherData.description}
          </p>
        )}
    </WeatherContainer>
  )
}

WeatherComponent.propTypes = { ...WeatherComponent.propTypes, ...geoPropTypes }

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: null,
})(WeatherComponent)
