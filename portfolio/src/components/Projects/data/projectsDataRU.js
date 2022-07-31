import scandiDemoAnim from "../../../assets/images/projects/scandi_demo.gif";
import tripHouseDemoAnim from "../../../assets/images/projects/TripHouse_demo.gif";
import modnikkyAnim from "../../../assets/images/projects/Modnikky_demo.gif";
import dictionaryAnim from "../../../assets/images/projects/dictionary_demo.gif";
import NotesEditorReactAmin from "../../../assets/images/projects/notes_react_demo.gif";
import NotesEditorAngularAmin from "../../../assets/images/projects/notes_angular_demo.gif";
import formValidateDemoAnim from "../../../assets/images/projects/form_validation_demo.gif";
import scandiDemoImg from "../../../assets/images/projects/scandi_demo.png";
import tripHouseDemoImg from "../../../assets/images/projects/triphouse_demo.png";
import modnikkyDemoImg from "../../../assets/images/projects/modnikky_demo.png";
import dictionaryDemoImg from "../../../assets/images/projects/dictionary_demo.png";
import NotesEditorReactImg from "../../../assets/images/projects/notes_react_demo.png";
import NotesEditorAngularImg from "../../../assets/images/projects/notes_angular_demo.png";
import formValidateDemoImg from "../../../assets/images/projects/form-demo.png";

const projectsDataRU = [
  {
    title: "Онлайн магазин",
    description: "Онлайн магазин, содержащий различные категории такие как 'Одежда' и 'Техника'. Получение данных при помощи graphQL. Фильтрация категорий по соотствующему запросу",
    anim: [scandiDemoAnim],
    image: [scandiDemoImg],
    GitLink: "https://github.com/olennikovandrey/scandi-test",
    deployLink: null
  },
  {
    title: "TripHouse",
    description: "Сайт туристического агенства для бронирования жилья",
    anim: [tripHouseDemoAnim],
    image: [tripHouseDemoImg],
    GitLink: "https://github.com/olennikovandrey/if-js/tree/main/TripHouse",
    deployLink: null
  },
  {
    title: "MODNIKKY",
    description: "Онлайн магазин одежды. Реализован процесс авторизации с использованием встроенных данных. Фильтрация продуктов по поисковому запросу",
    anim: [modnikkyAnim],
    image: [modnikkyDemoImg],
    GitLink: "https://github.com/olennikovandrey/if-diploma",
    deployLink: null
  },
  {
    title: "Толковый словарь",
    description: "Английский толковый словарь. Источник - https://dictionaryapi.dev/. Технологии: React, Redux, Redux thunk, TypeScript, react router, css",
    anim: [dictionaryAnim],
    image: [dictionaryDemoImg],
    GitLink: "https://github.com/olennikovandrey/satellite-test",
    deployLink: "https://olennikov-dictionary.netlify.app"
  },
  {
    title: "Редактор заметок (ReactJS)",
    description: "Текстовый редактор заметок. Реализована возможность добаления, редактирования, поиска по хэштегу и удаления заметок",
    anim: [NotesEditorReactAmin],
    image: [NotesEditorReactImg],
    GitLink: "https://github.com/olennikovandrey/notes_editor",
    deployLink: "https://olennikov-notes-editor.netlify.app/"
  },
  {
    title: "Редактор заметок (Angular)",
    description: "Текстовый редактор заметок. Реализована возможность добаления, редактирования, поиска по содержимому и удаления. Регистрация (авторизация) пользователей",
    anim: [NotesEditorAngularAmin],
    image: [NotesEditorAngularImg],
    GitLink: "https://github.com/olennikovandrey/notes_editor_angular",
    deployLink: "https://olennikov-notes-editor-angular.netlify.app/"
  },
  {
    title: "Form validation",
    description: "Простая форма, написанная на React TS, для проверки правильности введенных данных. Вся валидация написана вречную",
    anim: [formValidateDemoAnim],
    image: [formValidateDemoImg],
    GitLink: "https://github.com/olennikovandrey/form-validate",
    deployLink: "https://olennikov-form-validate.netlify.app"
  },
];

export default projectsDataRU;
