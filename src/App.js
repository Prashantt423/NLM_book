import { connect } from 'react-redux';
import Book from './components/Book/Book';
import 'bootstrap/dist/css/bootstrap.min.css';
function App(props) {
  // const dummyData = [
  //   {
  //     page: 1,
  //     title: "page 1",
  //     content: "lorem ipsum",
  //   },
  //   {
  //     page: 2,
  //     title: "page 2",
  //     content: "lorem ipsum",
  //   },
  //   {
  //     page: 3,
  //     title: "page 3",
  //     content: "lorem ipsum",
  //   },
  //   {
  //     page: 4,
  //     title: "page 4",
  //     content: "lorem ipsum",
  //   },
  //   {
  //     page: 5,
  //     title: "page 5",
  //     content: "lorem ipsum",
  //   },
  // ];
  console.log(props.page);
  return (
    <div
      style={{
        // width: "50vw",
        padding: '2rem 6rem',
        position: 'relative',
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        // flexDirection: "column",
      }}
    >
      <Book />
    </div>
    // <div className="main">
    //   {/* previous button */}
    //   {/* <button
    //     id="prev-btn"
    //     onClick={() => {
    //       props.page > 1 &&
    //         props.dispatch({ type: "page", value: props.page - 1 });
    //     }}
    //   >
    //     <FontAwesomeIcon icon={faArrowAltCircleLeft} />
    //   </button> */}

    //   {/* <Page data={dummyData[props.page - 1]} /> */}

    //   {/* next button */}
    //   {/* <button
    //     id="next-btn"
    //     onClick={() => {
    //       props.page < dummyData.length - 1 &&
    //         props.dispatch({ type: "page", value: props.page + 1 });
    //     }}
    //   >
    //     <FontAwesomeIcon icon={faArrowAltCircleRight} />
    //   </button> */}
    // </div>
  );
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps)(App);
