import { fireEvent, render, screen } from "@testing-library/react";
import LoginForm from "./index";
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: ()=>{
    return {
      user: {
        user: 'dummy'
      }
    }
  },
  useDispatch: () => mockDispatch,
  // useHref: jest.fn()
}));

describe('Login Form', () => {

    test("form exist", async () => {
        render(<LoginForm />)
        const loginForm = screen.getByTestId('login-form');
        fireEvent.submit(loginForm)
        expect(loginForm).toBeTruthy()
        
    });

    test("password field exist", async () => {
        render(<LoginForm />)
        const password = screen.getByPlaceholderText('password');
        fireEvent.change(password, {target: {value: '23'}})
        expect(password).toBeTruthy()
        
    });


    test(" User Name field exist", async () => {
        render(<LoginForm />)
        const textfield = screen.getByPlaceholderText('User Name');
        fireEvent.change(textfield, {target: {value: 'user'}})
        expect(textfield).toBeTruthy()
        
    });

   
   
})