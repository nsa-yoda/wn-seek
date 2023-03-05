import "./Blog.css";
import { GetExcerptComponents } from "../../components/Blog/Excerpt/Excerpt";
import { Post } from "../../components/Blog/Post/Post";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";

export const Blog = () => {
  let { id } = useParams();
  const output = !id ? GetExcerptComponents() : <Post id={id} />;

  return (
    <Container>
      <div>{output}</div>
    </Container>
  );
};
