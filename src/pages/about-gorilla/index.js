import AboutGorillaView from 'views/Customer/AboutGorilla'

const AboutGorillaPage = () => {
  return (
    <div>
      <AboutGorillaView />
    </div>
  );
};

// Force server-side rendering to avoid Html import issues
export async function getServerSideProps() {
  return {
    props: {},
  }
}

export default AboutGorillaPage;
