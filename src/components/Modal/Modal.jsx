import PropTypes from "prop-types";
import {React, Component }  from 'react';
import css from "./Modal.module.css";

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown)
    }

    handleKeydown = event => {
        if (event.code === 'Escape') {
            this.props.onClose();
        }
    }

    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    }

    render() {
        return (
           <div className={css.overlay}>
                <div className={css.modal}>
                    <img src={this.props.imgUrl} alt="" />
                </div>
            </div>
        )
    }
};
Modal.proptTypes = {
    onClose: PropTypes.func.isRequired,
};
