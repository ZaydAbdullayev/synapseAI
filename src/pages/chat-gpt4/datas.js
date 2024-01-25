import { IoVideocam } from "react-icons/io5";
import { BsImageAlt } from "react-icons/bs";
import { AiFillCode } from "react-icons/ai";
import { RiPencilRuler2Fill } from "react-icons/ri";

export const datas = [
  {
    id: Math.random(),
    name: "Basic editing",
    concerning: 1,
    icon: <BsImageAlt />,
  },
  {
    id: Math.random(),
    name: "Retouching",
    concerning: 1,
    icon: <IoVideocam />,
  },
  {
    id: Math.random(),
    name: "Color correction",
    concerning: 1,
    icon: <AiFillCode />,
  },
  {
    id: Math.random(),
    name: "Creating collages",
    concerning: 1,
    icon: <BsImageAlt />,
  },
  {
    id: Math.random(),
    name: "Portfolio editing",
    concerning: 1,
    icon: <RiPencilRuler2Fill />,
  },
  {
    id: Math.random(),
    name: "Video cutting and merging",
    concerning: 2,
    icon: <IoVideocam />,
  },
  {
    id: Math.random(),
    name: "Color correction and applying color palettes",
    concerning: 2,
    icon: <AiFillCode />,
  },
  {
    id: Math.random(),
    name: "Audio editing and adding effects",
    concerning: 2,
    icon: <IoVideocam />,
  },
  {
    id: Math.random(),
    name: "Adding animated text",
    concerning: 2,
    icon: <BsImageAlt />,
  },
  {
    id: Math.random(),
    name: "Video effects and transitions",
    concerning: 2,
    icon: <IoVideocam />,
  },
  {
    id: Math.random(),
    name: "Creating three-dimensional models",
    concerning: 3,
    icon: <RiPencilRuler2Fill />,
  },
  {
    id: Math.random(),
    name: "Architectural visualization",
    concerning: 3,
    icon: <RiPencilRuler2Fill />,
  },
  {
    id: Math.random(),
    name: "Character design",
    concerning: 3,
    icon: <RiPencilRuler2Fill />,
  },
  {
    id: Math.random(),
    name: "3D printing preparation",
    concerning: 3,
    icon: <BsImageAlt />,
  },
  {
    id: Math.random(),
    name: "Product design",
    concerning: 3,
    icon: <RiPencilRuler2Fill />,
  },
  {
    id: Math.random(),
    name: "Online courses",
    concerning: 4,
    icon: <BsImageAlt />,
  },
  {
    id: Math.random(),
    name: "Individual tutoring sessions",
    concerning: 4,
    icon: <BsImageAlt />,
  },
  {
    id: Math.random(),
    name: "Training in software like Adobe Photoshop, Adobe Premiere Pro, Blender",
    concerning: 4,
    icon: <BsImageAlt />,
  },
  {
    id: Math.random(),
    name: "Photography and video production training",
    concerning: 4,
    icon: <BsImageAlt />,
  },
  {
    id: Math.random(),
    name: "3D design and modeling courses",
    concerning: 4,
    icon: <BsImageAlt />,
  },
  {
    id: Math.random(),
    name: "Podcast production",
    concerning: 5,
    icon: <RiPencilRuler2Fill />,
  },
  {
    id: Math.random(),
    name: "Voiceover recording for commercials and promotions",
    concerning: 5,
    icon: <IoVideocam />,
  },
  {
    id: Math.random(),
    name: "Audiobook recording",
    concerning: 5,
    icon: <IoVideocam />,
  },
  {
    id: Math.random(),
    name: "Radio advertisements",
    concerning: 5,
    icon: <IoVideocam />,
  },
  {
    id: Math.random(),
    name: "Voiceovers for animations",
    concerning: 5,
    icon: <IoVideocam />,
  },
];

export const chats = [
  {
    id: "9789740a-0ae9-49f4-b169-25c7d7e33af0",
    created_at: "2024-01-24T21:49:20.951493",
    bot_id: "17dced09-ed3a-474f-b750-9cfac6acf5fe",
    content:
      'Tabii, anladım. React.js kullanarak bir kullanıcının konuşma girişimlerini nasıl takip edebileceğinizi gösterebilirim. Öncelikle, React.js projesi oluşturmanız gerekecek.\n\nDaha sonra, bir "ChatBox" bileşeni oluşturabilirsiniz. Bu bileşen, kullanıcının giriş yaptığı metinleri ve sizin yanıtlarınızı içerecektir. Bunu yapmak için bir dizi veya veritabanı kullanabilirsiniz.\n\nİşte örnek bir kod yapısı:\n\n```jsx\nimport React, { useState } from \'react\';\n\nconst ChatBox = () => {\n  const [messages, setMessages] = useState([]);\n\n  const handleSendMessage = (message) => {\n    const newMessage = { text: message, sender: \'user\' };\n    setMessages([...messages, newMessage]);\n    // Bu aşamada, "message" değişkeni ile kullanıcının girişini alabilir ve mesaj dizisine ekleyebilirsiniz.\n    // Ayrıca, chatbot\'unuzun yanıtlarını hesaplayıp "messages" dizisine ekleyebilirsiniz.\n  };\n\n  return (\n    <div>\n      {messages.map((message, index) => (\n        <div key={index}>\n          {message.sender === \'user\' ? (\n            <p>Ben: {message.text}</p>\n          ) : (\n            <p>ChatBot: {message.text}</p>\n          )}\n        </div>\n      ))}\n      <input type="text" onChange={(e) => handleSendMessage(e.target.value)} />\n    </div>\n  );\n};\n\nexport default ChatBox;\n```\n\nBu örnekte, "messages" adında bir durum kullanıyoruz ve kullanıcının mesajlarını ve chatbot\'un yanıtlarını tutuyoruz. "handleSendMessage" fonksiyonu, kullanıcının girişini alır, bunu bir nesne olarak yeni bir mesaj olarak kaydeder ve mesaj dizisine ekler.\n\nUnutmayın, bu sadece temel bir örnektir. Gerçek bir chatbot uygulamasında daha karmaşık iş mantığı ve iletişim algoritmalarına ihtiyacınız olabilir. Ancak bu basit örnek, React.js ile kullanıcıların konuşma girişimlerini takip etmek için size bir başlangıç noktası sağlayabilir.\n\nUmarım yardımcı olabilmişimdir! Başka bir sorunuz varsa lütfen bana söyleyin.',
    role: "assistant",
  },
  {
    id: "8068aeec-d371-47fc-a03d-546a45e8a013",
    created_at: "2024-01-24T21:48:47.468471",
    bot_id: "17dced09-ed3a-474f-b750-9cfac6acf5fe",
    content:
      "oyleyse bana ik userin  konusmasinin itemleri lazim yani tipki seninle yazisiyoruz ya onun gibi react js de olmasi lazim",
    role: "user",
  },
  {
    id: "b623d4aa-1837-468c-bdfc-39c2338d45ec",
    created_at: "2024-01-24T21:47:47.44465",
    bot_id: "17dced09-ed3a-474f-b750-9cfac6acf5fe",
    content:
      "Tabii ki, kodlama konusunda yardımcı olabilirim! Hangi dil veya konu hakkında yardıma ihtiyacınız var? Ne tür bir projeye çalışıyorsunuz veya hangi konuya odaklanmak istersiniz? Size nasıl yardımcı olabilirim?",
    role: "assistant",
  },
  {
    id: "c2736e64-fb7c-4fcb-9eec-f5ce3ae03939",
    created_at: "2024-01-24T21:47:41.15243",
    bot_id: "17dced09-ed3a-474f-b750-9cfac6acf5fe",
    content: "kodlam isinda de yardimci olabilirmisin",
    role: "user",
  },
  {
    id: "bcdcb392-ff8e-44a3-aa95-f8633ab4fe50",
    created_at: "2024-01-24T21:47:15.418678",
    bot_id: "17dced09-ed3a-474f-b750-9cfac6acf5fe",
    content:
      "İyi olduğunuza sevindim! İşlerim iyi gidiyor, teşekkür ederim. Sizinkiler nasıl? Herhangi bir sorun var mı?",
    role: "assistant",
  },
  {
    id: "a878af5c-c26c-4aba-af21-4c0a4b030eaa",
    created_at: "2024-01-24T21:47:11.165183",
    bot_id: "17dced09-ed3a-474f-b750-9cfac6acf5fe",
    content: "bende iyiyim  saol isler nasil gidiyor",
    role: "user",
  },
  {
    id: "37baafc4-c292-4364-a7e8-54eb2bbc039d",
    created_at: "2024-01-24T21:46:42.492525",
    bot_id: "17dced09-ed3a-474f-b750-9cfac6acf5fe",
    content: "Merhaba! Ben iyiyim, teşekkür ederim. Siz nasılsınız?",
    role: "assistant",
  },
  {
    id: "323e68d0-0c21-4155-b40c-9b5b1859a074",
    created_at: "2024-01-24T21:46:38.373543",
    bot_id: "17dced09-ed3a-474f-b750-9cfac6acf5fe",
    content: "selam naber",
    role: "user",
  },
];
