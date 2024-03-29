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

const projectsDataEN = [
  {
    title: "Cinema",
    description: "Online service for buying movie tickets. The administrator part has been implemented to work with the database from the interface. The crown of buying a ticket is sending a letter with tickets to the specified postal address. Stack: ReactJS, Redux, NodeJS, Express.js, MongoDB, SASS, Stripe, socket-io",
    anim: [cinemaAnim],
    image: [cinemaImg],
    GitLink: "https://github.com/olennikovandrey/cinema_frontend",
    deployLink: "https://just-cinema.netlify.app"
  },
  {
    title: "Dev libruary",
    description: "Online libruary for developers, who uses different programming languagues. All data on google-disk. Stack: ReactJS, Redux, SASS",
    anim: [webLibruaryDemoAnim],
    image: [devLibruaryDemoImg],
    GitLink: "https://github.com/olennikovandrey/web-libruary",
    deployLink: "https://devlibruary.netlify.app/"
  },
  {
    title: "Online shop",
    description: "Online shop, that includes different categories of items like Dress & Tech. Filter products by search query. Stack: ReactJS, Redux, GraphQL, Apollo, CSS",
    anim: [scandiDemoAnim],
    image: [scandiDemoImg],
    GitLink: "https://github.com/olennikovandrey/scandi-test",
    deployLink: null
  },
  {
    title: "Two step registration form",
    description: "Registration form that provides two-step user data entry. Validation after each stage with subsequent display of the entered information / indication of data invalidity. Stack: ReactJS, Redux, SASS, Ajv JSON schema validator",
    anim: [scaledRegisterSPAAnim],
    image: [scaledRegisterSPAImg],
    GitLink: "https://github.com/olennikovandrey/scaled_register",
    deployLink: "https://scaledregister.netlify.app/"
  },
  {
    title: "Dictionary",
    description: "English dictionary. Source - https://dictionaryapi.dev/. Stack: React, Redux, Redux thunk, TypeScript, react router, CSS",
    anim: [dictionaryAnim],
    image: [dictionaryDemoImg],
    GitLink: "https://github.com/olennikovandrey/satellite-test",
    deployLink: "https://olennikov-dictionary.netlify.app"
  },
  {
    title: "Notes editor (ReactJS)",
    description: "Note text editor. Implemented the ability to add, edit, search by hashtag and delete",
    anim: [NotesEditorReactAmin],
    image: [NotesEditorReactImg],
    GitLink: "https://github.com/olennikovandrey/notes_editor",
    deployLink: "https://olennikov-notes-editor.netlify.app/"
  },
  {
    title: "Notes editor (Angular)",
    description: "Note text editor. Implemented the ability to add, edit, search by content and delete. Registration (authorization) of users",
    anim: [NotesEditorAngularAmin],
    image: [NotesEditorAngularImg],
    GitLink: "https://github.com/olennikovandrey/notes_editor_angular",
    deployLink: "https://olennikov-notes-editor-angular.netlify.app/"
  },
  {
    title: "Form validation",
    description: "Simple React TS form to check the correction of your entered data. All validation tests are handmade written, no any browser validation",
    anim: [formValidateDemoAnim],
    image: [formValidateDemoImg],
    GitLink: "https://github.com/olennikovandrey/form-validate",
    deployLink: "https://olennikov-form-validate.netlify.app"
  },
];

export default projectsDataEN;
