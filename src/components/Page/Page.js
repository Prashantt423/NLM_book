import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './page.scss';
const Page = () => {
  return (
    <div className='page'>
      <div className='page_content'>
        <Row className='page_header'>
          <h3 className='page_heading'>Page header </h3>
        </Row>
        <Row className='page_topic'>
          <h3 className='page_topic_title'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            saepe quibusdam architecto, laborum delectus fugit!
          </h3>
        </Row>
        <Row className='page_subtopic'>
          <Row className='page_subtopic_box'>
            <h3 className='page_subtopic_box_title'>1. Lorem, ipsum.</h3>
            <p className='page_subtopic_box_content'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              odit quisquam ducimus quos laboriosam tempora tempore? Illum cum
              eaque facilis consequatur enim eius alias ipsa quaerat
              necessitatibus recusandae neque animi vero dicta dolorum, odio
              accusantium in quibusdam nobis reiciendis eos vel? Excepturi eum
              similique magnam maxime eligendi voluptates consequuntur iusto.
            </p>
          </Row>

          {/* image and diagram */}
          <Row className='page_subtopic_image'>
            <Col className='page_subtopic_image_formulae' sm='12' lg='6' md='6'>
              heu
            </Col>
            <Col className='page_subtopic_image_diagram' sm='12' lg='6' md='6'>
              kjnrf
            </Col>
          </Row>
          {/* Rest all content  */}
          <Row className='page_subtopic_box'>
            <h3 className='page_subtopic_box_title'>1. Lorem, ipsum.</h3>
            <p className='page_subtopic_box_content'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              odit quisquam ducimus quos laboriosam tempora tempore? Illum cum
              eaque facilis consequatur enim eius alias ipsa quaerat
              necessitatibus recusandae neque animi vero dicta dolorum, odio
              accusantium in quibusdam nobis reiciendis eos vel? Excepturi eum
              similique magnam maxime eligendi voluptates consequuntur iusto.
            </p>
          </Row>
        </Row>
        <Row className='page_footer'>
          <p>Audio</p>
        </Row>
      </div>
    </div>
  );
};

export default Page;
