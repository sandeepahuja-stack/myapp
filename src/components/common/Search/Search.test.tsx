import { fireEvent, render, screen } from "@testing-library/react";
// import searchMock from "../../../__mock__/search.mock";

import Search from "./Search";
const mockDispatch = jest.fn();
// jest.mock('../../../__mock__/search.mock',()=>searchMock);
jest.mock('react-redux',  () => {
  
    return ({

  useSelector: ()=>{
    return {
      user: {
        user: 'dummy'
      }, 
      search: [
        {
            "abstract": "The cuts affect only Arizona and Nevada at this time, as a plan for more drastic cuts from seven states remains elusive.",
            "web_url": "https://www.nytimes.com/2022/08/16/climate/colorado-river-lake-mead-water-drought.html",
            "snippet": "The cuts affect only Arizona and Nevada at this time, as a plan for more drastic cuts from seven states remains elusive.",
            "lead_paragraph": "In response to dwindling supplies of water from the drought-ravaged Colorado River, the federal government on Tuesday announced a new round of cuts in the amount two states can take from the river. But for now the government stopped short of mandating large reductions that officials have said will be needed next year to protect the river’s infrastructure.",
            "source": "The New York Times",
            "multimedia": [{
                "rank": 0,
                "subtype": "xlarge",
                "caption": null,
                "credit": null,
                "type": "image",
                "url": "images/2022/08/16/climate/16cli-colorado1/merlin_205746465_c5f7bb45-de66-4f4a-bb8e-a39c7cde2c4f-articleLarge.jpg",
                "height": 400,
                "width": 600,
                "legacy": {
                    "xlarge": "images/2022/08/16/climate/16cli-colorado1/merlin_205746465_c5f7bb45-de66-4f4a-bb8e-a39c7cde2c4f-articleLarge.jpg",
                    "xlargewidth": 600,
                    "xlargeheight": 400
                },
                "subType": "xlarge",
                "crop_name": "articleLarge"
            }],
            "headline": {
                "main": "A New Round of Colorado River Cuts Is Announced",
                "kicker": null,
                "content_kicker": null,
                "print_headline": null,
                "name": null,
                "seo": null,
                "sub": null
            },
            "keywords": [
                {
                    "name": "subject",
                    "value": "Global Warming",
                    "rank": 1,
                    "major": "N"
                },
                {
                    "name": "subject",
                    "value": "Greenhouse Gas Emissions",
                    "rank": 2,
                    "major": "N"
                },
                {
                    "name": "subject",
                    "value": "Drought",
                    "rank": 3,
                    "major": "N"
                },
                {
                    "name": "subject",
                    "value": "Agriculture and Farming",
                    "rank": 4,
                    "major": "N"
                },
                {
                    "name": "subject",
                    "value": "Water",
                    "rank": 5,
                    "major": "N"
                },
                {
                    "name": "subject",
                    "value": "Rationing and Allocation of Resources",
                    "rank": 6,
                    "major": "N"
                },
                {
                    "name": "organizations",
                    "value": "Bureau of Reclamation",
                    "rank": 7,
                    "major": "N"
                },
                {
                    "name": "glocations",
                    "value": "Colorado River",
                    "rank": 8,
                    "major": "N"
                },
                {
                    "name": "glocations",
                    "value": "Lake Mead",
                    "rank": 9,
                    "major": "N"
                }
            ],
            "pub_date": "2022-08-16T17:45:30+0000",
            "document_type": "article",
            "news_desk": "Climate",
            "section_name": "Climate",
            "byline": {
                "original": "By Henry Fountain",
                "person": [
                    {
                        "firstname": "Henry",
                        "middlename": null,
                        "lastname": "Fountain",
                        "qualifier": null,
                        "title": null,
                        "role": "reported",
                        "organization": "",
                        "rank": 1
                    }
                ],
                "organization": null
            },
            "type_of_material": "News",
            "_id": "nyt://article/08e9c44c-5c04-5e1c-a4be-aa18f8294155",
            "word_count": 600,
            "uri": "nyt://article/08e9c44c-5c04-5e1c-a4be-aa18f8294155"
        },
      ]
    }
  },
  useDispatch: () => mockDispatch,
  // useHref: jest.fn()
})});

describe('search', () => {

    test("search list exist", async () => {
        render(<Search />)
        // const storycard = screen.getByTestId(`${storiesMock[0].title}_1`);
        
        // expect(storycard).toBeTruthy()
        
    });



   
   
})