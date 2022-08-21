import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IStoryResult } from '../../../redux/interfaces/Istories';
import { Box, Chip } from '@mui/material';

import StoryCardModalContent from './StoryCardModalContent';

export interface IStoryCard extends IStoryResult {
  index: number;
  onClick?: (arg0: IStoryResult, arg1: number) => void;
  inModal?: boolean;
  
}
export default function StoryCard(props: IStoryCard) {
  const {onClick, inModal = false,index, ...rest} = props;
  const {title, abstract, multimedia, subsection, section, url} = rest;
  const clickHandler = () => {
    if(onClick) {
      onClick(rest, index);
    }
  }
  if(!title) return null;
  
  return (
    <Card sx={{
      ...(inModal && {
        borderRadius: 0,
        boxShadow: 'none'
      })
    }} data-testid={`${title}_${index}`} >
     {multimedia && multimedia[0] && <CardMedia
        
        component="img"
        height="200"
        image={multimedia[0]?.url}
        alt={multimedia[0]?.caption}
      />}
 
      <CardContent onClick={onClick && clickHandler} sx={{
        ...(onClick && {
          cursor: 'pointer'
        })
      }}>
        {(section || subsection ) && <Box mb={1} textTransform="uppercase" fontWeight="lighter" textAlign="right">{section && <Chip label={section} size="small" />} {subsection && <Chip label={subsection} size="small" /> }</Box>}
    
        <Typography gutterBottom variant="h6" component="h6" title={title} height={!inModal ? "70px" : 'auto'}>
          {(title.length > 60 && !inModal) ? `${title.slice(0, 55 - title.length)}...` : title}
        </Typography>
        <Typography variant="body2" color="text.secondary"  height={!inModal ? "40px" : 'auto'}>
          {(abstract.length > 100 && !inModal)? `${abstract.slice(0, 100 - abstract.length)}...` : abstract}
        </Typography>
       {inModal && <StoryCardModalContent {...rest} />}
       
      </CardContent>
      {!inModal && <CardActions>
        {onClick && <Button size="small" variant="text" onClick={clickHandler} color="primary" data-testid="AdditionalInfo">Additional Info</Button>}
        <Button size="small" variant="text" ><a href={url} rel="noreferrer" target="_blank" style={{textDecoration: 'none'}}>Learn More</a> </Button>
        
      </CardActions>}
    </Card>
  );
}
