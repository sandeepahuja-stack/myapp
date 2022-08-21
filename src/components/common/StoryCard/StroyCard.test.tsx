import { fireEvent, render, screen } from "@testing-library/react";
import storiesMock from "../../../__mock__/stories.mock";

import StoryCard from "./StoryCard";
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

describe('story card', () => {

    test("story card exist", async () => {
        render(<StoryCard index={1} {...storiesMock[0]} inModal />)
        const storycard = screen.getByTestId(`${storiesMock[0].title}_1`);
        
        expect(storycard).toBeTruthy()
        
    });


    test("story card exist without modal", async () => {
      storiesMock[0].section = ''
      render(<StoryCard index={1} {...storiesMock[0]} onClick={()=>{}} />)
      const storycard = screen.getByTestId(`${storiesMock[0].title}_1`);
      
      const additionInfoBtn = screen.getByTestId(`AdditionalInfo`);
      fireEvent.click(additionInfoBtn);
      
      expect(storycard).toBeTruthy();
    }); 


    test("story card exist without modal", async () => {
      storiesMock[0].section = ''
      render(<StoryCard index={1} {...storiesMock[0]}  />)
      const storycard = screen.getByTestId(`${storiesMock[0].title}_1`);
      expect(storycard).toBeTruthy();
    }); 
  
    test("story card return null exist", async () => {
      storiesMock[0].title = ''
      render(<StoryCard index={1} {...storiesMock[0]} />);
      expect(screen.queryByTestId(`${storiesMock[0].title}_1`)).not.toBeInTheDocument();
    });



   
   
})