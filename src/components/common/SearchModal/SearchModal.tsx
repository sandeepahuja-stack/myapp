import { Box, Container, Divider, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useDebounce from "../../hooks/useDebounce";
import { SearchStyled, SearchIconWrapper, StyledInputBase, ModalBoxStyled, ModalResultWrapper, SearchIconBackButton } from "./Search.style";
import { ReactComponent as SearchIcon } from '../../../assets/svg/SearchIcon.svg';
import { ReactComponent as BackIcon } from '../../../assets/svg/BackIcon.svg';
import Pagination from "../Pagination";
import { useCallback } from "react";
import SearchCard from "../Search/Search";
import { loadsearchAsync } from "../../../redux/reducers/search/search.thunk";
import CookiesHelper from "../../../utils/helper/cookiesHelper.helper";
// import IStore from "../../../redux/responseInterface/IStore";

const SearchModal = ({open, handleClose}: {
  open: boolean;
  handleClose: ()=>void;
} ) => {
  
    const dispatch = useDispatch();
  
    const [value, setValue] = useState('');
    

    const handleChange = (e: any)=>{
      setValue(e.target.value);
    }
    const debouncedSearchTerm = useDebounce(value,500);
    const prevSearchItems = JSON.parse(CookiesHelper.readCookie('searchItems') ||'[]');

    const [previousSearches, updateSearches]= useState(prevSearchItems);
     // Effect for API call
    useEffect(
      () => {

        
        if (debouncedSearchTerm && !previousSearches.includes(debouncedSearchTerm)) {
          let newSearchAry = [...previousSearches];
          newSearchAry.unshift(debouncedSearchTerm);
          updateSearches(newSearchAry.splice(0, 5));

          dispatch(loadsearchAsync(debouncedSearchTerm, 1));

        } 

      },
      [debouncedSearchTerm, dispatch,previousSearches ] // Only call effect if debounced search term changes
    );
    useEffect(()=>{

      return () => CookiesHelper.createCookie('searchItems', JSON.stringify(previousSearches), 15);
      
    },[previousSearches])
    const [index , updateIndex] = useState(1);
    const paginationChange = useCallback((pageNumber: number) => {  
      dispatch(loadsearchAsync(value, pageNumber));
      updateIndex(pageNumber);
    },[value, dispatch]);
    const onPrevClick = (term: string) => {
      dispatch(loadsearchAsync(term, 1));
      setValue(term);
    }


    return( 
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        data-testid="search-modal"
      >
        <Container > 
          <ModalBoxStyled >
            <SearchStyled>
            <SearchIconBackButton onClick={handleClose} data-testid="back-button">
              <BackIcon title="back button" />
            </SearchIconBackButton>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleChange}
                value={value}
                autoFocus
              />
            </SearchStyled>
            {previousSearches && !value && previousSearches.map((item: string, index: number)=>{
              return <Box key={item+index} onClick={()=>{onPrevClick(item)}} ><Typography p={2}>{item}</Typography><Divider /></Box>
            })}
            {value &&  <><ModalResultWrapper>
              <SearchCard />
            </ModalResultWrapper>
            <Box mt="20px" display="flex" justifyContent="center"><Pagination index={index} count={10} onChange={paginationChange} /></Box></>}
          </ModalBoxStyled>
        </Container>
      </Modal>
      )
}

export default SearchModal;