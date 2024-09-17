import { Link } from "react-router-dom";
import Button from "./Button";

const Card = ({
  col,
  liveUrl,
  name,
  category,
  description,
  instructionsUrl,
  replUrl,
  githubUrl,
}) => (
  <div className={col}>
    <div className="card h-100 border border-5">
      <embed src={liveUrl} height={250} width={"100%"} />

      <div className="card-body bg-info bg-gradient bg-opacity-50">
        <h5 className="card-title d-flex justify-content-between mb-0">
          {name}{" "}
          <span className="bg-warning rounded px-2 py-1">{category}</span>
        </h5>
        <p className="card-text">{description}</p>

        <Button color="outline-dark" name="View Live" url={liveUrl} />

        <Button color="outline-dark" name="Github" url={githubUrl} />

        {instructionsUrl && (
          <Button
            color="outline-primary"
            name="Instructions"
            url={instructionsUrl}
          />
        )}
      </div>
    </div>
  </div>
);

export default Card;
