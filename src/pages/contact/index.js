import ContactView from 'views/Customer/Contact/Contact'

const ContactPage = () => {
  return (
    <div>
      <ContactView />
    </div>
  );
};

// Force server-side rendering to avoid Html import issues
export async function getServerSideProps() {
  return {
    props: {},
  }
}

export default ContactPage;
