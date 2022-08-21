import {  Box, Button, Divider, Grid, Modal, Snackbar, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import AlertNotification from "../../components/common/Notification/AlertNotification";
import StoryCard from "../../components/common/StoryCard";
import { loadstoriesAsync } from "../../redux/reducers/stories/stories.thunk";
import IStore from "../../redux/interfaces/IStore";
import { IStoryResult } from "../../redux/interfaces/Istories";
import { useState } from "react";
import { ModalBoxStyled, ModalResultWrapper } from "../../components/common/SearchModal/Search.style";

import { ReactComponent as BackIcon } from '../../assets/svg/BackIcon.svg';
import { loadstoriesCommentAsync } from "../../redux/reducers/storyComments/storyComments.thunk";


const Home = () => {
    let {newsCategory = 'home'} = useParams();
    const {isLoading = false, stories , err} = useSelector(({stories}: {stories: IStore})  => stories);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadstoriesAsync(newsCategory));
    },[dispatch, newsCategory])
    const [articleData, setArticleData] = useState<IStoryResult| undefined>(undefined);
    const links = [{
        text: 'All',
        link: '/',
        represent: 'home'
    },
    {
        text: 'World',
        link: '/world',
        represent: 'world'
    },
    {
        text: 'Science',
        link: '/science',
        represent: 'science'
    },]
    const onClick = (data: IStoryResult, index: number) => {
        setArticleData(data);
        dispatch(loadstoriesCommentAsync(index));
    }
    const handleClose = ()=>{
        setArticleData(undefined);
    }
    return (
        <>

        {err && <AlertNotification err={err} />}
        {isLoading && <Snackbar open={true} autoHideDuration={6000} message= " Loading..."/>}
        
        <Typography variant="h3"  component="h1" sx={{
            mt: 2
        }}>Stories</Typography>
        <Box my={2}>
        {links.map(({link, text, represent})=><Button variant={ `${represent === newsCategory ? "contained" : "outlined"}`} key={text} sx={{
            marginRight: '10px'
        }} ><Link to={link} style={{
            textDecoration: 'none',
            color: `${represent === newsCategory ? "#fff" : "inherit"}`
        }} >{text}</Link></Button>) }
        </Box>
        <Grid container spacing={4} mb="20px" >
        {stories?.map(({title, ...args}, index)=>{
            if(!title) return null;
        return <Grid item xs={12} sm={6} md={4} key={title} title={title}><StoryCard {...args} index={index + 1 } title={title} onClick={onClick}  /></Grid>})}
        </Grid>
        
        {(articleData) && <Modal
        open={!!(articleData)}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      > 
       <ModalBoxStyled >
        <Box  sx={{
            background: "#fafafa"
        }}>
            <Button onClick={handleClose} size="small" sx={{
                padding: "10px 0"
            }} >
                <BackIcon title="back button"  />
            </Button>
            <Divider />
            </Box>
                <ModalResultWrapper>
                <StoryCard  {...articleData} inModal />
                </ModalResultWrapper>
                </ModalBoxStyled>
            </Modal>}
        </>
    )
}
export default Home;
