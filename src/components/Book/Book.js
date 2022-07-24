import React from "react";
import "./book.scss";
import Page from "../Page/Page";
import { connect } from "react-redux";
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
      <div>
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
          className="demo-book"
          ref={this.book}
          style={{ background: "white" }}
        >
          <PageCover>BOOK TITLE</PageCover>
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
          <Page number={2}>Lorem ipsum...</Page>
          <PageCover>THE END</PageCover>
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
