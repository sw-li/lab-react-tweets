import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(prop) {
  return (
    <div className="tweet">
      <ProfileImage src={prop.tweet.user.image}></ProfileImage>

      <div className="body">
        <div className="top">
          <User user={prop.tweet.user}></User>
          <Timestamp timestamp={prop.tweet.timestamp}></Timestamp>
        </div>

        <Message message={prop.tweet.message}></Message>

        <Actions></Actions>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
