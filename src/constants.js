// work process
import process1 from "./assets/working-process-1.png";
import process2 from "./assets/working-process-2.png";
import process3 from "./assets/working-process-3.png";
import process4 from "./assets/working-process-4.png";

// web development services icons
import ecomWebIcon from "./assets/icons/online-shopping.png";
import socialWebIcon from "./assets/icons/socialmedia.png";
import landingWebIcon from "./assets/icons/landing-page.png";
import customWebIcon from "./assets/icons/software-development.png";

// app development services icons
import iosAppIcon from "./assets/icons/ios-development.png";
import androidAppIcon from "./assets/icons/android-development.png";
import flutterAppIcon from "./assets/icons/flutter-development.png";
import hybridAppIcon from "./assets/icons/hybrid-app-development.png";

// all services images
import service1 from "./assets/service1.webp";
import service2 from "./assets/service2.webp";
import service3 from "./assets/service3.webp";
import service4 from "./assets/service4.webp";
import service5 from "./assets/service5.webp";
import service6 from "./assets/service6.webp";

// clients
import client1 from "./assets/client-1.png";
import client2 from "./assets/client-2.png";
import client3 from "./assets/client-3.png";
import client4 from "./assets/client-4.png";

// client details
export const clientDetails = {
  phone: "919014944329",
  address:
    "Flat-355, 2nd Floor, Block-A, Mahaveer Orchids, Choodasandra, Bengaluru, Karnataka 560099, India",
};

// landing page header links
export const landingPageHeaderLinks = [
  {
    id: 1,
    title: "Home",
    link: "banner",
  },
  {
    id: 2,
    title: "About Us",
    link: "about-us",
  },
  {
    id: 3,
    title: "Services",
    link: "services",
  },
  // {
  //   id: 4,
  //   title: "Contact Us",
  //   link: "contact",
  // },
];

// website pages
export const websitePagesLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About Us",
    link: "/about-us",
  },
  {
    id: 3,
    title: "Our Services",
    link: "/services",
  },
  // {
  //   id: 4,
  //   title: "Contact Us",
  //   link: "/contact-us",
  // },
];

// working process
export const workingProcess = [
  {
    id: 1,
    title: "In-Depth Consultation",
    description: "Understand your needs, discuss goals.",
    img: process1,
  },
  {
    id: 2,
    title: "Strategic Planning",
    description: "Create roadmap, define KPIs, set timeline.",
    img: process2,
  },
  {
    id: 3,
    title: "Design and Development",
    description: "Design visually stunning, develop functional website",
    img: process3,
  },
  {
    id: 4,
    title: "Rigorous Testing",
    description: "Ensure optimal performance, compatibility, security",
    img: process4,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerence Websites",
    icon: ecomWebIcon,
    img: require("./assets/landingpage-services-imgs/ecommerce.webp"),
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: socialWebIcon,
    img: require("./assets/landingpage-services-imgs/socialmedia.webp"),
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly.",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: landingWebIcon,
    img: require("./assets/landingpage-services-imgs/landing.webp"),
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: customWebIcon,
    img: require("./assets/landingpage-services-imgs/customweb.webp"),
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: iosAppIcon,
    img: require("./assets/landingpage-services-imgs/ios.webp"),
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: androidAppIcon,
    img: require("./assets/landingpage-services-imgs/android.webp"),
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: flutterAppIcon,
    img: require("./assets/landingpage-services-imgs/flutter.webp"),
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: hybridAppIcon,
    img: require("./assets/landingpage-services-imgs/hybrid.webp"),
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    img: service2,
    title: "Web Development",
    link: "/services/web-development",
    smallPara:
      "In today's interconnected world, website applications have become an integral part of our daily lives. From e-commerce platforms to social media networks, from educational resources to government services, these digital tools have revolutionized the way we interact, communicate, and conduct business. The development of website applications is a complex process that involves a blend of creativity, technical expertise, and a deep understanding of user needs. \n\n At the core of website application development lies the interplay of front-end and back-end development. The front-end, or client-side, is what the user sees and interacts with.",
    keyBenefits: [
      "Responsive and user-friendly design.",
      "Custom-built solutions tailored to your business needs.",
      "Secure and scalable architecture.",
      "Seamless integration with third-party tools and APIs.",
    ],
  },
  {
    id: 2,
    img: service1,
    title: "App Development",
    link: "/services/app-development",
    smallPara:
      "Mobile applications have become an integral part of our daily lives, transforming the way we communicate, consume information, and conduct business. The development of mobile apps requires a unique set of skills and considerations, as compared to website development.\n\n One of the key differences between mobile and web app development is the platform-specific nature of mobile apps. While web apps can be accessed on any device with a web browser, mobile apps are designed for specific platforms, such as iOS and Android. This necessitates developing separate versions for each platform, often using different programming languages and development environments.",
    keyBenefits: [
      "Cross-platform compatibility for iOS and Android.",
      "User-centric design for better engagement.",
      "Robust performance and offline capabilities.",
      "Advanced security features for data protection.",
    ],
  },
  {
    id: 3,
    img: service3,
    title: "Artificial Intelligence",
    link: "/services/artificial-intelligence",
    smallPara:
      "Artificial Intelligence (AI) has rapidly evolved from a concept in science fiction to a transformative force reshaping industries and societies. AI development, the process of creating intelligent systems capable of learning, reasoning, and problem-solving, is driving innovation and revolutionizing the way we live and work.\n\nAt the heart of AI development is the creation of algorithms and models that enable machines to learn from data and improve their performance over time. Machine learning, a subset of AI, involves training algorithms on large datasets to recognize patterns, make predictions, and automate tasks. Deep learning, a more advanced form of machine learning, utilizes artificial neural networks to process complex data and learn from it.",
    keyBenefits: [
      "Automates repetitive tasks to save time.",
      "Improves decision-making with data-driven insights.",
      "Enhances customer experiences with personalization.",
      "Detects anomalies for fraud prevention and risk management.",
    ],
  },
  {
    id: 4,
    img: service4,
    title: "Blockchain",
    link: "/services/blockchain",
    smallPara:
      "Blockchain technology, a decentralized and distributed ledger system, has emerged as a disruptive force with the potential to transform industries across the globe. Blockchain development involves creating and implementing applications that leverage the unique features of blockchain technology to enhance security, efficiency, and transparency.\n\n At the core of blockchain is a distributed network of nodes that maintain a shared ledger of transactions. Each transaction is recorded as a block and added to the chain, creating an immutable and tamper-proof record. This decentralized nature eliminates the need for intermediaries, such as banks or clearinghouses, fostering trust and reducing the risk of fraud.",
    keyBenefits: [
      "Enhanced security and data integrity.",
      "Decentralized transactions with no intermediaries.",
      "Improved transparency and traceability.",
      "Cost savings through streamlined processes.",
    ],
  },
  {
    id: 5,
    img: service5,
    title: "Robotic Process Automation (RPA)",
    link: "/services/rpa",
    smallPara:
      "Robotic Process Automation (RPA) is a technology that uses software robots to automate repetitive, rule-based tasks. These software robots can mimic human actions, interacting with applications and systems to perform tasks that were previously done manually. RPA has emerged as a powerful tool for businesses looking to improve efficiency, reduce costs, and enhance accuracy.\n\n One of the key benefits of RPA is its ability to automate repetitive tasks that are prone to human error. By eliminating manual intervention, RPA can significantly reduce the risk of mistakes and ensure consistency in processes. This can lead to improved quality and compliance, as well as reduced operational costs.",
    keyBenefits: [
      "Reduces manual workload for employees.",
      "Increases process efficiency and speed.",
      "Minimizes errors in repetitive tasks.",
      "Improves compliance with industry regulations.",
    ],
  },
  {
    id: 6,
    img: service6,
    title: "AR & VR",
    link: "/services/ar-vr",
    smallPara:
      "Augmented Reality (AR) and Virtual Reality (VR) are immersive technologies that are rapidly transforming the way we interact with the digital world. AR overlays digital information onto the real world, enhancing our perception of reality, while VR creates entirely simulated environments that transport us to different places and experiences.\n\n AR and VR have a wide range of applications across various industries. In gaming, they offer immersive experiences that blur the lines between the real and virtual worlds. In education, they can provide interactive and engaging learning experiences. In healthcare, they are used for training, surgery simulations, and rehabilitation. In architecture and design, they allow for virtual walkthroughs of buildings and spaces before construction.",
    keyBenefits: [
      "Delivers immersive user experiences.",
      "Transforms training with realistic simulations.",
      "Enhances customer engagement and interactivity.",
      "Reduces costs with virtual prototyping and walkthroughs.",
    ],
  },
];

// trusted clients
export const clients = [
  {
    id: 1,
    img: client1,
  },
  {
    id: 2,
    img: client2,
  },
  {
    id: 3,
    img: client3,
  },
  {
    id: 4,
    img: client4,
  },
];

// testimonials
export const testimonials = [
  {
    id: 1,
    img: "",
    name: "Rohan Sharma",
    title: "CEO of ShopSmart Pvt Ltd",
    description:
      "Working with Anytechwork was a game-changer for our e-commerce business. We needed a mobile app that could handle a large inventory and ensure a seamless shopping experience for our customers. Anytechwork not only delivered a user-friendly app for both Android and iOS but also integrated real-time inventory management and personalized recommendations using AI algorithms. Their team was incredibly responsive and flexible, making adjustments based on our feedback at every stage of development.",
  },
  {
    id: 2,
    img: "",
    name: "Priya Bansal",
    title: "Managing Director of SafeFunds Financial Group",
    description:
      "As a financial services company, we required a blockchain solution to improve transparency and security for our clients. We approached Anytechwork with a complex set of requirements involving smart contracts, secure transaction tracking, and decentralized data storage. Their team impressed us with their in-depth knowledge of blockchain technology and ability to explain complex concepts in simple terms. From initial consultation to the final implementation, Anytechwork was professional, efficient, and very detail-oriented.",
  },
  {
    id: 3,
    img: "",
    name: "Vikram Rao",
    title: "Operations Manager at FreshMart Retail Solutions",
    description:
      "We wanted to leverage AI to enhance our retail analytics capabilities, but we had no idea where to start. Anytechwork provided a comprehensive solution that included everything from customer behavior analysis to predictive modeling. They created an AI-driven platform that analyzed real-time customer data and provided actionable insights on purchasing trends, inventory optimization, and personalized marketing strategies.",
  },
  // {
  //   id: 4,
  //   img: "",
  //   name: "Dr. Meera Nair",
  //   title: "Co-Founder of HealthNet Solutions",
  //   description:
  //     "Since implementing their solution, we have seen a significant improvement in data security, with no incidents of breaches or unauthorized access. Our clients and patients feel more confident knowing that their data is protected with cutting-edge technology. Anytechwork's attention to detail and ongoing support has been invaluable, making them our go-to partner for all things cybersecurity.",
  // },
  // {
  //   id: 5,
  //   img: "",
  //   name: "Anjali Deshmukh",
  //   title: "Sales Director at Elite Properties Pvt Ltd",
  //   description:
  //     "We were looking for innovative ways to enhance our client experience in real estate sales. Anytechwork helped us develop an immersive VR platform that allows potential buyers to take virtual tours of our properties from anywhere in the world. The VR environment was meticulously designed, with detailed 3D renderings that gave buyers a realistic feel of our homes.",
  // },
  // {
  //   id: 6,
  //   img: "",
  //   name: "Ajay Patil",
  //   title: "CTO of TechServe Solutions",
  //   description:
  //     "We needed a completely revamped website that could better reflect our growing enterprise software business. Anytechwork came in and completely redesigned our website from the ground up, implementing a responsive, mobile-friendly design with integrated CRM tools and a content management system. The website's new user interface is sleek, modern, and easy to navigate, providing our clients with a better experience.",
  // },
  // {
  //   id: 7,
  //   img: "",
  //   name: "Sunil Kapoor",
  //   title: "Operations Manager at SteelTech Manufacturing",
  //   description:
  //     "Our manufacturing process was riddled with inefficiencies due to manual data entry and repetitive tasks. Anytechwork’s Robotic Process Automation (RPA) solution helped us automate critical processes, from order fulfillment to inventory management. The RPA bots they developed have been instrumental in cutting down human errors, reducing operational costs, and improving productivity.",
  // },
];

// industry company serve
export const industriesCompanyServe = [
  {
    id: 1,
    title: "Healthcare",
    img: require("./assets/industries/Healthcare.webp"),
    desc: "Transforming patient care and operations with AI-powered diagnostics, data analytics, and telemedicine solutions.",
  },
  {
    id: 2,
    title: "E-commerce & Retail",
    img: require("./assets/industries/E-commerce & Retail.webp"),
    desc: "Enhancing customer experiences with personalized recommendations, inventory management, and secure online transactions.",
  },
  {
    id: 3,
    title: "Finance & Banking",
    img: require("./assets/industries/Finance & Banking.webp"),
    desc: "Streamlining processes with AI, blockchain, and machine learning for fraud detection, risk assessment, and smarter investment strategies.",
  },
  {
    id: 4,
    title: "Energy",
    img: require("./assets/industries/Energy.webp"),
    desc: "Optimizing energy management, forecasting, and sustainability with IoT and data-driven AI solutions.",
  },
  {
    id: 5,
    title: "Real Estate",
    img: require("./assets/industries/Real Estate.webp"),
    desc: "Revolutionizing property management, investment decisions, and customer engagement with AI and predictive analytics.",
  },
  {
    id: 6,
    title: "Manufacturing",
    img: require("./assets/industries/Manufacturing.webp"),
    desc: "Driving automation, predictive maintenance, and operational efficiency with AI, machine learning, and IoT technologies.",
  },
  {
    id: 7,
    title: "Data Analytics & Business Intelligence",
    img: require("./assets/industries/Data Analytics & Business Intelligence.webp"),
    desc: "Actionable insights from big data to drive informed decision-making and growth strategies.",
  },
  {
    id: 8,
    title: "IoT Development",
    img: require("./assets/industries/IoT Development.webp"),
    desc: "Connecting devices and systems to enhance automation and operational efficiency",
  },
  {
    id: 9,
    title: "Logistics & Supply Chain",
    img: require("./assets/industries/Logistics & Supply Chain.webp"),
    desc: "Enhancing logistics, inventory, and supply chain management with AI and IoT-enabled tracking and optimization.",
  },
  {
    id: 10,
    title: "Education",
    img: require("./assets/industries/Education.webp"),
    desc: " Personalized learning experiences, predictive analytics for student outcomes, and automated administrative processes using AI and ML.",
  },
  {
    id: 10,
    title: "Telecom",
    img: require("./assets/industries/Telecom.webp"),
    desc: " Boosting network efficiency, customer service, and fraud prevention through AI-driven solutions.",
  },
  {
    id: 11,
    title: "Entertainment & Media",
    img: require("./assets/industries/Entertainment & Media.webp"),
    desc: "Revolutionizing content creation, distribution, and audience engagement with AI-driven tools, personalized recommendations, and immersive experiences like AR/VR.",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/web_projects/1.webp"),
    title: "FE-Finance",
  },
  {
    id: 2,
    img: require("./assets/web_projects/2.webp"),
    title: "Ocxee",
  },
  {
    id: 3,
    img: require("./assets/web_projects/3.webp"),
    title: "Leaderbridge",
  },
  {
    id: 4,
    img: require("./assets/web_projects/4.webp"),
    title: "Gigzio",
  },
  {
    id: 5,
    img: require("./assets/web_projects/5.webp"),
    title: "FE Group",
  },
  {
    id: 6,
    img: require("./assets/web_projects/6.webp"),
    title: "V Talkz",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/app_projects/1.webp"),
    title: "PartEx",
  },
  {
    id: 2,
    img: require("./assets/app_projects/2.webp"),
    title: "Find A Driver",
  },
  {
    id: 3,
    img: require("./assets/app_projects/3.webp"),
    title: "Glowsy",
  },
  {
    id: 4,
    img: require("./assets/app_projects/4.webp"),
    title: "Artisan Express",
  },
  {
    id: 5,
    img: require("./assets/app_projects/5.webp"),
    title: "House of Deliverance",
  },
];
