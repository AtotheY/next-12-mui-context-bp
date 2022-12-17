import { loadPageContent } from 'helpers/api';
import { getTestData } from 'services/test';
import TestPage from 'components/test/Test';
import { getCookiePrefs } from 'services/common';

export default async function Page() {
  return <TestPage />;
}

export async function getServerSideProps({ req, res }) {
  return {
    props: {
      ...(await loadPageContent([getTestData(), getCookiePrefs(req, res)])),
    },
  };
}
