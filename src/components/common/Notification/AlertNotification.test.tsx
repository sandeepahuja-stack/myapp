import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import AlertNotification from "./AlertNotification";
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

describe('alert notification', () => {

    test("alert exist", async () => {
        render(<AlertNotification err="alert" />)
        const alertNotification = screen.getByTestId('alert');
        
        expect(alertNotification).toBeTruthy()
        
    });


    test("alert component doesnot exist", async () => {
        render(<AlertNotification err="" />)
        expect(screen.queryByTestId('alert')).not.toBeInTheDocument();
        
    });

   
   
})