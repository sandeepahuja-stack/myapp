
import Typography from '@mui/material/Typography';

import { Card, CardContent, CardMedia } from '@mui/material';
import AlertNotification from '../Notification/AlertNotification';
import { useSelector } from 'react-redux';
import IStore from '../../../redux/interfaces/IStore';
import { IMG_BASE_URL } from '../../../utils/constants/api.constant';


const SearchCard = () => {
  const {search, err, isLoading} = useSelector(({search}: {search: IStore}) => search);
  
  return (
    <>
        {err && !search && !isLoading && <AlertNotification err={err} />}
        {isLoading && <Typography>loading</Typography>}
        { search && search?.map(({_id, abstract, multimedia, headline})=>{
          if(!abstract) return null;
          return <Card key={_id} sx={{
            borderRadius: 0,
            display: 'flex',
            justifyContent: "space-between",
            padding: '10px'
          }}>
            <CardContent>
              <Typography>{abstract}</Typography>
            </CardContent>
            { multimedia[0] && <CardMedia
              component="img"
              sx={{ width: '100px', 
            height: '100px' }}
              image={`${IMG_BASE_URL}${multimedia[0]['url']}`}
              alt={headline?.main || abstract}
            />}
          </Card>
        })}
    </>
  );
}

export default SearchCard;