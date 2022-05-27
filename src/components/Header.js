import React , {useEffect} from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserName , selectUserPhoto, setSignOutState, setUserLoginDetails } from "../features/users/userSlice";
import { auth, provider } from "../firebase";

const Header = () => {

  const dispatch = useDispatch();
  const history = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);


  useEffect(() => {
     auth.onAuthStateChanged(async (user)=>{
       if(user){
         setUser(user);
         history('/home')
       }
     });
  }, [userName]);

  const handleAuth = () => {
    if(!userName){

      auth
        .signInWithPopup(provider)
        .then((result) => {
          console.log(result)
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    }else if(userName) {
          auth.signOut().then(()=>{
            dispatch(setSignOutState());
            history('/')
          }).catch((error)=>{
             alert(error.message);
          })
    }
  };

  const setUser = (user)=>{
     dispatch(setUserLoginDetails({
         name : user.displayName,
         email : user.email,
         photo : user.photoURL,
     }));
  };

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" className="logoImg" />
      </Logo>

      {!userName ? (
        <Login onClick={handleAuth}>LOGIN</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>HOME</span>
            </a>
            <a>
              <img src="/images/search-icon.svg" alt="" />
              <span>SEARCH</span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg" alt="" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src="/images/original-icon.svg" alt="" />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" alt="" />
              <span>MOVIES</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" alt="" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <SignOut>
           <UserImg src={userPhoto} alt ={userName} />
            <Dropdown>
              <span onClick={handleAuth}>Sign out</span>
            </Dropdown>
          </SignOut>
        </>
      )}

    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  padding: 20px 40px;
  background-color: #131520;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
`;

const Logo = styled.a`
  text-decoration: none;
  width: 90px;
  cursor: pointer;
  max-height: 70px;
  img {
    width: 100%;
    display: block;
  }
`;

const NavMenu = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;


  a {
    display: flex;
    align-items: center;
    margin-left: 20px;
    cursor: pointer;

    &:first-child {
      margin-left: 35px;
    }
    img {
      width: 20px;
    }
    span {
      margin-left: 8px;
      letter-spacing: 1.5px;
      font-size: 13px;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        width: 0%;
        height: 3px;
        background-color: #f9f9f9;
        left: 0;
        bottom: -10px;
        transition: width 0.3s ease-in-out;
      }
    }
    &:hover span::after {
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  border: 1px solid #ccc;
  padding: 7px 10px;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  background-color: transparent;
  transition: background-color 0.2s ease-in-out;
  font-size: 1.2rem;
  margin-left: 10px;
  letter-spacing: 1.5px;

  &:hover {
    background-color: white;
    color: #333;
  }
`;

const UserImg = styled.img`
object-fit: contain ;
height: 100%;
cursor: pointer;
border-radius: 50%;
width: 50px;
@media screen and (max-width:768px) {
   margin-right: 10px;
}
`

const Dropdown = styled.a`
  position: absolute;
  border: 1px solid red;
  width: 120px;
  text-align: center;
  right: -5px;
  bottom: -40px;
  font-size: 1.1rem;
  letter-spacing: 1.4px;
  word-spacing: 2px;
  background-color: #131520;
  padding: 8px 10px;
  cursor: pointer;
  border-radius: 4px;
  opacity: 0;
  border: 1px solid #ccc;
  transition: all 0.2s ease-in-out;
  box-shadow: rgba(0,0,0 / 50%), 0px 0px 18px 0px;
  `;

const SignOut = styled.div`
  position: relative;
  &:hover ${Dropdown}{
    opacity: 1;
    }

` 



export default Header;
