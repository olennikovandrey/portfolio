import scandiDemoAnim from "../../../assets/images/projects/scandi_demo.gif";
import modnikkyAnim from "../../../assets/images/projects/Modnikky_demo.gif";
import dictionaryAnim from "../../../assets/images/projects/dictionary_demo.gif";
import NotesEditorReactAmin from "../../../assets/images/projects/notes_react_demo.gif";
import NotesEditorAngularAmin from "../../../assets/images/projects/notes_angular_demo.gif";
import formValidateDemoAnim from "../../../assets/images/projects/form_validation_demo.gif";
import webLibruaryDemoAnim from "../../../assets/images/projects/web_libruary_demo.gif";

import scandiDemoImg from "../../../assets/images/projects/scandi_demo.png";
import modnikkyDemoImg from "../../../assets/images/projects/modnikky_demo.png";
import dictionaryDemoImg from "../../../assets/images/projects/dictionary_demo.png";
import NotesEditorReactImg from "../../../assets/images/projects/notes_react_demo.png";
import NotesEditorAngularImg from "../../../assets/images/projects/notes_angular_demo.png";
import formValidateDemoImg from "../../../assets/images/projects/form-demo.png";
import devLibruaryDemoImg from "../../../assets/images/projects/devlibruary_demo.png";

const projectsDataRU = [
  {
    title: "Онлайн магазин",
    description: "Онлайн магазин. Содержит различные категории, такие как 'Одежда' и 'Техника'. Фильтрация категорий по соответствующему запросу. Стэк: ReactJS, Redux, GraphQL, Apollo, CSS",
    anim: [scandiDemoAnim],
    image: [scandiDemoImg],
    GitLink: "https://github.com/olennikovandrey/scandi-test",
    deployLink: null
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
    title: "MODNIKKY",
    description: "Онлайн магазин одежды. Реализован процесс авторизации с использованием встроенных данных. Фильтрация продуктов по поисковому запросу",
    anim: [modnikkyAnim],
    image: [modnikkyDemoImg],
    GitLink: "https://github.com/olennikovandrey/if-diploma",
    deployLink: null
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
