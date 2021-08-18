import React from "react";
import Navbar from "../../components/navbar";
import ProductCard from "../../components/productcard/ProductCard";
// import Header from "../../components/header";
import PauseOnHover from "../../components/slider";
import ProductPage from "../../productpage/ProductPage";
function LandingPage() {
  const data = [
    {
      catogeries: "phone",
      name: "APPLE iPhone 12 Pro (Gold, 128 GB)",
      rating: "4.5",
      discription:
        "A14 Bionic rockets past every other smartphone chip. The Pro camera system takes low-light photography to the next level — with an even bigger jump on iPhone 12 Pro Max. And Ceramic Shield delivers four times better drop performance. Let’s see what this thing can do.",
      price: "₹119900",

      image: [
        "https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/s/9/w/apple-iphone-12-pro-dummyapplefsn-original-imafwgbrnpyygbv9.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/s/9/w/apple-iphone-12-pro-dummyapplefsn-original-imafwgbrpksqr8zu.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/s/9/w/apple-iphone-12-pro-dummyapplefsn-original-imafwgbrgcctfysm.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/s/9/w/apple-iphone-12-pro-dummyapplefsn-original-imafwgbrqwsxbmuh.jpeg?q=70",
      ],
      review: [
        "Performance was blazing quick too. Even with all its bells and whistles, FunTouch OS ran smoothly and was easy to master. I also found the biometrics to be very reliable, be it the fingerprint sensor or face recognition. Videos looked great on the phone's display, especially HDR content.",
        "One of the best looking phone in the market right now with a decent performance jump from 11 pro. Camera is excellent and the display is quite responsive and sharp. Only issue is it does not have a higher refresh rate and the battery life is average.",
        "I have upgraded from Android to iOS for the first time with the IPhone 12 Pro. And the experience is very much satisfactory. The new A14 bionic processor is very fast. The boxy design is what I liked the most. The camera and display are top notch. Night mode photography is excellent. Worth upgrading from Android to iOS .",
        "Awesome! Just made an upgrade from X, worth every single penny spent on it, the camera is just too superb, be it the selfie cam or the main rear cam, the goodness it takes the picture is just beyond words, no smart phone can beat it atm! However, the battery life tends to be on the shorter side, that’s the only con that I can’t think up of now.",
      ],
    },

    {
      catogeries: "phone",
      name: "realme Narzo 30 5G (Racing Blue, 128 GB)",
      rating: "4.5",
      discription:
        "High-speed internet, smooth gaming, and stunning photos, the realme Narzo Pro 5G is a power-packed smartphone for impressive performance. This smartphone features the 5G Technology for high-speed web browsing, the Dimensity 700 5G Processor for smooth gaming, and a 5000 mAh Massive Battery for hours of uninterrupted performance.",
      price: "₹15,990",

      image: [
        "https://rukminim1.flixcart.com/image/416/416/kq18n0w0/mobile/d/l/f/narzo-30-5g-rmx3242-realme-original-imag45yjdkgxddvh.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/kq18n0w0/mobile/8/u/w/narzo-30-5g-rmx3242-realme-original-imag45yjxdvfkrws.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/kq18n0w0/mobile/j/s/o/narzo-30-5g-rmx3242-realme-original-imag45yjnhhqy4gv.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/kq18n0w0/mobile/o/l/w/narzo-30-5g-rmx3242-realme-original-imag45yjxqhvfzjn.jpeg?q=70",
      ],
      review: [
        `First the phone design is awesome. And in this price it is the best 6gb ram 5G phone.
        Pros:
        1. Good battery life
        2. Smooth refresh rate
        3. Design
        4. Additional ram of 5gb features
        5. 5G phone with most number of bands in India ri8 now.
        
        
        Cons:
        1. Display LCD not up to the mark
        2. Camera is better but ok
        3. 18W charger`,
        "Really great phone , it's worth for money , good display , good battery backup , really a good phone ❤️👏👍",
        `super camera qulity...i use realme phon first time but i m feel so much happy and satisfaide with product..
  
        battry life is good and phon work also fast...
        
        and specily thenks to flipcart..`,
      ],
    },

    {
      catogeries: "phone",
      name: "POCO M3 (Power Black, 64 GB)",
      rating: "4.5",
      discription:
        "High-speed internet, smooth gaming, and stunning photos, the realme Narzo Pro 5G is a power-packed smartphone for impressive performance. This smartphone features the 5G Technology for high-speed web browsing, the Dimensity 700 5G Processor for smooth gaming, and a 5000 mAh Massive Battery for hours of uninterrupted performance.",
      price: "₹11,499",

      image: [
        "https://rukminim1.flixcart.com/image/416/416/kklhbbk0/mobile/m/s/f/m3-mzb0879in-poco-original-imafzxf686qtxq2x.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/kkoc70w0/mobile/l/5/5/m3-mzb0879in-poco-original-imafzyx8dkyvjyt5.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/kklhbbk0/mobile/w/k/2/m3-mzb0879in-poco-original-imafzxf65mefhdrr.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/kklhbbk0/mobile/e/e/d/m3-mzb0879in-poco-original-imafzxf6e5mvhqpm.jpeg?q=70",
      ],
      review: [
        `Good mobile poco m3
        Pros:
        Fullhd display,
        smooth tocuh response,
        6000mah battery,
        avarage weight,
        back disign amazing,
        no heatting issue,
        decent back camera
        Excellent sound quality it's very clear
        Cons:
        front camara not take a clear picture,
        Charging time to long .50% charging time 1 hour 35 minutes.
        Ovarall the price segment this mobile good`,
        "Sound quality super 3 type sound but camera selfie camera is not good &Back camera is normally or value of money. Totally side & angel to seen to parfect",
        `One word review " Value for Money"
        It has the potential to be a nice casual daily driver
        Speakers are loud...like seriously loud.
        Screen size is good
        Though being a LCD screen it produces decent colours. For the price at which it comes that more than enough.
        Camera is neither the best nor the worst, it's quite good for this price point.
        6000 mA battery 🔋👍🏻
        Though it comes with a lot of bloatware but you can just uninstall most of them (excluding system apps)
        Finally the Verdict is that it's a good budget smartphone`,
      ],
    },

    {
      catogeries: "phone",
      name: "MOTOROLA G60 (Dynamic Gray, 128 GB)",
      rating: "4.5",
      discription:
        "The moto g60 enables you to capture spectacular selfies wherever you are, thanks to its 32 MP selfie camera, the Quad Pixel technology, and LED flash. Thanks to the smooth 17.2 cm (6.8) HDR10 Display, you can enjoy a lifelike experience while streaming content, gaming, and more. And, thanks to the powerful 6000 mAh battery, you can enjoy using your mobile phone for all that you need, without any low-battery interruptions for a long time.",
      price: "₹17,999",

      image: [
        "https://rukminim1.flixcart.com/image/416/416/knoxnrk0/mobile/g/1/j/g60-panb0000in-panb0016in-panb0012in-panb0014in-motorola-original-imag2aq9v8hzetbn.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/kolsscw0/mobile/u/o/z/g60-panb0000in-panb0016in-panb0012in-panb0014in-motorola-original-imag3f57r8v8p7q5.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/knoxnrk0/mobile/h/c/a/g60-panb0000in-panb0016in-panb0012in-panb0014in-motorola-original-imag2aq9j5czsghh.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/knoxnrk0/mobile/i/5/z/g60-panb0000in-panb0016in-panb0012in-panb0014in-motorola-original-imag2aq9zhcmnnym.jpeg?q=70",
      ],
      review: [
        `1.Very Smooth user interface.
        2. Gives you easily Two Days of battery backup with average use.
        3. Hepatic feedback too good.
        4. In this price range Rear camera is Above average. Hope it should be improve in future updates. & Front camera perform very well.
        5. In hand feel is little bulky, it feel heavier than other phone due to its big 6000 mah battery
        6. Display size is very big ( 6.8 inches ) & bright.
        7. Voice call quality is very good & clear.
        8. Notification LED light is missing, but Previous Motorola phones have led notification light.
        9. You will definitely love the gesture controls of this phone.
        10. It is splash proof & water repellent design.
        
        Over all this phone is value for money
        Go for it ...`,
        "Best phone in budget. Working very smoothly. Touch quality is awesome. Display is also very nice. Battery of the phone is very good only camera part is not so good as expected some updates are needed in camera rest all the things are the best.",
        `Product is worth of money. Performance of this is very smooth. I love it usually m using Motorola smart phone but this one is best.`,
      ],
    },

    {
      catogeries: "phone",
      name: "Mi 11X (Lunar White, 128 GB)",
      rating: "4.2",
      discription:
        "The Mi 11X from Xiaomi is the most affordable of three new models in the Mi 11 family. It's priced a bit lower than the Mi 10T but offers plenty of updated features, most notably its Qualcomm Snapdragon 870 SoC which is only one step below the current flagship level. ",
      price: "₹27,990",
      image: [
        "https://rukminim1.flixcart.com/image/416/416/kp78e4w0/mobile/b/2/u/11x-11x-mi-original-imag3hqsshfzpv4u.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/ko8xtow0/mobile/0/t/7/m2012k11ai-11x-redmi-original-imag2qsbpgar8sfd.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/kod858w0/mobile/0/m/5/11x-pro-11x-pro-mi-original-imag2tzmhwzmf66y.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/ko8xtow0/mobile/o/4/b/m2012k11ai-11x-redmi-original-imag2qsbpbk6vyg3.jpeg?q=70",
      ],
      review: [
        "Performance was blazing quick too. Even with all its bells and whistles, FunTouch OS ran smoothly and was easy to master. I also found the biometrics to be very reliable, be it the fingerprint sensor or face recognition. Videos looked great on the phone's display, especially HDR content. ",
        "I say about this mobile only wow wow and wow it's performing god level performance and this mobile look so cool very slim and light weight mobile display quality is 10/10 battery life is so better it's battery perform like 6000 mah of ips display mobile amoled is very good working Iblove it❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️😍😍😍😍",
        "Good phone...But not a good camera..Usually redmi phones not good in camera quality but it's ok...120 heartz refresh rate with AMO LED display give perfect display and best batter backup",
      ],
    },
  ];
  return (
    <div>
      <Navbar />
      {/* <Header /> */}
      {/* <Navbar /> */}
      {/* <PauseOnHover /> */}
      <div className="nothing">
        {data.map((item, index) => (
          <ProductCard
            key={index}
            name={item.name}
            price={item.price}
            url={item.image[0]}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
