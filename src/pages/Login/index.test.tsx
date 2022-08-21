import { render, screen } from "@testing-library/react";
import Login from "./index";
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: ()=>{
    return {
      user: {
        user: 'dummy'
      },
     
    }
  },
  useDispatch: () => mockDispatch,
  
}));

jest.mock('react-router-dom', () => ({
  useNavigate: (arg0: string) => jest.fn(),
  Link: () => 'mocked child1' ,
  useHref: jest.fn(),
  useParams: () => {
    return {
      newsCategory: 'home'
    }
  }
}));


describe('Login', () => {

    test(" Login exist", async () => {
        render(<Login />)
    
        expect(screen.getByText('Loading Login Form')).toBeTruthy()
        
       
    });

})
