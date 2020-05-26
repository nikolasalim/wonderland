import React, { useEffect } from "react";
import NavBarProject from "./NavBarProject";

import classes from "./NonTechProjects.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NonTechProjects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <NavBarProject />
      <div className={classes.body}>
        <div className={classes.projectBox}>
          <h1 className={classes.text}>BEACH SIGNS</h1>
          <p className={classes.description}>
            In São Paulo, there's this saying that goes: "Shopping malls are the
            São Paulo beaches." It suggests that, since the city of São Paulo
            doesn't have any beach, people only hang out in shopping malls. Me
            and some friends disagree. So we made our own beach sign replicas
            and placed them on spots that no air conditioner will ever reach.
          </p>
          <div>
            <Slider {...settings}>
              <div>
                <img
                  src={
                    "https://drive.google.com/uc?id=0B-xwgE7Mby1yMEFORzBYVldMQzQ"
                  }
                  className={classes.sliderImage}
                ></img>
              </div>
              <div>
                <img
                  src={
                    "https://drive.google.com/uc?id=1kOP6WOCkJTA6aPt2DrVxI6WbKicie4Iq"
                  }
                  className={classes.sliderImage}
                ></img>
              </div>
              <div>
                <img
                  src={
                    "https://drive.google.com/uc?id=0B-xwgE7Mby1yQXhMRi1TLXktak0"
                  }
                  className={classes.sliderImage}
                ></img>
              </div>
              <div>
                <img
                  src={
                    "https://drive.google.com/uc?id=0B-xwgE7Mby1ySFE1R1V3aFh1dEE"
                  }
                  className={classes.sliderImage}
                ></img>
              </div>
              <div>
                <img
                  src={
                    "https://drive.google.com/uc?id=0B-xwgE7Mby1ySWlnLXotMnpIWEE"
                  }
                  className={classes.sliderImage}
                ></img>
              </div>
              <div>
                <img
                  src={
                    "https://drive.google.com/uc?id=0B-xwgE7Mby1yYngwRHg5MldVTk0"
                  }
                  className={classes.sliderImage}
                ></img>
              </div>
            </Slider>
          </div>
          <br />
          <br />

          <p className={classes.description}>
            Apparently, more people agreed with our new "beaches". We had the
            opportunity to give some interviews and make some TV appearances.
            The frame bellow shows the moment the interviewer asked us to walk
            naturaly towards the camera. We failed miserably. 
          </p>

          <iframe
            src="https://player.vimeo.com/video/194660153"
            width="1100"
            height="500"
            frameborder="0"
            allowfullscreen="true"
            className={classes.video}
          ></iframe>
          <br />
          <br />

          <p className={classes.description}>
            Even the Public São Paulo Museum of Image and Sound invited us to
            make a workshop there. Now our sign is (kind of) part of the
            museum's collection.
          </p>

          <Slider {...settings}>
            <div>
              <img
                src={
                  "https://drive.google.com/uc?id=1gsJ80qDYvemC0IjG92qnHx90UkktyMVT"
                }
                className={classes.sliderImage}
              ></img>
            </div>
            <div>
              <img
                src={
                  "https://drive.google.com/uc?id=11FOLphE9fOagM3CET3KzjjiYOo1zFH_Z"
                }
                className={classes.sliderImage}
              ></img>
            </div>
            <div>
              <img
                src={
                  "https://drive.google.com/uc?id=1Ob6_47PoJ96P9oHub_kjgoB3W9jyObZq"
                }
                className={classes.sliderImage}
              ></img>
            </div>
            <div>
              <img
                src={
                  "https://drive.google.com/uc?id=1FFRYLJceI2139EmYa5ilsLlZce6wYK6s"
                }
                className={classes.sliderImage}
              ></img>
            </div>
          </Slider>

          <div className={classes.divider} />
        </div>

        <div className={classes.projectBox}>
          <h1 className={classes.text}>TIC-TAC-TOE</h1>
          <p className={classes.description}>
            If tic-tac-toe is the dumbest game in the world, is this the dumbest
            side project ever made? Maybe. But I really wanted to know if
            random, unknown people would join me on this one, so I started
            spreading tic-tac-toe stickers with a "x" on it all over the city.
            And, well, it seems like people did join me on this one. Touché.
          </p>
          <img
            src={
              "https://drive.google.com/uc?id=17ywtfbu_2ls-hqMEpbwdWcZSU0hIPj-F"
            }
            className={classes.image}
          ></img>
          <img
            src={
              "https://drive.google.com/uc?id=1IknLEWjRG9qOmVJk9WSYL_JSVUfMKdtR"
            }
            className={classes.image}
          ></img>
          <img
            src={
              "https://drive.google.com/uc?id=18pn9vquEFT8mDYGNbVwRmNQAmigsWSq3"
            }
            className={classes.image}
          ></img>{" "}
          <img
            src={
              "https://drive.google.com/uc?id=1IknLEWjRG9qOmVJk9WSYL_JSVUfMKdtR"
            }
            className={classes.image}
          ></img>
          <div className={classes.divider} />
        </div>

        <div className={classes.projectBox}>
          <h1 className={classes.text}>WABBA LUBBA DUB DUB</h1>
          <p className={classes.description}>
            During an application process for a job, I was challenged to 'create
            and then break something'. One simply can't dislike both mambo AND
            Rick &#38; Morty, right?
          </p>
          <iframe
            src="https://player.vimeo.com/video/275324780"
            width="1100"
            height="500"
            frameborder="0"
            allowfullscreen="true"
            className={classes.video}
          ></iframe>
          <div className={classes.divider} />
        </div>

        <div className={classes.projectBox}>
          <h1 className={classes.text}>3,80</h1>
          <p className={classes.description}>
            One of these days, my wife and I decided to visit all São Paulo
            metro stations in one day, just to see how much fun and tiredness we
            could buy with 3,80 reais. We recorded this weird adventure with a
            smartphone and here's the result.
          </p>
          <img
            src={"https://drive.google.com/uc?id=0B-xwgE7Mby1ySnNqRFhSc2JOdEE"}
            className={classes.image}
          ></img>
          <iframe
            src="https://player.vimeo.com/video/246694650"
            width="1100"
            height="500"
            frameborder="0"
            allowfullscreen="true"
            className={classes.video}
          ></iframe>
          <div className={classes.divider} />
        </div>

        <div className={classes.projectBox}>
          <h1 className={classes.text}>GIANT TINY CARS</h1>
          <p className={classes.description}>
            In Amsterdam, there are these tiny little cars that apparently can
            do whatever they want, except being taken seriously. Attach some
            cardboard to is and voilà: people will take them even less
            seriously.
          </p>
          <img
            src={
              "https://drive.google.com/uc?id=1JLVOfaE5LOSKSN7hYkFvnUDXf5dW7c7h"
            }
            className={classes.image}
          ></img>
          <div className={classes.divider} />
        </div>

        <div className={classes.projectBox}>
          <h1 className={classes.text}>
            THE SADDEST VENTRILOQUIST IN THE WORLD
          </h1>
          <p className={classes.description}>
            This is one is very hard to put into words. Either because it makes
            absolutely no sense or because it's only meant to be felt.
          </p>
          <iframe
            src="https://player.vimeo.com/video/257760038"
            width="1100"
            height="500"
            frameborder="0"
            allowfullscreen="true"
            className={classes.video}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default NonTechProjects;
{
  /* <iframe title="vimeo-player" src="https://player.vimeo.com/video/257760038" width="640" height="360" frameborder="0" allowfullscreen></iframe> */
}
