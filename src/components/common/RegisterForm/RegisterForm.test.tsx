import { fireEvent, render, screen } from "@testing-library/react";

import RegisterForm from "./index";
const mockDispatch = jest.fn();
jest.mock('react-redux',  () => {
  
    return ({

  useSelector: ()=>{
    return {
      user: {
        user: 'dummy'
      }, 
   
    }
  },
  useDispatch: () => mockDispatch,
  // useHref: jest.fn()
})});

describe('RegisterForm', () => {

       
    test("form exist", async () => {
        render(<RegisterForm />)
        const loginForm = screen.getByTestId('registerform');
        fireEvent.submit(loginForm)
        expect(loginForm).toBeTruthy()
        
    });

    test("password field exist", async () => {
        render(<RegisterForm />)
        const password = screen.getByPlaceholderText('Password');
        fireEvent.change(password, {target: {value: 'abcdefghijk'}})
        expect(password).toBeTruthy()
        
    });

    test("cnfpwd password field exist", async () => {
        render(<RegisterForm />)
        const User = screen.getByPlaceholderText('User');
        fireEvent.change(User, {target: {value: ' '}})
        expect(User).toBeTruthy()

        const password = screen.getByPlaceholderText('Password');
        fireEvent.change(password, {target: {value: '12345678'}})

        const cnfpwd = screen.getByPlaceholderText('Confirm Password');
        fireEvent.change(cnfpwd, {target: {value: '12345678'}})
        expect(cnfpwd).toBeTruthy()
        
    });


    test("User field exist", async () => {
        render(<RegisterForm />)
        const User = screen.getByPlaceholderText('User');
        fireEvent.change(User, {target: {value: 'abcdefghijk'}})
        expect(User).toBeTruthy()
        
    });

    



   
   
})