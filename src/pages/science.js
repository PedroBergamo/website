import React from 'react';
import band from "../images/Santeros1.png"
import "./pages.css"
import {Link} from "react-router-dom"

var canario_passarinho = "https://www.recantocaipira.com.br/duplas/canario_passarinho/canario_passarinho.html";
var furia = "https://www.youtube.com/watch?v=RJ8V-DpP1gM";
var condor = "https://www.youtube.com/watch?v=Czu7Yc6Fnmo";
var satu = "https://www.satulankinen.fi/";
var chemistry = "https://www.sciencedirect.com/science/article/pii/S0022231316305737";
var chemicalphysics = "https://www.sciencedirect.com/science/article/pii/S0301010416301501";
var chemistryc = "https://www.scopus.com/record/display.uri?eid=2-s2.0-85020209527&origin=recordpage&featureToggles=FEATURE_VIEW_PDF:1";
var natural = "https://www.scopus.com/record/display.uri?eid=2-s2.0-85019731851&origin=recordpage&featureToggles=FEATURE_VIEW_PDF:1";
var ariano = "https://en.wikipedia.org/wiki/Ariano_Suassuna";
var minerals = "https://www.sciencedirect.com/science/article/abs/pii/S089268752100501X";

const Science = () => {
  return(
    <div className="content">
          <h1>CV</h1>
          <p>
          My name is Pedro Bergamo and I was born in Franca, a small city of shoemakers in the countryside of Brazil.
          I was named after my grandfather, who was a "Benzedor" (the Brazilian equivalent to the Afro-Caribbean "Santero")
          . I am also the youngest biological son of Pedro Bergamo and nephew of Antonio Bergamo from the Sertanejo duo <a
          className="text_link" href={canario_passarinho} target="_blank" rel="noreferrer">
          "Canário e Passarinho"</a>.
          </p>
            <p>
            When I was young, I wanted to be many things but scientist was never one of them.
            I wanted to be a musician, pastor, monk, writer. I would read anything
            related to religion, mythology or ancient history. When I was 14 my school librarian said "I would like to meet you
            when you grow up just to know what kind of person you will become. You are the only child who borrow those books".
            I was also interested in astronomy and luckily the library had a vast collection of Isaac Asimov books
            translated to Portuguese. I must have read most them, specially the Robot series. It was not the science on it that intrigued me
            but how the author analysed human behavior through absurd scenarios that would just be possible in Science Fiction.
            </p>
            <p>
            My uncle saw my interest in the field and tried to convince me to
            become a chemist. After all, Asimov was a chemist himself. I entered University when I was 17 and studied the subject
            but I quit right in the second year. The course bored me to death. There was no soul. No deep questions to be answered.
            You learn how to make this compound, nail a chemist job and live happily ever after.
            I saw myself more interested in alchemy than in whatever they were teaching.
            </p>
            <p>
            However, 2 or 3 years later, after a friend spoke about a magic trick, which envolved chemistry, something changed.
            I went back studying, same course, same University, but different mindset. I was just going through the thing.
            It worked. In the third year I got an internship in the department of
            computational chemistry of the University, which focused on quantum chemistry.
            </p>
            <p>
            "I hope you like to deal with computers," said the professor.
            </p>
            <p>
            "Absolutely," I lied. I had not the slightest interest in computers at the time.
            "How does a child who wants to be a monk ends up programming?" I must have thought.
            </p>
            <p>
            But the quantum world was trully intriguing, as it was Linux and everything about the open source movement
            and I manage to blend in with the other members of the department,
            mostly old mathematics teachers with crazy hairs, doing the their Ph.D..
            I got a grant to do my Master's Degree researching the exquisite luminescent nature of rare earths
            and had my research published in the <a className="text_link" href={chemistry}
            target="_blank" rel="noreferrer">"Journal of Luminescence"</a>, besides contributing with my colleagues research published on <a className="text_link" href={chemicalphysics}
            target="_blank" rel="noreferrer">"Chemical Physics"</a>, <a className="text_link" href={chemistryc}
            target="_blank" rel="noreferrer">"Journal of Physical Chemistry C"</a> and <a className="text_link" href={natural}
            target="_blank" rel="noreferrer">"Natural Products Communications"</a>. I got a job teaching chemistry for one year, which was quite fun,
            but my dream at the time was to pursue a Ph.D. and become a professor. With that mindset I moved to Finland in 2017.
            </p>
            <p>
            In Finland, I got a position as a researcher in modelling and simulation at Outotec, which is now Metso Outotec. At the beggining I was meant to program the
            chemistry behind the simulator used in the training of process operators and I even wrote a review on thoses types of simulations for the prestigious
             <a className="text_link" href={minerals}
            target="_blank" rel="noreferrer">"Minerals Engineering"</a>. But after two years my interests changed, which led me to take charge of the
            front-end of the application and I moved to Helsinki to work at the "Digital Solutions" team of the same company.
            </p>
            <p>
            My boss at this time was a typical old Fin with a Ph.D. in physics and passion for fishing in the ice. One day I discovered he received a medal and was a sort of knight, so I asked him what has he done to receive that honor but he just smiled and said "I don't know".
            In the years I worked in his team I learned a lot about front-end, UX design and even game development, since we were trying to
            use Unity to create a mobile version of the simulator. In 2021, the company merged, he retired and I decided to go my own way, although I am immensely grateful for those years.
            </p>
            <p>
            Today I am working as a freelancer, mostly graphic design and front-end development, but I am still intrigued about modelling and simulation and many aspects of back-end.
            I also love to know new people and discover their histories, so if you have any
            idea you think I can help, send me an e-mail or a DM in my social media and let's work on your project together!
            Hit me up also, if you just want to chat about Asimov, quantum mechanics, spirituality or whatever deep questions you have in your soul right now. Who knows? We might become best friends. Of course, if I don't bore you to death.
            </p>
        </div>
    );
};

export default Science;
