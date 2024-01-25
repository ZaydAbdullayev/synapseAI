import lodoH from "../assets/images/Logo_Heygen.svg";
import lodoR from "../assets/images/Logo_Bard.svg";
import lodoAdd from "../assets/images/plus-circle.svg";

export const ligthMode = {
  "--bg-color1": "#FCFDFE",
  "--bg-color2": "#F1F5F9",
  "--bg-color3": "#fff",
  "--bg-color4": "#333",
  "--bg-color5": "#E3CBFF",
  "--bg-color6": "#e3cbff",
  "--text-color1": "#181B1F",
  "--text-color2": "#292D32",
  "--text-color3": "#7C878E",
  "--text-color4": "#393E44",
  "--text-color5": "#fff",
  "--bg-btn1": "#181B1F",
  "--bg-btn2": "#331BD7",
  "--bg-btn3": "#735FFA",
  "--border-cl": "#BE87FF",
  "--border-cl2": "#ccc",
};

export const darkMode = {
  "--bg-color1": "#393E44",
  "--bg-color2": "#333",
  "--bg-color3": "#292D32",
  "--bg-color4": "#fff",
  "--bg-color5": "#eee5",
  "--bg-color6": "#e3cbff",
  "--text-color1": "#fff",
  "--text-color2": "#eee",
  "--text-color3": "#7C878E",
  "--text-color4": "#393E44",
  "--text-color5": "#333",
  "--bg-btn1": "#181B1F",
  "--bg-btn2": "#331BD7",
  "--bg-btn3": "#735FFA",
  "--border-cl": "#BE87FF",
  "--border-cl2": "#eee2",
};

export const navigations = [
  {
    id: 1,
    title: "Chat GPT-4",
    icon: require("../assets/images/logo GPT.png"),
    path: "/chat-gpt4",
  },
  {
    id: 2,
    title: "Chat GPT-3",
    icon: require("../assets/images/logo GPT3.png"),
    path: "/chat-gpt3",
  },
  {
    id: 3,
    title: "Chat S",
    icon: require("../assets/images/logo S.png"),
    path: "/chat-s",
  },
  {
    id: 4,
    title: "Chat X",
    icon: require("../assets/images/logo X.png"),
    path: "/chat-x",
  },
  {
    id: 5,
    title: "Synapse",
    icon: lodoH,
    path: "/synapse",
  },
  {
    id: 6,
    title: "Synapse",
    icon: lodoR,
    path: "/synapse",
  },
  {
    id: 7,
    title: "Chat Add",
    icon: lodoAdd,
    path: "/chat-add",
  },
];

const english = {
  layout: {
    loginBtn: "Join now",
    darkMode: "Dark mode",
    ligthMode: "Ligth mode",
  },
  home: {
    aiInfo:
      "OpenAI has created a model that surpasses ChatGPT in several areas, like math and physics equations, creative writing, and other difficult tasks.",
    title: "Title",
    lastModify: "Last modified",
    createdChat: "Created",
    members: "Members",
  },
  gpt4: {
    description:
      "Meet the synapse of our ai chat app revolutionizing conversations",
    selectMode: "Select mode",
    main: "Main",
    business: "Business",
    education: "Education",
    social: "Social",
    dallE: "DAAL-E",
  },
  sidebar: {
    noData: "You dont't have any chat yet... Let's create one!",
  },
  search: "Search chat",
  onlySearch: "Search",
  chat_input: "Ask me anything ...",
  upgarde: "Upgrade to pro",
  createChat: "Create new chat",
  notFound: "Page not found 404 !",
};

const russion = {
  layout: {
    loginBtn: "Присоединиться",
    darkMode: "Темный режим",
    ligthMode: "Светлый режим",
  },
  home: {
    aiInfo:
      "OpenAI создала модель, которая превосходит ChatGPT в нескольких областях, таких как математические и физические уравнения, творческое письмо и другие сложные задачи.",
    title: "Название",
    lastModify: "Последнее изменение",
    createdChat: "Создан",
    members: "Участники",
  },
  gpt4: {
    description:
      "Встречайте синапс нашего приложения для общения c искусственным интеллектом, революционизирующего разговоры",
    selectMode: "Выберите режим",
    main: "Главный",
    business: "Бизнес",
    education: "Образование",
    social: "Социальный",
    dallE: "DAAL-E",
  },
  sidebar: {
    noData: "Y вас еще нет ни одного чата ... Давайте создадим один!",
  },
  search: "Поиск чата",
  onlySearch: "Поиск",
  chat_input: "Спроси меня что-нибудь ...",
  upgarde: "Обновить до Pro",
  createChat: "Создать новый чат",
  notFound: "Страница не найдена 404 !",
};

export const language = () => {
  const language = JSON.parse(localStorage.getItem("language")) || "en";
  return language === "en" ? english : russion;
};
