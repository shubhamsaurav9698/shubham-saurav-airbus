import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/index";
import { getClickedUsersInfo, getPostData } from "../redux/selectors";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { Render } from "../shared/render";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { FcPlus } from "react-icons/fc";
import { Link } from "react-router-dom";
import Popup from "../shared/popUp";
import "./userDetails.css";

export const UserDetails = () => {
  const clickedUser = useSelector(getClickedUsersInfo);
  const postData = useSelector(getPostData);
  const dispatch = useDispatch();
  const { id } = useParams();
  const UserId = id;
  const {
    fetchClickedUser,
    saveUserData,
    fetchPostData,
    deletePostData,
  } = bindActionCreators(actionCreators, dispatch);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [detailsValue, setDetailsValue] = useState("");

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    fetchClickedUser(id);
    fetchPostData(id);
  }, []);

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const onChangeDetails = (e) => {
    setDetailsValue(e.target.value);
  };

  const savedata = () => {
    let payload = {
      post: id,
      inputValue: inputValue,
      detailsValue: detailsValue,
    };
    saveUserData(payload);
    togglePopup();
    setInputValue("");
    setDetailsValue("");
    fetchPostData(id);
  };

  const deleteData = (id) => {
    deletePostData(id);
    fetchPostData(UserId);
  };

  return (
    <div className="user-details">
      <Render when={clickedUser}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Link to={`/`} style={{ textDecoration: "none" }}>
              <ArrowBackIcon style={{ fontSize: "70px", color: "green" }} />
            </Link>
          </Grid>
          <Grid item style={{ fontSize: "30px" }}>
            <b>{clickedUser.name}</b>
          </Grid>
          <Grid item>
            <FcPlus
              style={{ fontSize: "70px", color: "blue", cursor: "pointer" }}
              onClick={togglePopup}
            />
          </Grid>
        </Grid>

        {isOpen && (
          <Popup
            content={
              <>
                <Grid container justifyContent="space-around">
                  <Typography style={{ fontSize: "25px" }}>
                    <b>Add Post</b>
                  </Typography>
                </Grid>
                <Grid container className="pop-up-container">
                  <Grid item className="input-title-item">
                    <b>Title</b>
                    <TextField
                      placeholder="Title"
                      multiline
                      rows={1}
                      rowsMax={15}
                      value={inputValue}
                      onChange={onChangeInput}
                      InputProps={{
                        className: "input-title",
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid container className="pop-up-container">
                  <Grid item className="input-title-item">
                    <b>Body</b>

                    <TextField
                      placeholder="Details"
                      multiline
                      rows={5}
                      rowsMax={115}
                      onChange={onChangeDetails}
                      value={detailsValue}
                      InputProps={{
                        className: "input-title-body",
                        maxLength: 1000,
                      }}
                    />
                  </Grid>
                </Grid>

                <Button
                  style={{
                    marginLeft: "32%",
                    color: "black",
                    padding: "1% 5%",
                    border: "2px solid black",
                    borderRight: "5px solid black",
                    borderBottom: "5px solid black",
                  }}
                  onClick={togglePopup}
                >
                  Cancel
                </Button>
                <Button
                  style={{
                    backgroundColor: "green",
                    color: "#FFFFFF",
                    padding: "1% 8%",
                    marginLeft: "5%",
                    border: "2px solid black",
                    borderRight: "5px solid black",
                    borderBottom: "5px solid black",
                  }}
                  onClick={savedata}
                >
                  Save
                </Button>
              </>
            }
          />
        )}
        <Grid container className="container-posts">
          {postData &&
            postData.map((post) => (
              <Grid
                container
                className="item-posts"
                justifyContent="space-between"
              >
                <Grid item className="post-title-class">
                  <DeleteIcon
                    key={post.id}
                    onClick={() => deleteData(post.id)}
                    style={{
                      transform: "scale(1.7)",
                      color: "green",
                      paddingRight: "10px",
                      cursor: "pointer",
                    }}
                  />
                  <span>{post.inputValue}</span>
                </Grid>

                <Link
                  to={`/userDetails/${UserId}/postDetails/${post.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Grid
                    item
                    style={{
                      transform: "scale(1.7)",
                      color: "green",
                      paddingTop: "2px",
                      cursor: "pointer",
                    }}
                  >
                    <ArrowForwardIosIcon />
                  </Grid>
                </Link>
              </Grid>
            ))}
        </Grid>
      </Render>
    </div>
  );
};
