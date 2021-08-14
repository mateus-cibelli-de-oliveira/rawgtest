import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { apiGame } from "../service";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "100ch",
    marginTop: 50,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
  },
  inline: {
    display: "inline",
  },
}));

function ViewGame() {
  const classes = useStyles();
  const [obj, setObj] = useState([]);

  useEffect(() => {
    apiGame().then((result) => {
      setObj(result.data.results);
      console.log("result", result);
    });
  }, [obj]);

  return (
    <div style={{ paddingLeft: 10, paddingRight: 10 }}>
      {obj ? (
        obj?.map((result) => {
          return (
            <List className={classes.root} style={{ borderRadius: 10, boxShadow: "0px 0px 7px 1px #9c9797" }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={result?.background_image} />
                </ListItemAvatar>
                <ListItemText
                  primary={result?.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {result?.slug}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}
export default ViewGame;
