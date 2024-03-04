import MailnLayout from '../../components/MainLayout';
import Articles from './container/Articles';
import Hero from './container/Hero';

export default function HomePage() {
  return (
    <MailnLayout>
      <Hero />
      <Articles />
    </MailnLayout>
  )
}
