import React from "react";
import "./book.scss";
import Page from "../Page/Page";
import { connect } from "react-redux";
<<<<<<< Updated upstream
import HTMLFlipBook from "react-pageflip";
import PageCover from "../PageCover/PageCover";
class Book extends React.Component {
  constructor(props) {
    super(props);
    this.book = React.createRef();
    console.log(props);
    this.state = {
      page: 0,
      totalPage: 0,
    };
  }
  onChangeOrientation = () => {};
=======
// import HTMLFlipBook from "react-pageflip";
// import PageCover from "../PageCover/PageCover";
// import phy_back from "../../assets/phy_back_cover_nlm.jpg";
// import what_force from "../../assets/What-is-Force-and-Types-of-Forces.jpg";
// import dummydata from "../../dummyData";
class Book extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.book = React.createRef();
  //   this.container = React.createRef();
  //   console.log(props);
  //   this.state = {
  //     page: 0,
  //     totalPage: 0,
  //   };
  // }
  // onChangeOrientation = () => {};
>>>>>>> Stashed changes

  // nextButtonClick = () => {
  //   this.book.current.pageFlip().flipNext();
  // };

  // prevButtonClick = () => {
  //   this.book.current.pageFlip().flipPrev();
  // };

  // onPage = (e) => {
  //   console.log(e);
  //   this.setState({
  //     page: e.data,
  //   });
  // };

  

  // createPageComponent() {
  //   // After every component check if its not overflowing and if its overflowing and curr_adding==desc then  add till it doesn't overflow and transfer remaining in next page
  //   let topic = 0;
  //   let title = 0;
  //   let subtopic = 0;
  //   let topic_size = dummydata.topics.length;
  //   let subtopic_size = dummydata.topics.subtopics.length;
  //   return (
  //     <Page number={1}>
  //       <div>
  //         {/* heading */}
  //         <div className="style3">Newton's Law of Motion</div>
  //         <br></br>
  //         {/* subheading/title */}
  //         <div class="style2"> Foundations of Newtonian Mechanics: </div>
  //         {/* description */}
  //         <div>
  //           <div className="style1">(A) Mass :</div>The quantity of matter is
  //           the measure of the same arising from it's density and bulk
  //           conjointly. <br></br>
  //           <br></br>
  //         </div>
  //       </div>
  //     </Page>
  //   );
  // }

  // componentDidMount() {
  //   console.log(dummydata);
  //   // this.setState({
  //   //     totalPage: this.flipBook.getPageFlip().getPageCount(),
  //   //   });
  //   // this.flipBook = this.book.current.pageFlip();
  //   console.log(this.book.current.pageFlip);
  // }

  render() {
    return (
<<<<<<< Updated upstream
      <div>
        <HTMLFlipBook
=======
      <div >
        {/* <HTMLFlipBook
>>>>>>> Stashed changes
          width={550}
          height={600}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          drawShadow={true}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          autoSize={true}
          onFlip={this.onPage}
          onChangeOrientation={this.onChangeOrientation}
          onChangeState={this.onChangeState}
          useMouseEvents={false}
          className="demo-book"
          ref={this.book}
        >
<<<<<<< Updated upstream
          <PageCover>BOOK TITLE</PageCover>
=======
          <PageCover>
            <div>
              NEWTON'S LAWS OF MOTION
              <center>
                <img src={phy_back} id="cover" alt="cover" />
              </center>
            </div>
          </PageCover>

>>>>>>> Stashed changes
          <Page number={1}>
            quibusdam commodi. Culpa sunt earum inventore? Placeat inventore
            maiores perspiciatis amet saepe ipsam fugit mollitia magni iure
            assumenda? Quaerat, pariatur cupiditate, mollitia fugiat maxime,
            laboriosam vitae facilis quo inventore assumenda soluta alias?
            Molestiae tenetur illum porro dicta similique alias dolore quaerat
            ut officia neque voluptatem consectetur ex, magnam ipsam minima
            libero repudiandae, est laudantium facilis. Perspiciatis, sequi
            illo. Nemo qui, aliquam impedit blanditiis voluptate unde quisquam
            consequuntur? Soluta quos error veniam ea nam reiciendis blanditiis
            neque ullam vel dignissimos officia enim nesciunt quam reprehenderit
            tempore magni exercitationem cupiditate distinctio, modi similique
            maxime asperiores rem nisi? Voluptatem ea distinctio pariatur, harum
            consequatur iure autem vitae eos ullam commodi consectetur
            perferendis temporibus vel, dolorem corporis fugit! Maiores officia
            veritatis, minima culpa laboriosam consequuntur, voluptate dicta
            recusandae, porro provident voluptatum ullam modi nam ipsa. Sed quae
            praesentium cupiditate modi fugiat sit quam, tempore ut excepturi
            reprehenderit rem, voluptates iste officiis est illo inventore sequi
            dignissimos explicabo fugit aperiam. Perferendis aliquam corrupti
            excepturi sunt exercitationem et numquam cupiditate autem, quibusdam
            earum fugiat magni nostrum ipsam ea magnam explicabo ipsa eveniet,
            quasi at amet? Ut consectetur minima voluptas tempora dolorum quos
            cumque, veritatis beatae magnam, quia id molestias? Commodi
            accusantium eos totam soluta, itaque officia, architecto ratione
            ipsa quidem nihil a porro neque distinctio amet molestias doloribus
            rem accusamus cumque voluptatibus consequuntur deserunt non eius
            quas dignissimos? Debitis aliquid inventore nostrum asperiores
            provident obcaecati vel hic recusandae architecto dolorem ullam
            aspernatur commodi deleniti aut, adipisci, placeat minus soluta
            omnis. Enim quae porro, deleniti, eligendi magnam expedita nemo
            pariatur inventore soluta ab id quos laudantium quo quibusdam iusto
            illum quis recusandae adipisci maiores. Impedit minus vitae
            dignissimos eveniet corrupti, soluta nemo expedita est quod amet,
            consectetur quos corporis saepe maxime nesciunt, ut odit non
            architecto quia hic eaque! Maxime provident odit iusto consequatur
            perferendis optio laboriosam.
          </Page>
<<<<<<< Updated upstream
          <Page number={2}>Lorem ipsum...</Page>
          <PageCover>THE END</PageCover>
        </HTMLFlipBook>

        <div className="container">
=======
          <Page number={2}>
            <div>
              <div class="style2">Newton's laws of motion</div>
              <br></br>
              <br></br>
              <div className="style1">First Law :</div>Every body continues in
              it's state of rest or of uniform rectilinear motion except if it
              is compelled by forces acting on it to change that state.
              <br></br>
              <br></br>
              <div className="style1">Second Law :</div>The change of motion is
              proportional to the applied force and takes place in the direction
              of the straight line along which that force acts.
              <br></br>
              <br></br>
              <div className="style1">Third Law :</div>To every action there is
              always an equal and contrary reaction; or the mutual actions of
              any two bodies are always equal and oppositely directed along the
              same straight line.
            </div>
          </Page>
          <PageCover>
            <div>THE END</div>
          </PageCover>
        </HTMLFlipBook> */}
        <Page />
        {/* <Page />
        <Page /> */}
        {/* <div className="container">
>>>>>>> Stashed changes
          <div className="button">
            <button
              type="button__prev"
              style={{
                position: "absolute",
                left: "1rem",
                top: "250px",
              }}
              onClick={this.prevButtonClick}
            >
              Previous page
            </button>
            [<span>{this.state.page}</span> of
            <span>{this.state.totalPage}</span>]
            <button
              type="button__next"
              style={{
                position: "absolute",
                right: "1rem",
                top: "250px",
              }}
              onClick={this.nextButtonClick}
            >
              Next page
            </button>
          </div>
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps)(Book);
