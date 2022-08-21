
import Typography from '@mui/material/Typography';
import { IStoryResult } from '../../../redux/interfaces/Istories';
import { Avatar, Box, Chip, Divider } from '@mui/material';
import dateWithoutTime from '../../../utils/helper/date';
import { useSelector } from 'react-redux';
import IStore from '../../../redux/interfaces/IStore';
import React from 'react';

export default function StoryCardModalContent(props: IStoryResult) {
  const {des_facet, published_date ,byline, created_date} = props;
  
  const {isLoading = false, comments } = useSelector(({comments}: {comments: IStore})  => comments);
  return (<>
     
 
      {!!(des_facet?.length) && <> <Divider sx={{
        margin: '15px 0'
      }}/>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap' }}>
         
         

        {des_facet.map((item)=>{
          return <Chip label={item} key={item} size="small"/>
        })}
  
       </Box></>}
       {byline && <> <Divider sx={{
        margin: '15px 0'
      }} />
        <Typography variant="body2">{byline}
        </Typography>
</>}{(published_date || created_date) && <>
       <Divider sx={{
        margin: '15px 0'
      }} />
      <Box display="flex" justifyContent="space-between">
        {published_date && <Typography variant="body2" fontSize="10px" fontWeight="lighter" data-testid="published-date">Published Date {dateWithoutTime(published_date)}
        </Typography>
      }

        {created_date && <Typography variant="body2" fontSize="10px" fontWeight="lighter" data-testid="created-date" >Created Date {dateWithoutTime(created_date)}
        </Typography>}
      </Box></>}
      <Divider sx={{
        margin: '15px 0'
      }}>
        Comments
      </Divider>
      
      {isLoading &&  <Typography>Comments Loading</Typography>}
      {comments?.length > 0 ? comments.map(({id, name, body})=>{
        return <React.Fragment key={id}><Box my={2}  display="flex">
          
          {name && <Avatar  sx={{
            textTransform: 'uppercase'
          }}>{name.split(' ')[0][0]}</Avatar>}
          
          <Typography variant="body2" marginLeft={1}>{body}</Typography>
         
        </Box>
         <Divider />
         </React.Fragment>
      }): <Typography>No Comments Found</Typography>}
    </>
  );
}
