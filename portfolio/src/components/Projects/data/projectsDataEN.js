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

const projectsDataEN = [
  {
    title: "Online shop",
    description: "Online shop, that includes different categories of items like Dress & Tech. All data is in graphQL scheme. Filter products by search query",
    anim: [scandiDemoAnim],
    image: [scandiDemoImg],
    GitLink: "https://github.com/olennikovandrey/scandi-test",
    deployLink: null
  },
  {
    title: "TripHouse",
    description: "Landing-page for online travel agency for lodging reservations",
    anim: [tripHouseDemoAnim],
    image: [tripHouseDemoImg],
    GitLink: "https://github.com/olennikovandrey/if-js/tree/main/TripHouse",
    deployLink: null
  },
  {
    title: "MODNIKKY",
    description: "Online dress shop. The process of authorization using embedded data is implemented. Filter products by search query",
    anim: [modnikkyAnim],
    image: [modnikkyDemoImg],
    GitLink: "https://github.com/olennikovandrey/if-diploma",
    deployLink: null
  },
  {
    title: "Dictionary",
    description: "English dictionary. Source - https://dictionaryapi.dev/. Technologies: React, Redux, Redux thunk, TypeScript, react router, css",
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
