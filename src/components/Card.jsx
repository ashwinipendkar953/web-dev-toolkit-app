import { Link } from "react-router-dom";

const Card = (props) => (
  <div className={props.col}>
    <div className="card h-100">
      {props.title && (
        <div className="card-header">
          <h5 className="card-title">{props.title}</h5>
        </div>
      )}
      <div className="card-body">
        {props.text && <p className="card-text">{props.text}</p>}
        {props.url && (
          <Link className="btn btn-primary" to={props.url}>
            {props.urlName ? props.urlName : "View"}
          </Link>
        )}
      </div>
    </div>
  </div>
);

export default Card;
