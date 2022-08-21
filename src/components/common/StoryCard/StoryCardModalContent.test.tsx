import { fireEvent, render, screen } from "@testing-library/react";
import storiesMock from "../../../__mock__/stories.mock";


import StoryCardModalContent from "./StoryCardModalContent";
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: ()=>{
    return {
      user: {
        user: 'dummy'
      },
      comments: [{
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
      }]
    }
  },
  useDispatch: () => mockDispatch,
  // useHref: jest.fn()
}));

describe('story card modal content', () => {

    test("story card modal content exist byline", async () => {
        const mock = {...storiesMock[0]}
        render(<StoryCardModalContent  {...mock}  />)
        const storycard = screen.getAllByText(`${mock.byline}`);
        
        expect(storycard).toBeTruthy()
        
    });


    test("story card modal content published_date not exist", async () => {
        const mock = {...storiesMock[1]}
        mock.published_date = '';
        render(<StoryCardModalContent  {...mock}  />);
        const published = screen.queryByTestId("published-date");
        
        expect(published).not.toBeInTheDocument();
        
    });




    test("story card modal content created-date not exist", async () => {
        const mock = {...storiesMock[1]}
        mock.created_date = '';
        render(<StoryCardModalContent  {...mock}  />)
        const created = screen.queryByTestId("created-date");
        
        expect(created).not.toBeInTheDocument();
        
    });





   
   
})