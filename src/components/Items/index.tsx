import React from 'react'
import { useAppStore } from '../Store'
import HelpIcon from '../../assets/help-circle.svg'
import SmileIcon from '../../assets/smile.svg'
import MessageIcon from '../../assets/message-circle.svg'
import ImageIcon from '../../assets/image.svg'
import FrownIcon from '../../assets/frown.svg'
import { Container, ContainerItem, ItemIcon, ItemDescription } from './styles'
const items = [
  {
    title: 'Preguntas y respuestas',
    description: 'Responder preguntas basadas en su conocimiento.',
    iconPath: HelpIcon,
    background: '#1ac080',
    prompt:
      'I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer.\n\nQ: What is human life expectancy in the United States?\nA: Human life expectancy in the United States is 78 years.\n\nQ: Who was president of the United States in 1955?\nA: Dwight D. Eisenhower was president of the United States in 1955.\n\nQ: Which party did he belong to?\nA: He belonged to the Republican Party.\n\nQ: What is the square root of banana?\nA: Unknown\n\nQ: How does a telescope work?\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\n\nQ: Where were the 1992 Olympics held?\nA: The 1992 Olympics were held in Barcelona, Spain.\n\nQ: How many squigs are in a bonk?\nA: Unknown\n\nQ: Where is the Valley of Kings?\nA:',
  },
  {
    title: 'Película a Emoji',
    description: 'Convierte títulos de pelícualas en emojis.',
    iconPath: SmileIcon,
    background: '#f04146',
    prompt:
      'Convert movie titles into emoji.\n\nBack to the Future: 👨👴🚗🕒 \nBatman: 🤵🦇 \nTransformers: 🚗🤖 \nStar Wars:"',
  },
  {
    title: 'Chat de amigos',
    description: 'Emular una conversación de texto con un amigo.',
    iconPath: MessageIcon,
    background: '#f1a547',
    prompt:
      'You: What have you been up to?\nFriend: Watching old movies.\nYou: Did you watch anything interesting?\nFriend:',
  },
  {
    title: 'Generar imágenes',
    description: 'Genera imágenes a tu gusto.',
    iconPath: ImageIcon,
    background: '#de5bdd',
    prompt:
      'You: What have you been up to?\nFriend: Watching old movies.\nYou: Did you watch anything interesting?\nFriend:',
  },
  {
    title: 'Marv, el bot sarcástico',
    description: 'Genera imágenes a tu gusto.',
    iconPath: FrownIcon,
    background: '#f0a34b',
    prompt:
      'Marv is a chatbot that reluctantly answers questions with sarcastic responses:\n\nYou: How many pounds are in a kilogram?\nMarv: This again? There are 2.2 pounds in a kilogram. Please make a note of this.\nYou: What does HTML stand for?\nMarv: Was Google too busy? Hypertext Markup Language. The T is for try to ask better questions in the future.\nYou: When did the first airplane fly?\nMarv: On December 17, 1903, Wilbur and Orville Wright made the first flights. I wish they’d come and take me away.\nYou: What is the meaning of life?\nMarv: I’m not sure. I’ll ask my friend Google.\nYou: What time is it?\nMarv:',
  },
]

const Items = () => {
  let { selectPrompt } = useAppStore()

  return (
    <Container>
      {items.map((item: any, index: number) => (
        <ContainerItem key={index} onClick={() => selectPrompt(item.prompt)}>
          <ItemIcon background={item.background}>
            <img src={item.iconPath} alt={`${item.iconPath}`} />
          </ItemIcon>
          <ItemDescription>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </ItemDescription>
        </ContainerItem>
      ))}
    </Container>
  )
}

export default Items
