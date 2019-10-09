import React from 'react'
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils"
import { shallow, mount } from 'enzyme'
import Signup from '../../components/nonAuth/signup'
import { BrowserRouter as Router } from 'react-router-dom'

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

// it("validates initial desired user credentials", async ()=>{
//   const badUsername = {
//     username: "123",
//     password: "1",
//     email: "email@email.com",
//     age: "21",
//     location: "11111"
//   }

//   // const badPassword = {

//   // }

//   jest.spyOn(global, "fetch").mockImplementation(()=>
//     Promise.resolve({
//       json: () => Promise.resolve(badUsername)
//     })
//   )
// })

it("renders correctly", ()=>{
  const container = shallow(<Signup />)
  expect(container).toMatchSnapshot()
})

// it("renders error messages from the backend in a Snackbar", async ()=>{
//   const response = {"error": ["This is an error message."]}

//   jest.spyOn(global, "fetch").mockImplementation(()=>
//     Promise.resolve({
//       json: () => Promise.resolve(response)
//     })
//   )

//   await act(async () => {
//     mount(
//       <Router>
//         <Signup />
//       </Router>
//     , {attachTo: container})
//   })

//   expect(document.body.querySelector(".error").innerHTML).toBe(response.error)

//   global.fetch.mockRestore();
// })

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});