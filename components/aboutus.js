import Aboutus from './components/AboutUs/Aboutus';
import Navbar from './components/Navbar';
import Head from 'next/head';
import { navLinks } from './components/utils/data';

export default function AboutUs() {
  return (
    <div>
      <Head>
        <title>Environment Awareness App</title>
        <meta name="description" content="" />
      </Head>

      <Navbar
        action1={navLinks[3].name}
        href1={navLinks[3].link}
        action2=""
        buttonText1={navLinks[4].name}
        href3={navLinks[4].link}
        buttonText2=""
        buttonText3=""
        buttonText4=""
      />
      <Aboutus />
    </div>
  );
}
