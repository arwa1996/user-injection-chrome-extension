import { AiOutlineMail, AiOutlinePhone, AiOutlineUser } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import "../App.scss";
import { User } from "../models/user";

const UserProfile = (props) => {
  const user: User = props.user;
  return (
    <div className="container">
      <div>
        <h3>Recruiter from Leadjet:</h3>
        <div className="userProfile">
          <div className="avatar">
            <img
              src={user?.picture.large}
              alt="userImg"
              style={{ width: "100%" }}
            />
          </div>
          <h3 className="userName">
            {user?.name.first + " " + user?.name.last}
          </h3>
        </div>
      </div>
      <div className="userInformation">
        <h4 className="email">
          <AiOutlineMail /> {user?.email}
        </h4>
        <h4>
          <FiMapPin /> {user?.location.country + ", " + user?.location.city}
        </h4>
        <h4>
          <AiOutlinePhone /> {user?.cell}
        </h4>
        <h4>
          <AiOutlineUser /> Age: {user?.dob.age}
        </h4>
      </div>
    </div>
  );
};

export default UserProfile;
