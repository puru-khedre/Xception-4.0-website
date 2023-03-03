const AboutUs = () => {
  return (
    <>
      {/* bg-[url('/images/rounded-zigzag.svg')] */}
      <div className="w-8/12 h-6 mx-auto flex flex-row items-center justify-center">
        <img src="/images/rounded-zigzag.svg" className="h-full" />
        <img src="/images/rounded-zigzag.svg" className="h-full" />
      </div>
      <div id="about" className="pt-[72px] mx-auto w-9/12 bg-opacity-40 pb-6">
        <h2 className="font-navbar text-4xl text-theme-dark font-semibold mb-2">
          About Us
        </h2>
        <p className="font-navbar text-xl text-theme-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          laudantium explicabo nesciunt vitae cupiditate? Officiis repellendus
          similique voluptate odio neque beatae aliquam totam itaque perferendis
          suscipit possimus alias nesciunt eius illo nemo delectus assumenda
          placeat incidunt, architecto odit modi cupiditate, molestias amet
          nulla! Eligendi atque ratione ipsam! Nisi, maxime blanditiis.
        </p>
        <br />
        <p className="font-navbar text-xl text-theme-normal">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste non
          inventore est officiis. Saepe expedita quam pariatur magnam nihil
          cumque perspiciatis natus tenetur, repellat maiores aut magni
          cupiditate at? Explicabo delectus pariatur dicta nisi distinctio
          reprehenderit, laboriosam eius necessitatibus nihil.
        </p>
      </div>
    </>
  );
};

export default AboutUs;
