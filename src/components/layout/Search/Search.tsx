import React, { Suspense, useState } from "react";
import { SearchStyled, SearchIconWrapper, StyledInputBase } from "./Search.style";
import { ReactComponent as SearchIcon } from '../../../assets/svg/SearchIcon.svg';
const SearchModal = React.lazy(() => import(
  /* webpackChunkName: "SearchModalComponent" */
  '../../common/SearchModal'));

const SearchBar = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return(
      <> 
        <SearchStyled>
          <SearchIconWrapper>
            <SearchIcon fill="#fff"/>
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            readOnly
            onClick={handleOpen}
            data-testid="nav-search" 
            
            />
        </SearchStyled>
       
         {open && <Suspense fallback={<div></div>}><SearchModal open={open} handleClose={handleClose} /></Suspense>}
      </>
  );

}

export default SearchBar;