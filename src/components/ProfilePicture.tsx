import kyriel from "../../public/Kyriel_Linkedin.png";
import "./ProfilePicture.css";

export default function ProfilePicture() {
    return (
        <>
            <div className="profile-picture" style={{ backgroundImage: `url(${kyriel})` }}></div>
        </>
    );
}