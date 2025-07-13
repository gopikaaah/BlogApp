import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Home() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3001/blogs')
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(err => console.error('Error fetching blogs:', err));
    }, []);


    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:3001/blogs/${id}`,{ method: 'DELETE'});
            setPosts(prev => prev.filter(post => post._id !== id));
        } catch (err) {
            console.error('Error deleting blod:', err);
        }
    };


    const handleUpdate = (id) => {
        navigate(`/update/${id}`);
    };

    return (
        <Grid container spacing={3} sx={{ p: 2 }}>
            {posts.map(post => (
                <Grid item xs={12} sm={6} md={4} key={post._id}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="180"
                            image={post.img_url}
                            alt={post.title}
                        />
                        <CardContent>
                            <Typography variant="body2" sx={{ mt: 1 }}>
                                {post.content.length > 100
                                    ? `${post.content.slice(0, 100)}...`
                                    : post.content}
                            </Typography>
                            <Typography variant="h6" component="div" sx={{ mt: 1, fontWeight: 'bold' }}
                            >
                                {post.title}

                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="smaill" variant="contained" sx={{ backgroundColor: '#9c27b0' }} onClick={() => handleDelete(post._id)}>
                                DELETE
                            </Button>
                            <Button size="small" variant="contained" sx={{ backgroundColor: '#9c27b0' }} onClick={() => handleUpdate(post._id)}>
                                UPDATE
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}