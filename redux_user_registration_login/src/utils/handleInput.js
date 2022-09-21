import { debounce } from "lodash";
export const handleInputChange = debounce((event, persons, setPersons) => {
  persons[event.target.name] = event.target.value;
  setPersons(persons);
  console.log(persons);
}, 1000);
