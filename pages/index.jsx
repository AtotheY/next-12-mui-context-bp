import HomePage from 'components/home/Home';
import { loadPageContent } from 'helpers/api';
import { getCookiePrefs } from 'services/common';

export default function Index() {
  return <HomePage />;
}

export async function getServerSideProps({ req, res }) {
  return {
    props: {
      ...(await loadPageContent([getCookiePrefs(req, res)])),
    },
  };
}
