const AboutPage = () => {
  return (
    <div>
      <h1 className='flex gap-2 sm:gap-4 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl'>
        we love
        <span className='bg-primary py-2 px-4 rounded-lg text-white shadow-md'>
          Comfee
        </span>
      </h1>
      <p className='mt-8 text-lg tracking-wide max-w-3xl mx-auto text-muted-foreground leading-loose'>
        At Comfee, we are dedicated to transforming the way you shop for
        furniture and home products. With a curated selection of stylish and
        comfortable pieces, we strive to create spaces that reflect your unique
        taste and lifestyle. Our mission is to provide a seamless shopping
        experience, offering quality products that enhance your home with
        elegance and comfort. Explore our collection and discover how we're
        redefining the art of furnishing homes.
      </p>
    </div>
  );
};
export default AboutPage;
