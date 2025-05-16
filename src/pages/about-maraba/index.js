import AboutMarabaView from 'views/Customer/AboutMaraba'

const AboutMarabaPage = () => {
  return (
    <div>
      <AboutMarabaView />
    </div>
  );
};

// Force server-side rendering to avoid Html import issues
export async function getServerSideProps() {
  return {
    props: {},
  }
}

export default AboutMarabaPage;
