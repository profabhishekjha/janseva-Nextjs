"use client";
import React from "react";
import Herocard from "./Herocard";
import Cards from "./Cards";
import BannerCarousel from "@/components/ui/carousel";
import AlignmentCards from "./AlignmentCards";
import { Separator } from "@/components/ui/separator";
import { ContextAccess } from "./ContextAccess";

const Hero = () => {
  const footerimages: string[] = [
    "/images/ImgCarousel/boy.jpg",
    "/images/ImgCarousel/boy-student.jpg",
    "/images/ImgCarousel/boy-student2.jpg",
    "/images/ImgCarousel/chote-boys.jpg",
    "/images/ImgCarousel/girl-student.jpg",
    "/images/ImgCarousel/girl-student2.jpg",
    "/images/ImgCarousel/hifi-child.jpg",
  ];

  const { isHindi } = ContextAccess();

  return (
    <div>
      <main>
        <div className="flex flex-1 justify-center text-center ">
          <h1 className="text-[1.2rem] w-[90%] mt-8  mx-auto md:mt-20">
            {!isHindi
              ? `Jansevaa Foundation is an NGO that offers comprehensive support in the fields of`
              : `जनसेवा फाउंडेशन एक गैर सरकारी संगठन (एनजीओ) है`}
            &nbsp;
            <span className="font-semibold bg-yellow-200 ">
              {!isHindi
                ? `medical assistance, student education, and training programs.`
                : `जो चिकित्सा सहायता, छात्र शिक्षा और प्रशिक्षण कार्यक्रमों के क्षेत्रों में व्यापक सहायता प्रदान करता है।`}
            </span>
            &nbsp;
            {!isHindi
              ? `Through their initiatives, they provide crucial medical aid, facilitate quality education for students, and offer training programs to equip individuals with essential skills. Jansevaa's commitment to making a positive impact on society is reflected in their dedication to these key areas of assistance.`
              : `उनकी पहलों के माध्यम से, वे महत्वपूर्ण चिकित्सा सहायता प्रदान करते हैं, छात्रों के लिए गुणवत्तापूर्ण शिक्षा को सुनिश्चित करते हैं, और आवश्यक कौशलों से व्यक्तियों को संपन्न करने के लिए प्रशिक्षण कार्यक्रम प्रदान करते हैं। जनसेवा का समाज पर पॉजिटिव प्रभाव डालने के लिए किए गए प्रतिबद्धता का उल्लेख उनकी इन महत्वपूर्ण सहायता क्षेत्रों में दिखता है।`}
          </h1>
        </div>

        <div className="mt-20 h-[50vh] max-sm:h-[70vh] w-full bg-[#efe3ce8a] text-center">
          <br />
          <h1 className="uppercase font-extrabold text-[3.5rem] max-md:text-[4.5vh] max-sm:text-[3vh] mt-3">
            {!isHindi ? `Our Accomplishments` : `हमारी प्राप्तियाँ`}
          </h1>
          {/* numbers */}
          <div className="items-center flex justify-center ">
            <div className="flex items-center justify-evenly w-1/2 max-md:w-full max-sm:flex-col mt-[3rem] max-md:mt-[3vh] max-sm:text-[2vh] ">
              <h1 className="grid  font-bold text-[2rem] max-md:text-[3vh] max-sm:text-[3vh]">
                <span className="text-[4rem] max-md:text-[6vh] max-sm:text-[4vh]">
                  15+{" "}
                </span>
                <span className="uppercase mb-4 max-sm:text-[4vh]">
                  {!isHindi ? `Thousands` : `हजारों`}
                </span>
                <span className="text-[1.5rem] max-md:text-[3vh] max-sm:text-[2vh] font-normal">
                  {!isHindi
                    ? `children and their families are impacted every year`
                    : `हर साल बच्चे और उनके परिवार पर प्रभाव डालते हैं`}
                </span>
              </h1>
              <h1 className="grid  font-bold text-[2rem] max-md:text-[3vh] max-sm:text-[3vh]">
                <span className="text-[4rem] max-md:text-[6vh] max-sm:text-[4vh]">
                  120+
                </span>
                <span className="uppercase mb-4">
                  {!isHindi ? `Projects` : `परियोजनाएँ`}
                </span>
                <span className="text-[1.5rem] max-md:text-[3vh] max-sm:text-[2vh] font-normal">
                  {!isHindi
                    ? `focused on education, healthcare, and women empowerment`
                    : `शिक्षा, स्वास्थ्य सेवाएँ और महिला सशक्तिकरण पर केंद्रित`}
                </span>
              </h1>
              <h1 className="grid  font-bold text-[2rem] max-md:text-[3vh] max-sm:text-[3vh]">
                <span className="text-[4rem] max-md:text-[6vh] max-sm:text-[4vh]">
                  25+
                </span>
                <span className="uppercase mb-4">
                  {!isHindi ? `States` : `राज्यों`}
                </span>
                <span className="text-[1.5rem] max-md:text-[3vh] max-sm:text-[2vh] font-normal">
                  {!isHindi
                    ? `are reached including the remotest areas`
                    : `समेत होते हैं सबसे दूर क्षेत्रों तक पहुँचाया जाता है`}
                </span>
              </h1>
            </div>
          </div>
        </div>
        {/* programms */}

        <div className="mt-20  h-[30vh] flex flex-col gap-10 items-center w-full text-center">
          <h1 className="text-[3rem] font-medium  ">
            {!isHindi ? `Our Initiatives` : `हमारी पहलें`}
          </h1>

          <div className="  grid grid-cols-4 mx-20 max-md:grid-cols-1 max-md:gap-14 max-sm:w-full max-sm:flex max-sm:flex-col max-sm:-ml-6">
            <Herocard
              heading={!isHindi ? `LEARNING FOR ALL` : `सभी के लिए सीखना`}
              description={
                !isHindi
                  ? `Promoting inclusive education, nourishment, and comprehensive growth of children`
                  : `समावेशी शिक्षा, पोषण और बच्चों के समग्र विकास को बढ़ावा देना`
              }
              images="/images/vc.svg"
              customClasses="h-20 max-md:absolute max-md:left-20 max-sm:hidden"
              blob="/images/blob1.svg"
            />
            <Herocard
              heading={!isHindi ? `WELLNESS ACCESS` : `स्वास्थ्य पहुँच`}
              description={
                !isHindi
                  ? `Bringing essential medical services to remote and underserved communities`
                  : `दूरस्थ और असेवित समुदायों में आवश्यक चिकित्सा सेवाओं को लाना`
              }
              images="/images/spa.svg"
              customClasses="h-20  max-md:absolute max-md:left-20  max-sm:hidden"
              blob="/images/blob2.svg"
            />
            <Herocard
              heading={!isHindi ? `Learning For All` : `सभी के लिए सीखना`}
              description={
                !isHindi
                  ? `Promoting inclusive education, nourishment, and comprehensive growth of children`
                  : `समावेशी शिक्षा, पोषण और बच्चों के समग्र विकास को बढ़ावा देना `
              }
              customClasses="h-20  max-md:absolute max-md:left-20  max-sm:hidden"
              images="/images/entrepreneurs.svg"
              blob="/images/blob3.svg"
            />
            <Herocard
              heading={!isHindi ? `PATH TO PROSPERITY` : `समृद्धि की ओर पथ`}
              description={
                !isHindi
                  ? `Imparting skills and aiding the career journey of disadvantaged youth`
                  : `अवसरवादी युवाओं के कौशलों को प्रदान करना और उनकी कैरियर यात्रा में सहायता करना`
              }
              customClasses="h-20  max-md:absolute max-md:left-20  max-sm:hidden"
              images="/images/startup.svg"
              blob="/images/blob4.svg"
            />
          </div>
        </div>

        {/* cards */}
        <div className="flex my-20 justify-between mx-10  lg:grid lg:grid-cols-4   max-md:mt-[65vh] max-md:justify-center max-sm:mt-[100vh] flex-wrap gap-10 ">
          <Cards
            heading={
              !isHindi ? `Knowledge Equality Initiative` : `ज्ञान समानता पहल`
            }
            description={
              !isHindi
                ? `With our Knowledge Equality Initiative, we're committed to LEARNING FOR ALL. We believe in inclusive education that nurtures children's minds and fosters growth.`
                : `हमारे ज्ञान समानता पहल के साथ, हम सभी के लिए सीखने के लिए प्रतिबद्ध हैं। हम समावेशी शिक्षा में विश्वास रखते हैं जो बच्चों के मन को पोषण और विकास को बढ़ावा देती है।`
            }
            images="/images/child.jpg"
          />
          <Cards
            heading={!isHindi ? `Empowerment Horizon` : `शक्तिपूर्ण क्षितिज`}
            description={
              !isHindi
                ? `Through our Empowerment Horizon program, we're dedicated to EMPOWERING HER. We're on a mission to uplift young women and girls by engaging them in community-driven initiatives.`
                : `हमारे शक्तिपूर्ण क्षितिज कार्यक्रम के माध्यम से, हम महिलाओं को सशक्त बनाने के लिए प्रतिबद्ध हैं। हम समुदाय द्वारा चलाए जाने वाले पहलों में उन्हें जोड़कर युवा महिलाओं और लड़कियों को उठाने के लिए एक मिशन पर हैं।`
            }
            images="/images/child2.jpg"
          />
          <Cards
            heading={!isHindi ? `Wellness Outreach` : `स्वास्थ्य पहुँच`}
            description={
              !isHindi
                ? `Join us in our Wellness Outreach endeavor as we ensure WELLNESS ACCESS for all. Our focus is on bringing crucial medical services to remote and underserved communities.`
                : `सभी के लिए स्वास्थ्य पहुँच सुनिश्चित करते हुए हमारे स्वास्थ्य पहुँच प्रयास में हमारे साथ जुड़ें। हमारा ध्यान दूरस्थ और असेवित समुदायों में आवश्यक चिकित्सा सेवाओं को लाने पर है।`
            }
            images="/images/child3.jpg"
          />
          <Cards
            heading={!isHindi ? `Prosperity Navigator` : `समृद्धि की ओर पथ`}
            description={
              !isHindi
                ? `Embark on the PATH TO PROSPERITY with our Prosperity Navigator program. We're dedicated to imparting valuable skills and aiding the career journey of disadvantaged youth.`
                : `हमारे समृद्धि नेविगेटर प्रोग्राम के साथ समृद्धि की ओर पथ पर अपनी यात्रा प्रारंभ करें। हम अवसरवादी युवाओं के कौशलों को प्रदान करने और उनकी कैरियर यात्रा में सहायता करने के लिए प्रतिबद्ध हैं।`
            }
            images="/images/child4.jpg"
          />
        </div>

        {/* carousel */}
        <div className="flex justify-center relative items-center my-15 mb-[10vh]  ">
          <BannerCarousel
            customClasses="w-[70vw] max-md:w-[100vw] "
            images={footerimages}
          />
          {/* <BannerCarousel /> */}
        </div>

        {/* <div className="my-5">
          <Separator />
        </div> */}
        <div className=" py-10 max-sm:w-full ">
          <div className="flex justify-center  items-center pt-5">
            <h1 className="text-[3rem]  font-semibold">
              {!isHindi ? `Our Endeavors` : `हमारी प्रयासें`}
            </h1>
          </div>
          <div className="flex justify-center">
            <Separator className="w-[75vw] ml-[2vw] mt-10" />
          </div>

          <AlignmentCards
            heading={
              !isHindi
                ? `Jansevaa is a notable NGO foundation renowned for its multifaceted support in critical areas such as medical aid, student education, and training initiatives. Their profound commitment to creating a positive societal impact is exemplified through their dedicated efforts in these key domains.`
                : `जनसेवा एक प्रसिद्ध एनजीओ संस्थान है जो चिकित्सा सहायता, छात्र शिक्षा और प्रशिक्षण पहलों जैसे महत्वपूर्ण क्षेत्रों में अपने बहुमुखी समर्थन के लिए प्रसिद्ध है। उनकी सकारात्मक सामाजिक प्रभाव बनाने की गहरी प्रतिबद्धता इन महत्वपूर्ण क्षेत्रों में उनके समर्पित प्रयासों के माध्यम से दिखाई देती है।`
            }
            /*   description="no desc" */
            images="/img1.jpg"
            cardtext={!isHindi ? `NEW ATTRIBUTE` : `नया गुण`}
          />
          <AlignmentCards
            heading={
              !isHindi
                ? `Through their comprehensive approach, Jansevaa offers vital medical assistance, ensures access to quality education for students, and imparts essential skills through various training programs.`
                : `अपने व्यापक दृष्टिकोण के माध्यम से, जनसेवा महत्वपूर्ण चिकित्सा सहायता प्रदान करता है, छात्रों के लिए गुणवत्ता शिक्षा की पहुँच सुनिश्चित करता है, और विभिन्न प्रशिक्षण कार्यक्रमों के माध्यम से आवश्यक कौशलों को प्रदान करता है।`
            }
            images="/img2.jpg"
            isImageLeft={true}
            cardtext={!isHindi ? `WELLNESS ACCESS` : `स्वास्थ्य पहुँच`}
          />
          <AlignmentCards
            images="/img3.jpg"
            heading={
              !isHindi
                ? `This organization's unwavering dedication to fostering positive change is evident in their holistic approach to uplifting communities and individuals in need.`
                : `इस संगठन की सकारात्मक परिवर्तन को बढ़ावा देने की अटल प्रतिबद्धता उनके समुदायों और जरूरतमंद व्यक्तियों को उठाने के लिए उनके समग्र दृष्टिकोण में स्पष्ट है।`
            }
            /*       description="no desc" */
            cardtext={!isHindi ? `EMPOWERING HER` : `उसे सशक्त बनाना`}
          />
        </div>
      </main>
    </div>
  );
};

export default Hero;
