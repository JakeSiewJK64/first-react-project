import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import React from "react";
import { FlexStyles, UserStyles } from './Users.styles';
import { View } from "react-native";

export default function Users() {
    const classes = UserStyles();
    const styles = FlexStyles;
    return (
        <View style={[styles.container, {
            flexDirection: 'row'
        }]}>
            <Card className={classes.root} elevation={5}>
                <CardContent>
                    <Typography className={classes.title} color="textPrimary">Users</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </View>
    );
}