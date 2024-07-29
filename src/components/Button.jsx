import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <>
      <Link
        className={`btn btn-${props.color} mx-1 my-1`}
        to={props.url}
        target="_blank"
      >
        {props.name}
      </Link>
    </>
  );
};

export default Button;

// <Button color="primary" name="view" url="https://google.com" />
