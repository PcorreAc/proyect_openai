import React, { useEffect, useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import fs from 'fs'
import axios from 'axios'
import SendIcon from '../../assets/send.svg'
import RefreshIcon from '../../assets/refresh-cw.svg'
import Images from '../../assets/superman.png'
import { ContainerImages, ContainerBox, ContainerForm, Form } from './styles'

type propsForm = {
  respuesta: any
  regenerateResponse: string
  setRespuesta: (res: any) => void
  setRegenerateResponse: (res: any) => void
  inputText: string
  setText: (event: any) => void
  getAnimals: (data: any) => void
}

const Formulario = ({
  respuesta,
  regenerateResponse,
  setRegenerateResponse,
  setRespuesta,
  inputText,
  setText,
  getAnimals,
}: propsForm) => {
  const [respuestas, setRespuestas] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [imageBase64, setImageBase64] = useState('')

  const configuration = new Configuration({
    apiKey: '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',
    baseOptions: {
      'Content-Type': 'application/json',
      Authorization: `Bearer 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`,
    },
  })
  const openai = new OpenAIApi(configuration)

  const header = {
    'Content-Type': 'application/json',
    Authorization: `Bearer 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`,
  }
  const header2 = {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer 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`,
  }

  const getImages = async (event: any) => {
    event.preventDefault()
    setIsLoading(true)
    console.log(imageBase64)
    const response = await axios.post(
      //'https://api.openai.com/v1/images/variations',
      'https://api.openai.com/v1/images/generations',
      {
        prompt: `${inputText}`,
        n: 3,
        size: '512x512',
      },
      { headers: header }
    )
    console.log('Respuesta____', response)
    setIsLoading(false)
    setRespuesta('')
    setRespuestas(response.data.data)
    setText('')
  }
  const createImages = async (event: any) => {
    event.preventDefault()
    setIsLoading(true)
    console.log(imageBase64)
    const response = await openai.createImage(
      {
        prompt: 'A cute baby sea otter',
        n: 3,
        size: '1024x1024',
      },
      { headers: header }
    )
    console.log('Respuesta____', response)
    setIsLoading(false)
    setRespuesta('')
    setRespuestas(response.data.data)
    setText('')
  }

  const handleChange = (event: any) => {
    event.preventDefault()
    setRegenerateResponse(event.target.value)
    setText(event.target.value)
  }
  const handleRegenerateResponse = () => {
    setText(regenerateResponse)
    getAnimals(event)
  }

  return (
    <ContainerBox>
      <p>
        {regenerateResponse ? `Última solicitud: ${regenerateResponse}` : ''}
      </p>
      {isLoading ? (
        <p>Cargando...</p>
      ) : respuesta !== '' ? (
        <p>{respuesta}</p>
      ) : (
        <ContainerImages>
          {respuestas.map((imagen: any, index: number) => (
            <img key={index} src={imagen.url} alt="" />
          ))}
        </ContainerImages>
      )}
      <ContainerForm>
        <Form onSubmit={getAnimals}>
          <input
            type="text"
            name="animal"
            placeholder="Comienza a interactuar"
            value={inputText}
            onChange={handleChange}
          />
          <img src={SendIcon} onClick={getImages} />
        </Form>
        <button onClick={createImages}>
          Regenerar respuesta
          <img src={RefreshIcon} alt="" />
        </button>
      </ContainerForm>
    </ContainerBox>
  )
}

export default Formulario
