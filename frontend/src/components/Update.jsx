import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams(); 
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    img_url: "",
  });

  
  useEffect(() => {
    axios
      .get(`http://localhost:3001/blogs/${id}`)
      .then((res) => {
        setInputs({
          title: res.data.title,
          content: res.data.content,
          img_url: res.data.img_url,
        });
      })
      .catch((err) => {
        console.error("Error fetching blog:", err);
      });
  }, [id]);

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const updateData = () => {
    axios
      .put(`http://localhost:3001/update/${id}`, inputs)
      .then((res) => {
        alert(res.data.message || "Updated successfully");
        navigate("/");
      })
      .catch((err) => {
        console.error("Error updating blog:", err);
        alert("Update failed");
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "600px",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Title"
          name="title"
          value={inputs.title}
          onChange={inputHandler}
          fullWidth
        />
        <TextField
          variant="outlined"
          placeholder="Content"
          name="content"
          value={inputs.content}
          onChange={inputHandler}
          multiline
          rows={4}
        />
        <TextField
          variant="outlined"
          placeholder="Image URL"
          name="img_url"
          value={inputs.img_url}
          onChange={inputHandler}
        />
        <Button variant="contained" color="secondary" onClick={updateData}>
          Update
        </Button>
      </Box>
    </Box>
  );
};

export default Update;