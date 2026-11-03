import Footer from '@theme-original/DocItem/Footer';
import Helpful from '@site/src/components/Helpful';

export default function FooterWrapper(props) {
  return (
    <>
      <Helpful />
      <Footer {...props} />
    </>
  );
}
