import data from './data/data.json';
import users from './data/user.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import Section from './components/Section/Section';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

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
      <Section>
        <FriendList friends={friends}/>
      </Section>
      <Section>
      <TransactionHistory items={transactions} />;
      </Section>
    </div>
  );
}
