import scandiDemoAnim from "../../../assets/images/projects/scandi_demo.gif";
import dictionaryAnim from "../../../assets/images/projects/dictionary_demo.gif";
import NotesEditorReactAmin from "../../../assets/images/projects/notes_react_demo.gif";
import NotesEditorAngularAmin from "../../../assets/images/projects/notes_angular_demo.gif";
import formValidateDemoAnim from "../../../assets/images/projects/form_validation_demo.gif";
import webLibruaryDemoAnim from "../../../assets/images/projects/web_libruary_demo.gif";
import scaledRegisterSPAAnim from "../../../assets/images/projects/scaled_register_SPA_demo.gif";
import cinemaAnim from "../../../assets/images/projects/cinema_demo.gif";

import scandiDemoImg from "../../../assets/images/projects/scandi_demo.png";
import dictionaryDemoImg from "../../../assets/images/projects/dictionary_demo.png";
import NotesEditorReactImg from "../../../assets/images/projects/notes_react_demo.png";
import NotesEditorAngularImg from "../../../assets/images/projects/notes_angular_demo.png";
import formValidateDemoImg from "../../../assets/images/projects/form-demo.png";
import devLibruaryDemoImg from "../../../assets/images/projects/devlibruary_demo.png";
import scaledRegisterSPAImg from "../../../assets/images/projects/scaled_register_SPA_demo.png";
import cinemaImg from "../../../assets/images/projects/cinema_demo.png";

const projectsDataRU = [
  {
    title: "Кинотеатр",
    description: "Онлайн сервис для покупки билетов в кино. Реализована администраторская часть для работы с БД из интерфейса. Венцом покупки билета является отправка письма с билетами на указанный почтовый адрес. Стэк: ReactJS, Redux, NodeJS, Express.js, MongoDB, SASS, Stripe, socket-io",
    anim: [cinemaAnim],
    image: [cinemaImg],
    GitLink: "https://github.com/olennikovandrey/cinema_frontend",
    deployLink: "https://just-cinema.netlify.app"
  },
  {
    title: "Dev libruary",
    description: "Онлайн библиотека для разработчиков, пишущих на различных языках программироваия. Материал на google-диске. Стэк: ReactJS, Redux, SASS",
    anim: [webLibruaryDemoAnim],
    image: [devLibruaryDemoImg],
    GitLink: "https://github.com/olennikovandrey/web-libruary",
    deployLink: "https://devlibruary.netlify.app/"
  },
  {
    title: "Онлайн магазин",
    description: "Онлайн магазин. Содержит различные категории, такие как 'Одежда' и 'Техника'. Фильтрация категорий по соответствующему запросу. Стэк: ReactJS, Redux, GraphQL, Apollo, CSS",
    anim: [scandiDemoAnim],
    image: [scandiDemoImg],
    GitLink: "https://github.com/olennikovandrey/scandi-test",
    deployLink: null
  },
  {
    title: "Двухэтапная форма регистрации",
    description: "Форма регистрации, предусматривающая двухэтапный ввод пользовательских данных. Валидация после каждого этапа с последующим отображением введнной информации/указанаием невалидности данных. Стэк: ReactJS, Redux, SASS, Ajv JSON schema validator",
    anim: [scaledRegisterSPAAnim],
    image: [scaledRegisterSPAImg],
    GitLink: "https://github.com/olennikovandrey/scaled_register",
    deployLink: "https://scaledregister.netlify.app/"
  },
  {
    title: "Толковый словарь",
    description: "Английский толковый словарь. Источник - https://dictionaryapi.dev/. Стэк: React, Redux, Redux thunk, TypeScript, react router, CSS",
    anim: [dictionaryAnim],
    image: [dictionaryDemoImg],
    GitLink: "https://github.com/olennikovandrey/satellite-test",
    deployLink: "https://olennikov-dictionary.netlify.app"
  },
  {
    title: "Редактор заметок (ReactJS)",
    description: "Текстовый редактор заметок. Реализована возможность добавления, редактирования, поиска по хэштегу и удаления заметок",
    anim: [NotesEditorReactAmin],
    image: [NotesEditorReactImg],
    GitLink: "https://github.com/olennikovandrey/notes_editor",
    deployLink: "https://olennikov-notes-editor.netlify.app/"
  },
  {
    title: "Редактор заметок (Angular)",
    description: "Текстовый редактор заметок. Реализована возможность добавления, редактирования, поиска по содержимому и удаления. Регистрация (авторизация) пользователей",
    anim: [NotesEditorAngularAmin],
    image: [NotesEditorAngularImg],
    GitLink: "https://github.com/olennikovandrey/notes_editor_angular",
    deployLink: "https://olennikov-notes-editor-angular.netlify.app/"
  },
  {
    title: "Form validation",
    description: "Простая форма, написанная на React TS, для проверки правильности введенных данных. Вся валидация написана вручную",
    anim: [formValidateDemoAnim],
    image: [formValidateDemoImg],
    GitLink: "https://github.com/olennikovandrey/form-validate",
    deployLink: "https://olennikov-form-validate.netlify.app"
  },
];

export default projectsDataRU;
