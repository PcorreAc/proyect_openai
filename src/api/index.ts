import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: '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',

  baseOptions: {
    'Content-Type': 'application/json',
  },
})
const openai = new OpenAIApi(configuration)

const generatePrompt = (animal: string) => {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase()
  return `Suggest three names for an animal that is a superhero.

Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: ${capitalizedAnimal}
Names:`
}

export default class apiMethods {
  getAnimal = async () => {
    try {
      const completion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: generatePrompt('cat'),
        temperature: 0.6,
      })
      console.log(completion.data.choices[0].text)
      return { result: completion.data.choices[0].text }
    } catch (error) {
      console.log('An error occurred during your request.', error)
    }
  }
}
