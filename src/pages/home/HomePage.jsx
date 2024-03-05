import MailnLayout from '../../components/MainLayout';
import Articles from './container/Articles';
import Cta from './container/Cta';
import Hero from './container/Hero';

export default function HomePage() {
  return (
    <MailnLayout>
      <Hero />
      <Articles />
      <Cta />
    </MailnLayout>
  )
}
