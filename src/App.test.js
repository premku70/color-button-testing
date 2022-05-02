import { fireEvent, render, screen } from '@testing-library/react';
import App, { replaceWithCamelCase } from './App';

test('button has correct intial color', () => {
  render(<App/>);
  //find an elementwith a role of button with rext of change to blue
  const buttonElement = screen.getByRole('button',{name:'Change to blue'})
  expect(buttonElement).toHaveStyle({
    backgroundColor:'red'
  })

});

test('button has correct intial text', () => {
  render(<App/>);
  //find an elementwith a role of button with rext of change to blue
  const buttonElement = screen.getByRole('button',{name:'Change to blue'})
  expect(buttonElement).toHaveTextContent('Change to blue')

});
test('button turns blue when clicked', () => {
  render(<App/>);
  //find an elementwith a role of button with rext of change to blue
  const buttonElement = screen.getByRole('button',{name:'Change to blue'})
  fireEvent.click(buttonElement)
  expect(buttonElement).toHaveStyle({
    backgroundColor:'blue'
  })
});
test('initial conditions',()=>{
  render(<App/>);
  const  colorButton = screen.getByRole('button',{name:'Change to blue'});
  expect(colorButton).toBeEnabled()
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked()
})

test('button disables for checkbox first click and enables for second click',()=>{
  render(<App/>);
  const colorButton = screen.getByRole('button',{name:'Change to blue'});
  const checkbox = screen.getByRole('checkbox',{name:'Disable button'});

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();

})

test('disabled button has gray background and reverts to red',()=>{
  render(<App/>);
const button = screen.getByRole('button',{name:'Change to blue'});
const checkbox = screen.getByRole('checkbox',{name:'Disable button'});

fireEvent.click(checkbox);
expect(button).toHaveStyle({backgroundColor:'gray'});

fireEvent.click(checkbox);
expect(button).toHaveStyle({backgroundColor:'red'});

});

test('disable clicked button has gray background and reverts to blue',()=>{
  render(<App/>);
const button = screen.getByRole('button',{name:'Change to blue'});
const checkbox = screen.getByRole('checkbox',{name:'Disable button'});

fireEvent.click(button);
fireEvent.click(checkbox);

expect(button).toHaveStyle({backgroundColor:'gray'});

fireEvent.click(checkbox);
expect(button).toHaveStyle({backgroundColor:'blue'});
})
describe('Space before camel case letters',()=>{
  test('works with no capitol letters',()=>{
    expect(replaceWithCamelCase('Red')).toBe('Red');
  })
  test('works with one capitol letters',()=>{
    expect(replaceWithCamelCase('MediumBlue')).toBe('Medium Blue');
  })
  test('works with multiple capitol letters',()=>{
    expect(replaceWithCamelCase('MediumVioletRed')).toBe('Medium Violet Red');
  })
})