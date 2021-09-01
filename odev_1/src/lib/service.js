import axios from "axios";

async function getData(number) {
  const { data } = await axios("https://jsonplaceholder.typicode.com/users/" + number);
  return data;
}

export default getData;