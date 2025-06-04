import SettingsView from 'views/Customer/Settings'

const SettingPage = () => {
  return <SettingsView />
}

// Force server-side rendering to avoid Html import issues
export async function getServerSideProps() {
  return {
    props: {},
  }
}

export default SettingPage
