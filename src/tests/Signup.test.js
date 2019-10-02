import React from 'react'
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils"
import Signup from '../components/nonAuth/signup'

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

it("renders error messages from the backend in a modal", async ()=>{
  const response = {"error": "This is an error message."}

  jest.spyOn(global, "fetch").mockImplementation(()=>
    Promise.resolve({
      json: () => Promise.resolve(response)
    })
  )

  await act(async () => {
    render(<Signup />, container)
  })

  expect(container.querySelector(".error").textContent).toBe(response.error)
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});