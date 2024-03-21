import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel magnam
            adipisci, tenetur, et, impedit dolor enim porro eum earum
            consequuntur ipsum optio placeat expedita recusandae debitis non sed
            autem sint!
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
