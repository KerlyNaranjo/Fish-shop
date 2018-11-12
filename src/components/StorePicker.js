import React from "react";
import PropTypes from 'prop-types';
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
    myInput = React.createRef();

    static propTypes = {
        history: PropTypes.object
    };

    goToStore = (event) => {
        // 1. Stop the form from submitting
        event.preventDefault();
        // 2. get the text from that input
        const storeName = this.myInput.current.value;
        // 3. Change the page to /store/
        this.props.history.push(`/store/${storeName}`);
    };
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Ingresa una tienda</h2>
                <input
                    type="text"
                    ref={this.myInput}
                    required
                    placeholder='Nombre de la tienda'
                    defaultValue={getFunName()}
                />
                <button type='submit'>Visitar tienda</button>
            </form>
        )
    }
}

export default StorePicker;