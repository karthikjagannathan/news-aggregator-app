import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Html5Entities } from 'html-entities';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  media: {
    height: 140,
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }
}));

export default function Post(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const { title, description, link, contentType, content, imageUrl, click } = props;
  const htmlEntities = new Html5Entities();
  const defaultImageUrl = "https://material-ui.com/static/images/cards/contemplative-reptile.jpg";

  return (
      <Card style={modalStyle} className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image = {imageUrl ? htmlEntities.decode(imageUrl) : defaultImageUrl}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {title}
            </Typography>
            {/* <Typography variant="body2" color="textSecondary" component="p" >
              {htmlEntities.decode(description)}
            </Typography> */}
            <div dangerouslySetInnerHTML={{__html: htmlEntities.decode(description)}} />
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button 
            size="small" 
            color="primary"
            target="_blank"
            rel="noopener"
            href={link} 
            onClick={click}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
  );
}
