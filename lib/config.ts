export const CONFIG = {
    PROJECTS: [
      {
        title: "Reponse App",
        description: "A new way to chat with your communities and friends.",
        role: "Founder & Creator",
        what: "I founded Reponse back in 2021 to make comminication more easy than ever!",
        img: "/projects/reponse.png"
      },
      {
        title: "CodAre",
        description: "A Discord server for coding community.",
        role: "Support Team & Staff",
        what: "I joined the CodAre's support team in 2020 and it was best decision in my life.",
        img: "/projects/codare.jpg"
      },
      {
        title: "RepeatPay",
        description: "Innovative payment solution for your websites.",
        role: "Founder & Creator",
        what: "I founded RepeatPay back in 2021 to make open-source donating app for your donate pages and etc..",
        img: "/projects/repeatpay.png"
      }
    ] as PROJECTS[],
  
  };
  
  interface PROJECTS {
    title: string;
    description: string;
    role: string;
    what: string;
    img: string;
  }