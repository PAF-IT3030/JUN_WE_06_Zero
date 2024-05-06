import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProfilePosts } from "../feature/checkProfile/checkProfileSlice";
import { getProfileInfo } from "../feature/checkProfile/checkProfileSlice";
import MealPostItem from "./MealPostItem";

function MyProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.checkProfileReducer.postList);
  const userInfo = useSelector(
    (state) => state.checkProfileReducer.profileInfo
  );

  useEffect(() => {
    if (localStorage.getItem("psnToken") === null) {
      navigate("/unauthorized");
    }

    if (localStorage.getItem("psnUserId") !== null) {
      dispatch(getProfilePosts(localStorage.getItem("psnUserId")));
      dispatch(getProfileInfo(localStorage.getItem("psnUserId")));
    }
  }, []);

  return (
    <div>
      <h1 className="fw-bold text-center">My Posts</h1>
      {postList !== null ? (
        postList.map((postItem) => {
          return (
            <MealPostItem
              key={postItem.id}
              postId={postItem.id}
              userId={postItem.userId}
              firstName={userInfo.firstName}
              lastName={userInfo.lastName}
              dietaryType={postItem.dietaryType}
              recipesName={postItem.recipesName}
              nutritionalContent={postItem.nutritionalContent}
              ingredientContent={postItem.ingredientContent}
              cookContent={postItem.cookContent}
              image={postItem.image}
              loveList={postItem.love}
              shareList={postItem.share}
              commentList={postItem.comment}
              postDate={postItem.createdAt}
            />
          );
        })
      ) : (
        <span></span>
      )}
    </div>
  );
}

export default MyProfile;

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getProfilePosts, getProfileInfo } from "../feature/checkProfile/checkProfileSlice";
// import MealPostItem from "./MealPostItem";
// import { Form, Button, Card, Image } from 'react-bootstrap';

// function Profile() {
//   const [userData, setUserData] = useState(null);

//   const getUserData = async () => {
//     try {
//       const response = await fetch('http://localhost:8080/api/v1/users/getProfileData/', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': localStorage.getItem("psnToken"), // if you use token authentication
//         },
        

//       });
  
//       if (!response.ok) {
//         throw new Error('HTTP status ' + response.status);
        
//       }
  
//       const data = await response.json();
//       setUserData(data); // Save the user data in the state
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }

//   const dispatch = useDispatch();
//   const userId = useSelector((state) => state.checkProfileReducer.profileId);
//   const postList = useSelector((state) => state.checkProfileReducer.postList);
//   const userInfo = useSelector((state) => state.checkProfileReducer.profileInfo);

//   useEffect(() => {
//     if (userId !== null) {
//       dispatch(getProfilePosts(userId));
//       dispatch(getProfileInfo(userId));
//     }
//     getUserData(); // Fetch the user data when the component mounts
//   }, []);

//   const handleImageUpload = (event) => {
//     // Handle the image upload here
//   };

//   const handleProfileUpdate = (event) => {
//     event.preventDefault();
//     // Handle the profile update here
//   };

  
//   return (
//     <div>
//       <h1>Post of someone</h1>
//       {/* <Card style={{ width: '18rem' }}>
//         <Image variant="top" src={userInfo.profileImage} />
//         <Card.Body>
//           <Card.Title>{userInfo.firstName} {userInfo.lastName}</Card.Title>
//           <Card.Text>
//             {userInfo.bio}
//           </Card.Text>
//           <Form onSubmit={handleProfileUpdate}>
//             <Form.Group>
//               <Form.Label>Profile Image</Form.Label>
//               <Form.Control type="file" onChange={handleImageUpload} />
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>First Name</Form.Label>
//               <Form.Control type="text" defaultValue={userInfo.firstName} />
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>Last Name</Form.Label>
//               <Form.Control type="text" defaultValue={userInfo.lastName} />
//             </Form.Group>
//             <Button variant="primary" type="submit">
//               Update Profile
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card> */}
//       {postList !== null ? (
//         postList.map((postItem) => {
//           return (
//             <MealPostItem
//               key={postItem.id}
//               postId={postItem.id}
//               userId={postItem.userId}
//               firstName={userInfo.firstName}
//               lastName={userInfo.lastName}
//               dietaryType={postItem.dietaryType}
//               recipesName={postItem.recipesName}
//               nutritionalContent={postItem.nutritionalContent}
//               ingredientContent={postItem.ingredientContent}
//               cookContent={postItem.cookContent}
//               image={postItem.image}
//               loveList={postItem.love}
//               shareList={postItem.share}
//               commentList={postItem.comment}
//               postDate={postItem.createdAt}
//             />
//           );
//         })
//       ) : (
//         <span></span>
//       )}
//     </div>
//   );
// }

// export default Profile;