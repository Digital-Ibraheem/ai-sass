import { LandingContent } from './_components/landing-content';
import { LandingHero } from './_components/landing-hero';
import { LandingNavbar } from './_components/landing-navbar';

export default function Home() {
  return (
    <div className='h-full '>
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
}
