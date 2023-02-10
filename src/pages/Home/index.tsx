import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useAppStore } from '../../components/Store'
import Formulario from '../../components/Formulario'
import Items from '../../components/Items'
import { Container } from './styles'
const Home = () => {
  const [text, setText] = useState('')
  const [regenerateResponse, setRegenerateResponse] = useState('')
  const [respuesta, setRespuesta] = useState('')
  let { promptSelected } = useAppStore()
  const header = {
    'Content-Type': 'application/json',
    Authorization: `Bearer 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`,
  }

  const generatePrompt = (animal: string) => {
    const capitalizedAnimal =
      animal && animal[0].toUpperCase() + animal.slice(1).toLowerCase()
    return `${promptSelected}
  

  ${capitalizedAnimal}: 
  `
  }

  const getAnimals = async (event: any) => {
    event.preventDefault()
    const response = await axios.post(
      'https://api.openai.com/v1/engines/text-davinci-003/completions',
      {
        prompt: generatePrompt(`${text}`),
        temperature: 0.9,
        max_tokens: 500,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0.6,
      },
      { headers: header }
    )
    setRespuesta(response.data.choices[0].text)
    setRegenerateResponse(text)
    setText('')
  }

  return (
    <Container>
      <Items />
      <Formulario
        inputText={text}
        regenerateResponse={regenerateResponse}
        setRegenerateResponse={setRegenerateResponse}
        setRespuesta={setRespuesta}
        setText={setText}
        getAnimals={getAnimals}
        respuesta={respuesta}
      />
    </Container>
  )
}

export default Home
