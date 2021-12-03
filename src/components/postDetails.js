import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { Grid } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { actionCreators } from "../redux/index";
import { getClickedUsersInfo, getPostDetailsData } from "../redux/selectors";
import "./postDetails.css";

export const PostDetails = () => {
  const clickedUser = useSelector(getClickedUsersInfo);
  const dispatch = useDispatch();
  const postDetailsData = useSelector(getPostDetailsData);
  const { id, post } = useParams();
  const { fetchClickedUser, getPostDetailsValue } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    fetchClickedUser(id);
    getPostDetailsValue(id, post);
  }, []);

  return (
    <div className="post-details-user">
      <Grid container justifyContent="space-between">
        <Grid item>
          <Link to={`/userDetails/${id}`} style={{ textDecoration: "none" }}>
            <ArrowBackIcon style={{ fontSize: "70px", color: "green" }} />
          </Link>
        </Grid>
        <Grid item style={{ fontSize: "30px" }}>
          <b>{clickedUser.name}</b>
        </Grid>
        <Grid item></Grid>
      </Grid>
      <Grid container className="post-details-Container">
        <Grid item className="post-details-input">
          {postDetailsData.inputValue}
        </Grid>
        <Grid item>{postDetailsData.detailsValue}</Grid>
      </Grid>

      <Grid container justifyContent="space-between">
        <Grid item className="comments">
          Show Comments
        </Grid>
        <Grid item className="comments">
          Add Comment
        </Grid>
      </Grid>
    </div>
  );
};
