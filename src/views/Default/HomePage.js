import React from "react";
import { Route } from "react-router-dom";
// import ShowMoreText from 'react-show-more-text';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import Icon from "@material-ui/core/Icon";

// @material-ui/icons
// import Timeline from "@material-ui/icons/Timeline";
// import Code from "@material-ui/icons/Code";
// import Group from "@material-ui/icons/Group";

// import Weekend from "@material-ui/icons/Weekend";
// import Home from "@material-ui/icons/Home";
// import Business from "@material-ui/icons/Business";
// import AccountBalance from "@material-ui/icons/AccountBalance";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js"; 
import styles from "../../assets/jss/material-dashboard-pro-react/views/HomePageStyle";
import CardHeader from "components/Card/CardHeader.js"; 
 

const useStyles = makeStyles(styles);

var list = [
  {

    title: "Where does it come from? ", 
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
  },
  {
    title: "Where does it come from?", 
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  de Finibus Bonorum et Malorum  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  Lorem ipsum dolor sit amet.. , comes from a line in section 1.10.32.",
  } 

]

export default function HomePage() {
  const classes = useStyles();
  return (
    <div> 
      <div className={classes.mainDiv} >
       
        <div className={classes.container}>
          <GridContainer justify="center" className={classes.aciklama}>
        

            <GridItem xs={12} sm={12} md={8} >
              <h2 className={classes.title} style={{ fontWeight: "bold" }}>What is Lorem Ipsum?</h2>
              <div className={classes.description} >
                <h6> 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                
                                </h6>

                <Route render={({ history }) => (
                  <Button round color="vinLezzetRed" onClick={() => { history.push('/login') }} >
                    Bize Ulaşın
                  </Button>
                )} />
              </div>
            </GridItem>
          </GridContainer>
          <GridContainer justify="center">
            {list.map(item => {

              return (
                <GridItem xs={12} sm={12} md={4} className={classes.gridStyle}>
                  <Card className={classes.cardHoverKurye}>
                    <CardHeader image
                      className={classes.cardHeaderHover}
                    >
                     
                    </CardHeader>
                    <CardBody>
                      <div className={classes.cardCategory}>
                        <h4 className={classes.text}> {item.title}  </h4>
                      </div>
                      <div className={classes.cardDescription}>
                        <p>{item.text}</p>
                      </div>
                    </CardBody>
                  </Card>
                </GridItem>
              )
            })}
 
          </GridContainer>
        
        </div> 
      </div>
    </div>
  );
}
