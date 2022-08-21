import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Pagination from "./Pagination";
const mockDispatch = jest.fn();


describe('Pagination', () => {

    test(" Pagination exist", async () => {
        render(<Pagination index={1} count={10}  />)
        const paginationEl = screen.getByTestId('pagination');
        expect(paginationEl).toBeTruthy()
    });


    test(" Pagination exist  index 0", async () => {
        render(<Pagination index={0} count={10}  />)
            const btn = screen.getByLabelText('Go to page 5');
        fireEvent.click(btn);
        const paginationEl = screen.getByTestId('pagination');
        
        expect(paginationEl).toBeTruthy()
    });


    test(" Pagination button 5 exists", async () => {
        render(<Pagination index={0} count={10}  onChange={()=>{}}/>)
        const btn = screen.getByLabelText('Go to page 5');
        fireEvent.click(btn);
        expect(btn).toBeTruthy()
    });

    
})