import './App.css';
import { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import RegistrationForm from './components/Registration';
import LoginForm from './components/LoginForm';
import {useSelector ,useDispatch} from 'react-redux';
import ClassRecord from './components/ClassRecord';
import StudentPerformance from './components/StudentPerformance';
import ClassPerformance from './components/ClassPerformance';
import logo from './images/clipart4503271.png'
import Modal from './components/Modal';

function App() {

  const loggedInUser = useSelector(state => state.loggedInUser);
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);

  console.log(loggedInUser);

  return (
    <div className={!loggedInUser ? "bg-image" : "bg-color"}>

      <div className="Header">
        <div className="trapezoid-border">
          <div className="trapezoid">
            <div className="trapezoid-left">
              <a href="https://www.upliftcodecamp.com/" target="_blank">
                <img className="thumbnail" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00NjcsNzZINDVDMjAuMTM3LDc2LDAsOTYuMjYyLDAsMTIxdjI3MGMwLDI0Ljg4NSwyMC4yODUsNDUsNDUsNDVoNDIyYzI0LjY1NSwwLDQ1LTIwLjAzLDQ1LTQ1VjEyMQ0KCQkJQzUxMiw5Ni4zMDYsNDkxLjk0Myw3Niw0NjcsNzZ6IE00NjAuNjk4LDEwNmMtOS4xOTQsOS4xNDUtMTY3LjQxNSwxNjYuNTMzLTE3Mi44NzgsMTcxLjk2N2MtOC41LDguNS0xOS44LDEzLjE4LTMxLjgyLDEzLjE4DQoJCQlzLTIzLjMyLTQuNjgxLTMxLjg0OC0xMy4yMDhDMjIwLjQ3OCwyNzQuMjg0LDY0LjAwMywxMTguNjM0LDUxLjMwMiwxMDZINDYwLjY5OHogTTMwLDM4NC44OTRWMTI3LjEyNUwxNTkuNjM4LDI1Ni4wOEwzMCwzODQuODk0eg0KCQkJIE01MS4zMjEsNDA2bDEyOS41ODctMTI4Ljc2M2wyMi4wNTksMjEuOTQzYzE0LjE2NiwxNC4xNjYsMzMsMjEuOTY3LDUzLjAzMywyMS45NjdjMjAuMDMzLDAsMzguODY3LTcuODAxLDUzLjAwNS0yMS45MzkNCgkJCWwyMi4wODctMjEuOTcxTDQ2MC42NzksNDA2SDUxLjMyMXogTTQ4MiwzODQuODk0TDM1Mi4zNjIsMjU2LjA4TDQ4MiwxMjcuMTI1VjM4NC44OTR6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
                <span> info@school.com.ph</span>
              </a>
              <span>
                <img className="thumbnail" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDczLjgwNiA0NzMuODA2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzMuODA2IDQ3My44MDY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMzc0LjQ1NiwyOTMuNTA2Yy05LjctMTAuMS0yMS40LTE1LjUtMzMuOC0xNS41Yy0xMi4zLDAtMjQuMSw1LjMtMzQuMiwxNS40bC0zMS42LDMxLjVjLTIuNi0xLjQtNS4yLTIuNy03LjctNA0KCQkJYy0zLjYtMS44LTctMy41LTkuOS01LjNjLTI5LjYtMTguOC01Ni41LTQzLjMtODIuMy03NWMtMTIuNS0xNS44LTIwLjktMjkuMS0yNy00Mi42YzguMi03LjUsMTUuOC0xNS4zLDIzLjItMjIuOA0KCQkJYzIuOC0yLjgsNS42LTUuNyw4LjQtOC41YzIxLTIxLDIxLTQ4LjIsMC02OS4ybC0yNy4zLTI3LjNjLTMuMS0zLjEtNi4zLTYuMy05LjMtOS41Yy02LTYuMi0xMi4zLTEyLjYtMTguOC0xOC42DQoJCQljLTkuNy05LjYtMjEuMy0xNC43LTMzLjUtMTQuN3MtMjQsNS4xLTM0LDE0LjdjLTAuMSwwLjEtMC4xLDAuMS0wLjIsMC4ybC0zNCwzNC4zYy0xMi44LDEyLjgtMjAuMSwyOC40LTIxLjcsNDYuNQ0KCQkJYy0yLjQsMjkuMiw2LjIsNTYuNCwxMi44LDc0LjJjMTYuMiw0My43LDQwLjQsODQuMiw3Ni41LDEyNy42YzQzLjgsNTIuMyw5Ni41LDkzLjYsMTU2LjcsMTIyLjdjMjMsMTAuOSw1My43LDIzLjgsODgsMjYNCgkJCWMyLjEsMC4xLDQuMywwLjIsNi4zLDAuMmMyMy4xLDAsNDIuNS04LjMsNTcuNy0yNC44YzAuMS0wLjIsMC4zLTAuMywwLjQtMC41YzUuMi02LjMsMTEuMi0xMiwxNy41LTE4LjFjNC4zLTQuMSw4LjctOC40LDEzLTEyLjkNCgkJCWM5LjktMTAuMywxNS4xLTIyLjMsMTUuMS0zNC42YzAtMTIuNC01LjMtMjQuMy0xNS40LTM0LjNMMzc0LjQ1NiwyOTMuNTA2eiBNNDEwLjI1NiwzOTguODA2DQoJCQlDNDEwLjE1NiwzOTguODA2LDQxMC4xNTYsMzk4LjkwNiw0MTAuMjU2LDM5OC44MDZjLTMuOSw0LjItNy45LDgtMTIuMiwxMi4yYy02LjUsNi4yLTEzLjEsMTIuNy0xOS4zLDIwDQoJCQljLTEwLjEsMTAuOC0yMiwxNS45LTM3LjYsMTUuOWMtMS41LDAtMy4xLDAtNC42LTAuMWMtMjkuNy0xLjktNTcuMy0xMy41LTc4LTIzLjRjLTU2LjYtMjcuNC0xMDYuMy02Ni4zLTE0Ny42LTExNS42DQoJCQljLTM0LjEtNDEuMS01Ni45LTc5LjEtNzItMTE5LjljLTkuMy0yNC45LTEyLjctNDQuMy0xMS4yLTYyLjZjMS0xMS43LDUuNS0yMS40LDEzLjgtMjkuN2wzNC4xLTM0LjFjNC45LTQuNiwxMC4xLTcuMSwxNS4yLTcuMQ0KCQkJYzYuMywwLDExLjQsMy44LDE0LjYsN2MwLjEsMC4xLDAuMiwwLjIsMC4zLDAuM2M2LjEsNS43LDExLjksMTEuNiwxOCwxNy45YzMuMSwzLjIsNi4zLDYuNCw5LjUsOS43bDI3LjMsMjcuMw0KCQkJYzEwLjYsMTAuNiwxMC42LDIwLjQsMCwzMWMtMi45LDIuOS01LjcsNS44LTguNiw4LjZjLTguNCw4LjYtMTYuNCwxNi42LTI1LjEsMjQuNGMtMC4yLDAuMi0wLjQsMC4zLTAuNSwwLjUNCgkJCWMtOC42LDguNi03LDE3LTUuMiwyMi43YzAuMSwwLjMsMC4yLDAuNiwwLjMsMC45YzcuMSwxNy4yLDE3LjEsMzMuNCwzMi4zLDUyLjdsMC4xLDAuMWMyNy42LDM0LDU2LjcsNjAuNSw4OC44LDgwLjgNCgkJCWM0LjEsMi42LDguMyw0LjcsMTIuMyw2LjdjMy42LDEuOCw3LDMuNSw5LjksNS4zYzAuNCwwLjIsMC44LDAuNSwxLjIsMC43YzMuNCwxLjcsNi42LDIuNSw5LjksMi41YzguMywwLDEzLjUtNS4yLDE1LjItNi45DQoJCQlsMzQuMi0zNC4yYzMuNC0zLjQsOC44LTcuNSwxNS4xLTcuNWM2LjIsMCwxMS4zLDMuOSwxNC40LDcuM2MwLjEsMC4xLDAuMSwwLjEsMC4yLDAuMmw1NS4xLDU1LjENCgkJCUM0MjAuNDU2LDM3Ny43MDYsNDIwLjQ1NiwzODguMjA2LDQxMC4yNTYsMzk4LjgwNnoiLz4NCgkJPHBhdGggZD0iTTI1Ni4wNTYsMTEyLjcwNmMyNi4yLDQuNCw1MCwxNi44LDY5LDM1LjhzMzEuMyw0Mi44LDM1LjgsNjljMS4xLDYuNiw2LjgsMTEuMiwxMy4zLDExLjJjMC44LDAsMS41LTAuMSwyLjMtMC4yDQoJCQljNy40LTEuMiwxMi4zLTguMiwxMS4xLTE1LjZjLTUuNC0zMS43LTIwLjQtNjAuNi00My4zLTgzLjVzLTUxLjgtMzcuOS04My41LTQzLjNjLTcuNC0xLjItMTQuMywzLjctMTUuNiwxMQ0KCQkJUzI0OC42NTYsMTExLjUwNiwyNTYuMDU2LDExMi43MDZ6Ii8+DQoJCTxwYXRoIGQ9Ik00NzMuMjU2LDIwOS4wMDZjLTguOS01Mi4yLTMzLjUtOTkuNy03MS4zLTEzNy41cy04NS4zLTYyLjQtMTM3LjUtNzEuM2MtNy4zLTEuMy0xNC4yLDMuNy0xNS41LDExDQoJCQljLTEuMiw3LjQsMy43LDE0LjMsMTEuMSwxNS42YzQ2LjYsNy45LDg5LjEsMzAsMTIyLjksNjMuN2MzMy44LDMzLjgsNTUuOCw3Ni4zLDYzLjcsMTIyLjljMS4xLDYuNiw2LjgsMTEuMiwxMy4zLDExLjINCgkJCWMwLjgsMCwxLjUtMC4xLDIuMy0wLjJDNDY5LjU1NiwyMjMuMzA2LDQ3NC41NTYsMjE2LjMwNiw0NzMuMjU2LDIwOS4wMDZ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
                <span>Call us: 0999-123-4567</span>
              </span>
            </div>
            <div className="trapezoid-right">
              <img className="thumbnail2" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6IzE5NzZEMjsiIGQ9Ik00NDgsMEg2NEMyOC43MDQsMCwwLDI4LjcwNCwwLDY0djM4NGMwLDM1LjI5NiwyOC43MDQsNjQsNjQsNjRoMzg0YzM1LjI5NiwwLDY0LTI4LjcwNCw2NC02NFY2NA0KCUM1MTIsMjguNzA0LDQ4My4yOTYsMCw0NDgsMHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGQUZBRkE7IiBkPSJNNDMyLDI1NmgtODB2LTY0YzAtMTcuNjY0LDE0LjMzNi0xNiwzMi0xNmgzMlY5NmgtNjRsMCwwYy01My4wMjQsMC05Niw0Mi45NzYtOTYsOTZ2NjRoLTY0djgwaDY0DQoJdjE3Nmg5NlYzMzZoNDhMNDMyLDI1NnoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />
              <img className="thumbnail2" src="data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwIC0xLjk4MiAtMS44NDQgMCAtMTMyLjUyMiAtNTEuMDc3KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSItMzcuMTA2IiB4Mj0iLTI2LjU1NSIgeTE9Ii03Mi43MDUiIHkyPSItODQuMDQ3Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZDUiLz48c3RvcCBvZmZzZXQ9Ii41IiBzdG9wLWNvbG9yPSIjZmY1NDNlIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYzgzN2FiIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBkPSJtMS41IDEuNjMzYy0xLjg4NiAxLjk1OS0xLjUgNC4wNC0xLjUgMTAuMzYyIDAgNS4yNS0uOTE2IDEwLjUxMyAzLjg3OCAxMS43NTIgMS40OTcuMzg1IDE0Ljc2MS4zODUgMTYuMjU2LS4wMDIgMS45OTYtLjUxNSAzLjYyLTIuMTM0IDMuODQyLTQuOTU3LjAzMS0uMzk0LjAzMS0xMy4xODUtLjAwMS0xMy41ODctLjIzNi0zLjAwNy0yLjA4Ny00Ljc0LTQuNTI2LTUuMDkxLS41NTktLjA4MS0uNjcxLS4xMDUtMy41MzktLjExLTEwLjE3My4wMDUtMTIuNDAzLS40NDgtMTQuNDEgMS42MzN6IiBmaWxsPSJ1cmwoI1NWR0lEXzFfKSIvPjxwYXRoIGQ9Im0xMS45OTggMy4xMzljLTMuNjMxIDAtNy4wNzktLjMyMy04LjM5NiAzLjA1Ny0uNTQ0IDEuMzk2LS40NjUgMy4yMDktLjQ2NSA1LjgwNSAwIDIuMjc4LS4wNzMgNC40MTkuNDY1IDUuODA0IDEuMzE0IDMuMzgyIDQuNzkgMy4wNTggOC4zOTQgMy4wNTggMy40NzcgMCA3LjA2Mi4zNjIgOC4zOTUtMy4wNTguNTQ1LTEuNDEuNDY1LTMuMTk2LjQ2NS01LjgwNCAwLTMuNDYyLjE5MS01LjY5Ny0xLjQ4OC03LjM3NS0xLjctMS43LTMuOTk5LTEuNDg3LTcuMzc0LTEuNDg3em0tLjc5NCAxLjU5N2M3LjU3NC0uMDEyIDguNTM4LS44NTQgOC4wMDYgMTAuODQzLS4xODkgNC4xMzctMy4zMzkgMy42ODMtNy4yMTEgMy42ODMtNy4wNiAwLTcuMjYzLS4yMDItNy4yNjMtNy4yNjUgMC03LjE0NS41Ni03LjI1NyA2LjQ2OC03LjI2M3ptNS41MjQgMS40NzFjLS41ODcgMC0xLjA2My40NzYtMS4wNjMgMS4wNjNzLjQ3NiAxLjA2MyAxLjA2MyAxLjA2MyAxLjA2My0uNDc2IDEuMDYzLTEuMDYzLS40NzYtMS4wNjMtMS4wNjMtMS4wNjN6bS00LjczIDEuMjQzYy0yLjUxMyAwLTQuNTUgMi4wMzgtNC41NSA0LjU1MXMyLjAzNyA0LjU1IDQuNTUgNC41NSA0LjU0OS0yLjAzNyA0LjU0OS00LjU1LTIuMDM2LTQuNTUxLTQuNTQ5LTQuNTUxem0wIDEuNTk3YzMuOTA1IDAgMy45MSA1LjkwOCAwIDUuOTA4LTMuOTA0IDAtMy45MS01LjkwOCAwLTUuOTA4eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==" />
              <img className="thumbnail2" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDM4MiAzODIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM4MiAzODI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiMwMDc3Qjc7IiBkPSJNMzQ3LjQ0NSwwSDM0LjU1NUMxNS40NzEsMCwwLDE1LjQ3MSwwLDM0LjU1NXYzMTIuODg5QzAsMzY2LjUyOSwxNS40NzEsMzgyLDM0LjU1NSwzODJoMzEyLjg4OQ0KCUMzNjYuNTI5LDM4MiwzODIsMzY2LjUyOSwzODIsMzQ3LjQ0NFYzNC41NTVDMzgyLDE1LjQ3MSwzNjYuNTI5LDAsMzQ3LjQ0NSwweiBNMTE4LjIwNywzMjkuODQ0YzAsNS41NTQtNC41MDIsMTAuMDU2LTEwLjA1NiwxMC4wNTYNCglINjUuMzQ1Yy01LjU1NCwwLTEwLjA1Ni00LjUwMi0xMC4wNTYtMTAuMDU2VjE1MC40MDNjMC01LjU1NCw0LjUwMi0xMC4wNTYsMTAuMDU2LTEwLjA1Nmg0Mi44MDYNCgljNS41NTQsMCwxMC4wNTYsNC41MDIsMTAuMDU2LDEwLjA1NlYzMjkuODQ0eiBNODYuNzQ4LDEyMy40MzJjLTIyLjQ1OSwwLTQwLjY2Ni0xOC4yMDctNDAuNjY2LTQwLjY2NlM2NC4yODksNDIuMSw4Ni43NDgsNDIuMQ0KCXM0MC42NjYsMTguMjA3LDQwLjY2Niw0MC42NjZTMTA5LjIwOCwxMjMuNDMyLDg2Ljc0OCwxMjMuNDMyeiBNMzQxLjkxLDMzMC42NTRjMCw1LjEwNi00LjE0LDkuMjQ2LTkuMjQ2LDkuMjQ2SDI4Ni43Mw0KCWMtNS4xMDYsMC05LjI0Ni00LjE0LTkuMjQ2LTkuMjQ2di04NC4xNjhjMC0xMi41NTYsMy42ODMtNTUuMDIxLTMyLjgxMy01NS4wMjFjLTI4LjMwOSwwLTM0LjA1MSwyOS4wNjYtMzUuMjA0LDQyLjExdjk3LjA3OQ0KCWMwLDUuMTA2LTQuMTM5LDkuMjQ2LTkuMjQ2LDkuMjQ2aC00NC40MjZjLTUuMTA2LDAtOS4yNDYtNC4xNC05LjI0Ni05LjI0NlYxNDkuNTkzYzAtNS4xMDYsNC4xNC05LjI0Niw5LjI0Ni05LjI0Nmg0NC40MjYNCgljNS4xMDYsMCw5LjI0Niw0LjE0LDkuMjQ2LDkuMjQ2djE1LjY1NWMxMC40OTctMTUuNzUzLDI2LjA5Ny0yNy45MTIsNTkuMzEyLTI3LjkxMmM3My41NTIsMCw3My4xMzEsNjguNzE2LDczLjEzMSwxMDYuNDcyDQoJTDM0MS45MSwzMzAuNjU0TDM0MS45MSwzMzAuNjU0eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
            </div>
          </div>     
        </div>
        <div className="sub-header">
          <div className="sub-sub-header">
            <Link to="/" className="school-name" style={{textDecoration: 'none', color: 'white'}}>     
                <img className="logo" src={logo} />
                <div className="logo-text">
                  <h1>SCHOOL</h1>
                  <h3>University</h3>
                </div>
            </Link>
          </div>
          
            <div className="links">              
                <a href="https://www.upliftcodecamp.com/" target="_blank">About Us</a>
            </div>
            <div className="links">
                <a href="https://www.upliftcodecamp.com/" target="_blank">Academics</a>
            </div>
            <div className="links">
                <a href="https://www.upliftcodecamp.com/" target="_blank">Blog</a>
            </div>
            <div className="links">
                <a href="https://www.upliftcodecamp.com/" target="_blank">Contact Us</a>
            </div>
          <Route path="/" >          
                {loggedInUser ? <Link  to="/" onClick={() => {dispatch({type: 'LOGOUT'})}}>Logout</Link> : <a onClick={()=> setShow(true)} className="login">Login</a>}                      
          </Route>
          {/* <Route path="/" >          
                <Link  to="/register" >registrationt</Link>                     
          </Route> */}
        </div>

        <LoginForm onClose={() => setShow(false)} show={show} setShow={setShow} />
        <p className="app-name">Powered by &copy; Counselify</p>
      </div>
        {loggedInUser ? 
          <div className="greeting">   
            <h3>Hello, {loggedInUser.role === 'teacher' ? 'teacher' : ''} {loggedInUser.firstName}! </h3>
          </div>
           : ""}
      
      {loggedInUser === null ? "" : <>{loggedInUser.role === 'student' ? <div className="container-bg"><StudentPerformance /></div> : ""}</>}
      {loggedInUser === null ? "": <>{loggedInUser.role === 'teacher' 
      ?   <div className="ClassRecord container-bg">
            <ClassRecord />
            <ClassPerformance/>
          </div>  : ""}</>}
      <Route exact path="/register" component={RegistrationForm} />
      <Route exact path="/login" component={LoginForm} />
      {!loggedInUser ? 
        <footer>
                  <p> &copy; School University </p>
                  <p> Powered by &copy; Counselify</p>
        </footer>
      : ''}
    </div>
  );
}

export default App;
