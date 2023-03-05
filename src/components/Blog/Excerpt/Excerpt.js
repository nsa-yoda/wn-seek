import "./Excerpt.css";
import { Row } from "react-bootstrap";
import Paper from "@mui/material/Paper";
import { LoadAllBlogPosts } from "../../../services/Blog";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export const GetExcerptComponents = () => {
  let output = [];
  Object.entries(LoadAllBlogPosts()).map(([key, value]) =>
    output.push(<Excerpt {...value} key={key} />)
  );
  return output;
};

export const Excerpt = (props) => {
  return (
    <Row>
      <Paper
        elevation={2}
        sx={{
          marginTop: "20px",
          padding: "15px",
        }}
      >
        <Row>
          <Typography variant="h3">{props.title}</Typography>
        </Row>
        <hr />
        <Row>
          <Typography variant="body1">
            {props.body.substring(0, 400)}
          </Typography>
        </Row>
        <Row>
          <Link to={`/blog/${props.id}`} align="right">
            Read more...
          </Link>
        </Row>
      </Paper>
    </Row>
  );
};
