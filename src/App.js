import data from './data/data.json';
import users from './data/user.json';
import Section from './components/Section/Section';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import StatisticsList from './components/Statistics/StatisticsList';

export default function App() {
  return (
    <div>
      <Section>
        <Profile
          {...users}
          // username={users.username}
          // tag={users.tag}
          // location={users.location}
          // avatar={users.avatar}
          // followers={users.stats.followers}
          // likes={users.stats.likes}
          // views={users.stats.views}
        />
      </Section>
      <Section>
        <Statistics title="Upload stats" stats={data} />
      </Section>
    </div>
  );
}
