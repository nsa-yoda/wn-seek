import "./Post.css";
import { LoadAllBlogPosts, LoadBlogPost } from "../../../services/Blog";
import { Excerpt } from "../Excerpt/Excerpt";
import { Card } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";

export const Post = (id) => {
  const post = LoadBlogPost(id);

  return (
    <Container>
      <Paper
        elevation={6}
        sx={{
          marginTop: "1em",
          marginBottom: "2em",
          paddingLeft: "15px",
        }}
      >
        <Row>
          <Col>
            <Row>
              <Col align="right">
                <Typography variant="caption" align="left">
                  {post.metadata.category} / {post.created_at}
                </Typography>
              </Col>
            </Row>
            <Row>
              <Typography
                variant="h2"
                sx={{
                  marginTop: "1em",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                {post.title}
              </Typography>
            </Row>
          </Col>
          <Col>
            <img
              align="right"
              src="https://picsum.photos/id/237/722/590"
              className="w-full transition-all"
              alt=""
            />
          </Col>
        </Row>
      </Paper>

      <Paper
        elevation={6}
        sx={{
          marginTop: "1em",
          marginBottom: "2em",
          padding: "2em",
        }}
      >
        <Typography variant="body1">{post.body}</Typography>
      </Paper>

      <Container>
        <Typography variant="h4">Related Articles</Typography>
        <Row
          className="bg-white"
          style={{
            padding: "1.5em",
          }}
        >
          <Col md="3">
            <img
              align="left"
              src="https://picsum.photos/id/238/256"
              className="w-full transition-all"
              alt=""
            />
          </Col>
          <Col>
            <Typography variant="h5">
              Some article title that's really cool
            </Typography>
            <Typography variant="caption">
              Lorem ipsum dolor sit amet, consectetur adip non pro id el
              elementum et just sed diam non pro id elit. Lorem ipsum dolor sit
              amet, con sectetur adip non pro id elit. Lorem ipsum dom et just
              sed diam non pro id elit sed diam non pro id
            </Typography>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
