import React from "react";
import "./book.scss";
import Page from "../Page/Page";
import { connect } from "react-redux";
import HTMLFlipBook from "react-pageflip";
import PageCover from "../PageCover/PageCover";
import phy_back from "../../assets/phy_back_cover_nlm.jpg";
import what_force from "../../assets/What-is-Force-and-Types-of-Forces.jpg";
class Book extends React.Component {
  constructor(props) {
    super(props);
    this.book = React.createRef();
    this.container = React.createRef();
    console.log(props);
    this.state = {
      page: 0,
      totalPage: 0,
    };
  }
  onChangeOrientation = () => {};

  nextButtonClick = () => {
    this.book.current.pageFlip().flipNext();
  };

  prevButtonClick = () => {
    this.book.current.pageFlip().flipPrev();
  };

  onPage = (e) => {
    console.log(e);
    this.setState({
      page: e.data,
    });
  };

  componentDidMount() {
    // this.setState({
    //     totalPage: this.flipBook.getPageFlip().getPageCount(),
    //   });
    // this.flipBook = this.book.current.pageFlip();
    console.log(this.book.current.pageFlip);
  }

  render() {
    return (
      <div ref={this.container}>
        <HTMLFlipBook
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
          <PageCover>
            <div>
              NEWTON'S LAWS OF MOTION
              <center>
                <img src={phy_back} id="cover" alt="cover" />
              </center>
            </div>
          </PageCover>
          <Page number={1}>
            <div>
              <div className="style3">Newton's Law of Motion</div>
              <br></br>
              <div class="style2"> Foundations of Newtonian Mechanics: </div>
              <b>(i)</b> Mass
              <br></br>
              <b>(ii)</b> Motion
              <br></br>
              <b>(iii)</b> Force
              <br></br>
              <div className="style2">
                {" "}
                Excerpts from Newton's Principle (Book 1 )
              </div>{" "}
              <br></br>
              <div className="style1">(A) Mass :</div>The quantity of matter is
              the measure of the same arising from it's density and bulk
              conjointly. <br></br>
              <br></br>
              <div className="style1">(B) Motion :</div>
              The quantity of motion is the measure of the same arising from the
              velocity and quantity of matter conjointly
              <br></br>
              <br></br>
              <div className="style1">(C) Force :</div>An impressed force is an
              action exerted upon a body, in order to change its state, either
              of rest, or of moving uniformly forward in a right line.
              <br></br>These definitions gave rise to the famous three laws:
              known as Newton's laws of motion.
              <br></br>
              <br></br>
              <center>
                <img src={what_force} alt="Force" width="300px" />
              </center>
            </div>
          </Page>
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
        </HTMLFlipBook>

        <div className="container">
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps)(Book);
