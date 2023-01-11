import Profile from './components/Profile';
import users from './user.json';

export default function App() {
  return (
      <div> <Profile
        userName={users.username}
        tag={users.tag}
        location={users.location}
        avatar={users.avatar}
        />
      </div>
);
}
