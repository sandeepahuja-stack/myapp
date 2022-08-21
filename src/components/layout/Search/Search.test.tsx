import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "./Search";

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

describe('Nav Search', () => {

    test("open search modal", async () => {
        render(<SearchBar />)
        const inputEl = screen.getByTestId('nav-search');
        
        userEvent.click(inputEl);
        // userEvent.click(modal);
        await waitFor(() => {

        const modal =  screen.getByTestId('search-modal');
            
            expect(modal).toBeTruthy()
        })
    });


    test(" search modal not present", async () => {
        render(<SearchBar />)
        const inputEl = screen.getByTestId('nav-search');
        
        
        await waitFor(() => {

        
        expect(screen.queryByTestId('search-modal')).not.toBeInTheDocument();    
        })
    });
})