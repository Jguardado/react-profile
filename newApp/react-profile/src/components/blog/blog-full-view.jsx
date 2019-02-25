import React, { PropTypes, Component } from 'react';
import Modal from 'react-modal';

class BlogFullView extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    const { activateModal } = this.props;
    activateModal(true);
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    const { activateModal } = this.props;
    activateModal(false);
  }

  render () {
    const {
      blogEntries,
      image,
      selectedBlogIndex,
      activateModal,
      isModalActive
    } = this.props;
    console.log('Are we rendering? ');
    return (
      <Modal
        isOpen={isModalActive}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={'blog_modal'}
        contentLabel="Example Modal"
        >
        <div className="blog_full-view">
          <img
            className="blog_full_view_image"
            src={`http://localhost:3050${image}`}
            alt="full view pic didnt load"
            />
          <div className="blog_full_view_text_content">
            {
              blogEntries[selectedBlogIndex].blogEntry // TODO: This is trhowing an error
            }
          </div>
          <div
            className="blog_full_view_close_btn"
            onClick={() => activateModal(false)}
            >
            CLOSE
          </div>
        </div>
      </Modal>
    );
  }
};

BlogFullView.defaultProps = {
  blogEntries: [],
  image: '',
  selectedBlogIndex: 0,
  activateModal: () => {},
};

BlogFullView.propTypes = {
  blogEntries: PropTypes.array,
  image: PropTypes.string,
  selectedBlogIndex: PropTypes.number,
  activateModal: PropTypes.func,
};

export default BlogFullView;
