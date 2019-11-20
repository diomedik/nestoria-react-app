import React from 'react';
import ReactDOM, { render, unmountComponentAtNode } from 'react-dom';
import App from './App';
import { act } from "react-dom/test-utils";
import AppItem from './AppItem/AppItem';
import Preloader from './Preloader/Preloader';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

it('renders buttons component', () => {
  act(() => {
    render(<pagesButtons />, container)
  })
  expect(container.textContent).toBe("")
})

it('render item with and without props', () => {
  const fakeHouse = {
    img_url: 'some url',
    title: 'Name of house',
    price_formatted: '790000',
    summary: ' House information'
  }
  act(() => {
    render(<AppItem item={fakeHouse}/>, container)
  })
  expect(container.querySelector('.title').textContent).toBe(fakeHouse.title);
  expect(container.querySelector('span').textContent).toBe(fakeHouse.summary);
  expect(container.querySelector('.price').textContent).toBe(`Price: ${fakeHouse.price_formatted}`)
  
  act(() => {
    render(<AppItem item={fakeHouse.img_url}/>, container)
  })
  expect(container.querySelector('.title').textContent).toBe('');
  expect(container.querySelector('span').textContent).toBe('');
  expect(container.querySelector('.price').textContent).toBe(`Price: `)
})

it('renders preloader', () => {
  act(() => {
    render(<Preloader />, container);
  })
  expect(container.querySelector('.preloader').textContent).toBe('');
})

it('fetch city and render it', async () => {
  const fakeHouse = { 
    img_url: 'some url',
    title: 'Name of house',
    price_formatted: '790000',
    summary: ' House information'
  }
  jest.spyOn(global, 'fetch').mockImplementation(() => 
    Promise.resolve({
      json: () => Promise.resolve(fakeHouse)
    })
  );
  act(() => {
    render(<AppItem item={fakeHouse}/>, container);
  })
  expect(container.querySelector('.title').textContent).toBe(fakeHouse.title);
  expect(container.querySelector('span').textContent).toBe(fakeHouse.summary);
  expect(container.querySelector('.price').textContent).toBe(`Price: ${fakeHouse.price_formatted}`);
  global.fetch.mockRestore();
})