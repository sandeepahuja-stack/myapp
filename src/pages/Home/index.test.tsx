import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./index";
import {  Router } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: ()=>{
    return {
      user: {
        user: 'dummy'
      },
      stories: [{
        "section": "world",
        "subsection": "europe",
        "title": "More than a sun-splashed resort, Crimea holds a key place in Russia’s war effort.",
        "abstract": "The peninsula, which Moscow seized from Ukraine in 2014, has been a critical staging ground for the Russian invasion.",
        "url": "https://www.nytimes.com/2022/08/16/world/europe/crimea-ukraine-russia.html",
        "uri": "nyt://article/59cd56be-50ed-5392-9970-15714d5e55f6",
        "byline": "By Marc Santora",
        "item_type": "Article",
        "updated_date": "2022-08-16T15:20:24-04:00",
        "created_date": "2022-08-16T10:46:39-04:00",
        "published_date": "2022-08-16T10:46:39-04:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
            "Russian Invasion of Ukraine (2022)",
            "War and Armed Conflicts",
            "International Relations"
        ],
        "org_facet": [],
        "per_facet": [],
        "geo_facet": [
            "Crimea (Ukraine)"
        ],
        "multimedia": [
            {
                "url": "https://static01.nyt.com/images/2022/08/16/world/16ukraine-briefing-crimea-explainer/merlin_127082423_1bc15924-4ee7-48a9-ad46-3ca932313ae5-superJumbo.jpg",
                "format": "Super Jumbo",
                "height": 1365,
                "width": 2048,
                "type": "image",
                "subtype": "photo",
                "caption": "The Primorsky beach in Yalta, Crimea, in 2017.",
                "copyright": "Denis Sinyakov for The New York Times"
            },
        ],
        "short_url": "https://nyti.ms/3SOTLyR"
    }]
    }
  },
  useDispatch: () => mockDispatch,
  // useHref: jest.fn()
}));

describe('Home', () => {

    test(" search exist", async () => {
        render(<Home />)
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