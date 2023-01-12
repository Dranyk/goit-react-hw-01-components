import Profile from './components/Profile/Profile';
import users from './data/user.json';
import Section from './components/Section/Section'

export default function App() {
  return (
      <div> 
        <Section>
        <Profile
        userName={users.username}
        tag={users.tag}
        location={users.location}
        avatar={users.avatar}
        // followers={users.stats.followers}
        // likes={users.stats.likes}
        // views={users.stats.views}
        />
        </Section>
        
      </div>
);
}
