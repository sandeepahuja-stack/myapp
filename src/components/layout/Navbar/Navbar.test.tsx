import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";
import {  Router } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
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

describe('Navbar', () => {

    test(" search exist", async () => {
        render(<Routes><Navbar /></Routes>)
        const inputEl = screen.getByTestId('nav-search');
        expect(inputEl).toBeTruthy()
        // userEvent.click(inputEl);
        // userEvent.click(modal);
        // await waitFor(() => {

        // const modal =  screen.getByTestId('search-modal');
            
        //     expect(modal).toBeTruthy()
        // })
    });
})