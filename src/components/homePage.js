import React, { useEffect } from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/index";
import { getUsersInfo } from "../redux/selectors";
import "./homePage.css";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const users = useSelector(getUsersInfo);
  const dispatch = useDispatch();
  const { fetchUsers } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className="card-layout">
        {users &&
          users.map((user) => (
            <Link
              to={`/userDetails/${user.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card className="card-class" key={users.id}>
                <CardContent>
                  <Grid container>
                    <Grid item className="item-class">
                      <Typography>
                        <b>{user.name}</b>
                      </Typography>
                    </Grid>

                    <Grid container>
                      <Grid item className="link-item-class">
                        <Typography>{user.email}</Typography>
                        <Typography>{user.phone}</Typography>
                        <Typography>{user.webSite}</Typography>
                      </Grid>
                    </Grid>

                    <Grid item>
                      <Typography>{user.address}</Typography>
                    </Grid>

                    <Grid className="details-container">
                      <Typography>
                        <b>Details</b>
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Link>
          ))}
      </div>
    </>
  );
};
