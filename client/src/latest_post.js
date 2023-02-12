import {format} from "date-fns";
import {Link} from "react-router-dom";
export default function latest_post({_id,title,summary,cover,content,createdAt,author}) {

  return (
    <div className="post-latest">
      <Link className="L_img" to={`/post/${_id}`}>
        <img src={'http://localhost:4000/'+cover} alt=""/>
      </Link>
      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <a className="author">{author.username}</a>
          <time>{format(new Date(createdAt), ' MMM d, yyyy HH:mm')}</time>
        </p>
        <p>{summary}</p>
      </div> 
    </div>
  );
}
