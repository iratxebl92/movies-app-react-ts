import { CiInstagram, CiTwitter } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";

export const Information = () => {
  return (
    <div className="p-4 m-4">
      <h2 className="text-4xl pb-4">Leonardo DiCaprio</h2>
      <p className="mb-6 leading-7">
        Leonardo Wilhelm DiCaprio (born November 11, 1974) is an American actor
        and film producer. Known for his work in biopics and period films,
        DiCaprio is the recipient of numerous accolades, including an Academy
        Award, a British Academy Film Award, and three Golden Globe Awards. As
        of 2019, his films have grossed over $7.2 billion worldwide, and he has
        been placed eight times in annual rankings of the world's highest-paid
        actors.
      </p>
      <p className="mb-6 leading-7">
        Born in Los Angeles, DiCaprio began his career in the late 1980s by
        appearing in television commercials. In the early 1990s, he had
        recurring roles in various television shows, such as the sitcom
        Parenthood, and had his first major film part as author Tobias Wolff in
        This Boy's Life (1993). At age 19, he received critical acclaim and his
        first Academy Award and Golden Globe Award nominations for his
        performance as a developmentally disabled boy in What's Eating Gilbert
        Grape (1993). He achieved international stardom with the star-crossed
        romances Romeo + Juliet (1996) and Titanic (1997).
      </p>
      <p className="mb-6 leading-7">
        After the latter became the highest-grossing film at the time, he
        reduced his workload for a few years. In an attempt to shed his image of
        a romantic hero, DiCaprio sought roles in other genres, including crime
        drama in Catch Me If You Can (2002) and Gangs of New York (2002); the
        latter marked the first of his many successful collaborations with
        director Martin Scorsese. DiCaprio portrayed Howard Hughes in The
        Aviator (2004) and received acclaim for his performances in the
        political thriller Blood Diamond (2006), the crime drama The Departed
        (2006), and the romantic drama Revolutionary Road (2008).
      </p>
      <p className="mb-6 leading-7">
        In the following decade, DiCaprio starred in several high-profile
        directors' projects, including the science fiction thriller Inception
        (2010), the western Django Unchained (2012), the biopic The Wolf of Wall
        Street (2013), the survival drama The Revenant (2015), for which he won
        an Academy Award and a BAFTA Award for Best Actor in a Leading Role, and
        the comedy-drama Once Upon a Time in Hollywood (2019), all of which were
        critical and commercial successes.
      </p>
      <p className="mb-6 leading-7">
        DiCaprio is the founder of Appian Way Productions, a production company
        that has produced some of his films and the documentary series
        Greensburg (2008–2010), and the Leonardo DiCaprio Foundation, a
        nonprofit organization devoted to promoting environmental awareness. He
        regularly supports charitable causes and has produced several
        documentaries on the environment. In 2005, he was named a Commander of
        the Ordre des Arts et des Lettres for his contributions to the arts, and
        in 2016, he appeared in Time magazine's 100 most influential people in
        the world
      </p>
      <div className="grid grid-cols-3">
        <div>
            <p className="font-bold">Known For</p>
            <p>Acting</p>
        </div>
        <div>
            <p className="font-bold">Known Credits</p>
            <p>157</p>
        </div>
        <div>
            <p className="font-bold">Gender</p>
            <p>Male</p>
        </div>
        <div className="my-4">
            <p className="font-bold">Birthday</p>
            <p>November 11, 1974 (50 years old)</p>
        </div>       
        <div className="my-4">
            <p className="font-bold">Place of Birth</p>
            <p>Los Angeles, California, USA</p>
        </div>
      </div>
      <div className="flex">
        <a className="h-14 w-14"  href=""><CiInstagram style={{width:'100%', height: '100%'}} /></a>
        <a  className="h-14 w-14" href=""><CiTwitter style={{width:'100%', height: '100%'}} /></a>
      </div>
    </div>
  );
};
