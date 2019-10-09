import React from 'react'
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils"
import { shallow } from 'enzyme'
import Login from '../../components/nonAuth/signup'

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

it("renders correctly", ()=>{
    const container = shallow(<Login />)
    expect(container).toMatchSnapshot()
})

afterEach(() => {
// cleanup on exiting
unmountComponentAtNode(container);
container.remove();
container = null;
});