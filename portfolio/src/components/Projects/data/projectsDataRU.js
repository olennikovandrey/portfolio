import scandiDemoAnim from "../../../assets/images/projects/scandi_demo.gif";
import tripHouseDemoAnim from "../../../assets/images/projects/TripHouse_demo.gif";
import modnikkyAnim from "../../../assets/images/projects/Modnikky_demo.gif";
import dictionaryAnim from "../../../assets/images/projects/dictionary_demo.gif";
import scandiDemoImg from "../../../assets/images/projects/scandi_demo.png";
import tripHouseDemoImg from "../../../assets/images/projects/triphouse_demo.png";
import modnikkyDemoImg from "../../../assets/images/projects/modnikky_demo.png";
import dictionaryDemoImg from "../../../assets/images/projects/dictionary_demo.png";

const projectsDataRU = [
  {
    title: "Онлайн магазин Scandi (некоммерческий проект)",
    description: "Онлайн магазин, содержащий различные категории такие как 'Одежда' и 'Техника'. Получение данных при помощи graphQL. Фильтрация категорий по соотствующему запросу",
    anim: [scandiDemoAnim],
    image: [scandiDemoImg],
    link: "https://github.com/olennikovandrey/scandi-test"
  },
  {
    title: "TripHouse (некоммерческий проект)",
    description: "Сайт туристического агенства для бронирования жилья",
    anim: [tripHouseDemoAnim],
    image: [tripHouseDemoImg],
    link: "https://github.com/olennikovandrey/if-js/tree/main/TripHouse"
  },
  {
    title: "MODNIKKY (некоммерческий проект)",
    description: "Онлайн магазин одежды. Реализован процесс авторизации с использованием встроенных данных. Фильтрация продуктов по поисковому запросу",
    anim: [modnikkyAnim],
    image: [modnikkyDemoImg],
    link: "https://github.com/olennikovandrey/if-diploma"
  },
  {
    title: "Толковый словарь (некоммерческий проект)",
    description: "Английский толковый словарь. Источник - https://dictionaryapi.dev/. Технологии: React, Redux, Redux thunk, TypeScript, react router, css",
    anim: [dictionaryAnim],
    image: [dictionaryDemoImg],
    link: "https://github.com/olennikovandrey/satellite-test"
  },
];

export default projectsDataRU;
