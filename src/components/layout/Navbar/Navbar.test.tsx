import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
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
}));

jest.mock('react-router-dom', () => ({
  useNavigate: (arg0: string) => jest.fn(),
  Link: () => 'mocked child1' ,
  useHref: jest.fn()
}));


describe('Navbar', () => {

    test(" search exist",  () => {
      
      render( <Navbar />)
        
        const inputEl = screen.getByTestId('nav-search');
        expect(inputEl).toBeTruthy()
    });


    test(" logout button",  () => {
      

      render( <Navbar />)
      
        const logout = screen.getByTestId('logoutbtn');
        fireEvent.click(logout)
        expect(logout).toBeTruthy()
    });
})