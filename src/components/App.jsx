import {React, Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import  {FetchGallery}  from './Gallery-base';


class App extends Component {
  state = {
    pictures: [],
    status: 'idle',
    showModal: false,
    largeImageUrl: '',
    page: 1,
    query: '',
    loadMore: null,
  };
  getLargeImgUrl = imgUrl => {
    this.setState({ largeImageUrl: imgUrl });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  searchResult = value => {
    this.setState({ query: value, page: 1, pictures: [], loadMore: null });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  componentDidUpdate(_, prevState) {
    const { page, query } = this.state;

    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.setState({ status: 'loading' });

      FetchGallery(query, page)
        .then(e =>
          this.setState(prevState => ({
            pictures: [...prevState.pictures, ...e.hits],
            status: 'idle',
            loadMore: 12 - e.hits.length,
          }))
        )
        .catch(error => console.log(error));
    }
  }
  render() {
    const { pictures, status, showModal, largeImageUrl, loadMore } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.searchResult} />
        {showModal && (
          <Modal imgUrl={largeImageUrl} onClose={this.toggleModal} />
        )}
        <ImageGallery pictures={pictures} onClick={this.getLargeImgUrl} />
        {status === 'loading' && <Loader />}
      {loadMore === 0 && <Button onClick={this.handleLoadMore} />}
    </>
      );
    
  }
};
export default App;
