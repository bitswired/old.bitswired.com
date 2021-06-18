import Features from 'components/Home/Features';
import Landing from 'components/Home/Landing';
import useLandingSize from 'hooks/landing-size';

export default function LandingPage(): JSX.Element {
  const landingSize = useLandingSize();

  return (
    <>
      <Landing size={landingSize} />
      <Features />
    </>
  );
}
