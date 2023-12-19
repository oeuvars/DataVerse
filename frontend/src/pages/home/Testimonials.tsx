import Stars from "../../components/Stars";

const customers = [
  {
    id: 1,
    name: "Arameh E.",
    review:
      "I am very happy that I took the right decision of offering the project to Prembasu. He understood the job that needs to be taken care and completed the required tasks successfully. He has a very good professional attitude and stick to his commitments. He is a nice and easy going individual. I would definitely work with him again.",
  },
  {
    id: 2,
    name: "Wisdom E",
    review:
      "I am very happy that I took the right decision of offering the project to Prembasu. He understood the main areas that needs to be taken care and diligently completed the required tasks successfully. He has a very good professional attitude and stick to his commitments. He is a nice and easy going individual.",
  },
  {
    id: 3,
    name: "Mehvish D.",
    review: "Good work! Highly recommended!",
  },
  {
    id: 4,
    name: "Navdeep S",
    review:
      "Prem is awesome to work with. He's really cooperative & professional.",
  },
  {
    id: 5,
    name: "Matthew K",
    review:
      "It was a pleasure to work with him and his team. It was a simple but a difficult to understand task but he understood and made adjustments when requested. I would definitely work with him again. He has accomplished more than needed for my project.",
  },
  {
    id: 6,
    name: "Amr Bakrmansour",
    review:
      "He is Very professional and has Artistic sense. will hire again in my promotion campaign",
  },
  {
    id: 7,
    name: "Ashoo K.",
    review:
      "Open communication, positive response to feedback, willingness to make the end product of the finest quality. Great job!.",
  },
  {
    id: 8,
    name: "Gregory N",
    review:
      "The guy speaks excellent English, he is very accessible and diligent and conscientious about his work. The only problem I have with him he looks like he should be in Hollywood, Ha, Ha, he has a great personality.",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="pt-[4.5rem] pb-16">
        <h1 className=" phone:text-2xl lg:text-3xl text-center font-medium">
          Customer Testimonials
        </h1>
        <p className="font-rajdhani-medium phone:text-sm tablet:text-base lg:text-lg text-center mt-3 w-5/6 mx-auto">
          Recommended by leading experts of DataVerse partners - Reviews.
        </p>
      </div>
      <div className="grid phone:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-5/6 mx-auto gap-6">
        {customers.map((customer) => (
          <div className="bg-white/30 shadow-md p-4 hover:shadow-2xl hover:scale-105 transition duration-500 cursor-pointer">
            <div className="flex justify-between">
              <h1 className="text-xl  mb-2">{customer.name}</h1>
              <Stars />
            </div>
            <p className="text-justify tablet:text-base phone:text-sm font-rajdhani-medium">{customer.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
