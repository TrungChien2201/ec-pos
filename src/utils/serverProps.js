/**
 * This utility function forces server-side rendering for pages
 * that have issues with static generation.
 * 
 * Add this to any page that's having issues with the Html component:
 * 
 * export { getServerSideProps } from 'utils/serverProps';
 */

export async function getServerSideProps(context) {
  return {
    props: {}, // Will be passed to the page component as props
  };
}
